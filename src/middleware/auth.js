const { ForbiddenError, AuthenticationError, UserInputError  } = require('apollo-server') ;
const { skip, combineResolvers } = require('graphql-resolvers') ;
const isAuthenticated = (parent, args, {me} ) => me ? skip : new AuthenticationError('Not authenticated as user');

const isAdmin = combineResolvers(
  isAuthenticated,
  (parent, args, { me: { role } }) =>
    role =="admin"
      ? skip
      : new ForbiddenError('Not authorized as admin'),
);
const isEditor = combineResolvers(
  isAuthenticated,
  (parent, args, { me: { role } }) =>
    role == "editor"
      ? skip
      : new ForbiddenError('Not authorized as admin'),
);
const isManager = combineResolvers(
  isAuthenticated,
  (parent, args, { me: { role } }) =>
    role == "editor" || role=='admin'
      ? skip
      : new ForbiddenError('Not authorized as admin'),
);
module.exports = {    
  isAuthenticated,
  isAdmin,
  isEditor,
  isManager
}