const { PubSub } = require('graphql-subscriptions');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken')
const {
    AuthenticationError,
    ApolloError
} = require('apollo-server');
const {
    isAuthenticated,
    isAdmin,
    isManager
} = require('../middleware/auth');

const {
    combineResolvers
} = require('graphql-resolvers');

const {
    paginate
} = require("../utils")

const pubsub = new PubSub();

const NEW_USER = 'NEW_USER';

const createToken = async (user, secret, expiresIn) => {
    const {
        id,
        email,
        name,
        roles
    } = user;

    const role = roles[0]['name'];

    return await jwt.sign({
        id,
        email,
        name,
        role
    }, secret, {
        expiresIn,
    });
};
// ----------------------------------------------------------------------
// toggle user active status
// ----------------------------------------------------------------------
const updateUserActive = combineResolvers(
    isAuthenticated,
    async (parent, args, {
        models
    }) => {
        // Update     
        // 0: pause(stopped)
        // 1: Active
        // 2: Block
        var updateContent = {
            active: args.status,
            deletedAt: null
        }
        if (args.status == 2) updateContent.deletedAt = new Date()
        res = await models.User.update(updateContent, {
            where: {
                id: args.id
            }
        })
        return {
            error: 0
        }
    }
);

module.exports = {
    Subscription: {
      newUser: {
        subscribe: () => pubsub.asyncIterator(NEW_USER),
      },
    },
    Query: {
        allUsers: async (_, args, {
            models
        }) => {
            const Op = models.Sequelize.Op
            var where = {}
            if ('name' in args) {
                where.name = {
                    [Op.like]: `%${args.name}%`
                }
            }
            if ('phone' in args) {
                where.phone = {
                    [Op.like]: `%${args.phone}%`
                }
            }
            if (args.active < 3) {
                where.active = args.active
            }
            const re = await models.User.findAndCountAll({
                where,
                include: [{
                    model: models.Role,
                    as: 'roles',
                    where: {
                        id: 3
                    }
                }],
                ...paginate(args.page, args.limit)
            })
            return {
                total: re.count,
                items: re.rows
            }
        },
        getUser: (_, {id}, {models}) => models.User.findOne({
            where: {id},
            include: [{
                model: models.Role,
                as: 'roles'                
            }],
        }),
        existItem,
        userInfo,
        allAdmins,
        recvAddress,
    },
    Mutation: {
        // ----------------------------------------------------------------------
        // Sign up
        // ----------------------------------------------------------------------
        signup: async (_, args, {
            models,
            SECRET
        }) => {
            var user = await models.User.create({
                ...args
            });
            await user.addRoles(3);
            const roles = await user.getRoles();
            user = user.toJSON();
            user.roles = roles;
            pubsub.publish(NEW_USER, {
              newUser: {
                ...args,
              },
            }); 
            return {
                token: createToken(user, SECRET, '24h'),
                user
            };
        },
        // ----------------------------------------------------------------------
        // login
        // ----------------------------------------------------------------------
        login: async (parent, args, {
            models,
            SECRET
        }) => {
            var user = await models.User.findByLogin(args.email);
            if (!user) {
                throw new ApolloError('There is no User', "NOUSER")
            }

            const isValid = await bcrypt.compare(args.password, user.password);
            if (!isValid) {
                throw new AuthenticationError('Invalid password');
            }
            return {
                token: createToken(user, SECRET, '24h'),
                user
            };
        },
        // ----------------------------------------------------------------------
        // Reset Password
        // ----------------------------------------------------------------------
        resetpassword: combineResolvers(
            isAuthenticated,
            async (parent, args, {
                models,
                me
            }) => {
                let user = await models.User.findByPk(me.id);

                const isValid = await bcrypt.compare(args.curPassword, user.password);
                if (!isValid) {
                    return {
                        error: 1
                    }
                } else
                    await models.User.update({
                        password: args.newPassword
                    }, {
                        individualHooks: true,
                        where: {
                            id: me.id
                        }
                    })

                return {
                    error: 0
                }
            },
        ),
        updateUserActive,
        updateUser,
        delUser,
        delAdmin,
        addUser,
        recvAddress: mutRecvAddress,
        delAddress,
    },
};