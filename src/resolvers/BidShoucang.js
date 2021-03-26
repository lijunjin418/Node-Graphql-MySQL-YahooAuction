const {combineResolvers} = require('graphql-resolvers');
const { ForbiddenError, AuthenticationError } = require('apollo-server') ;
const {paginate}= require("../utils")

const {isAuthenticated, isAdmin, isManager} = require('../middleware/auth');
// ----------------------------------------------------------------------
// Add favourite list
// ----------------------------------------------------------------------
const addShoucang = combineResolvers(
   isAuthenticated,
   async(_, args, {models, me}) =>
   {
      var res = {
         error: 0
      };
      // Yahoo good history ....
      models.YahooGood.upsert({
         AuctionID:        args.AuctionID,
         Title:            args.Title,
         img:              args.img,
         exitTime:         args.exitTime         
      })
            
      bs = await models.BidShoucang.create({
         userId: me.id,
         AuctionID: args.AuctionID
      })
      res['res'] = {
         id: bs.id,
         createdAt: bs.createdAt
      }
      return res
    }
 );

// ----------------------------------------------------------------------
// Get favourite list
// ----------------------------------------------------------------------
const getShoucang = combineResolvers(
   isAuthenticated,
   async(_, args, {models, me}) =>
   {
      const res= await models.BidShoucang.findAndCountAll({
         include:[{
            model: models.YahooGood,  
            attributes: []          
         }],
         where:{userId: me.id},
         attributes: ['id', 'AuctionID', 'createdAt', 'YahooGood.Title', 'YahooGood.img', 'YahooGood.exitTime'],
         ...paginate(args.page, args.limit),
         raw: true
      })    
      return {
         total: res.count,
         items: res.rows
      }
   }
 );
// ----------------------------------------------------------------------
// Add favourite list
// ----------------------------------------------------------------------
const delShoucang = combineResolvers(
   isAuthenticated,
   async(_, args, {models, me}) =>
    {
      const res = await models.BidShoucang.destroy({
         where:{id: args.id, userId: me.id}
      })
      return {        
         error: !res
      }
    }
 );

module.exports = {
   Query: {          
      getShoucang
   },
   Mutation: {      
      delShoucang,
      addShoucang
   },
};