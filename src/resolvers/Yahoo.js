const {parse} = require('node-html-parser')
myCache = require('../service/cache')
const axios = require('axios');
const {combineResolvers} = require('graphql-resolvers');
const { ForbiddenError, AuthenticationError } = require('apollo-server') ;
const {paginate}= require("../utils")

const {isAuthenticated, isAdmin, isManager} = require('../middleware/auth');

module.exports = {
   Subscription: {
     newUser: {
       subscribe: () => pubsub.asyncIterator(NEW_USER),
     },
   },
   Query: {
      yahooAccount: (_, args, {models}) => models.AccountYahoo.findAll(),      
      bidhistory,
   },
   Mutation: {
      // ----------------------------------------------------------------------------------------------------
      // Place Bid
      // ----------------------------------------------------------------------------------------------------
      bidding: combineResolvers(
         isAuthenticated,
         async (parent, args, {models, me}) => {            
            /* error code list
            0:    successed
            104: not authenticated
            11:   AccountYahoo not Login
            12:   AccountYahoo only One exist and  Already placed Bid
            10:   AccountYahoo not exist
            20:   Bid Home 
            21:   Bid Preview 
            22:   Bid PlaceBid
            23:   Bid BidSuccessedBut someone using auto bid            
            */
            if(!me){
               return{
                  error:104
               }
            }
            // =================================== auction start =============
            cookie12=await getCookie(models.AccountYahoo)
            var yahooId;
            var cookie;
            if(cookie12){
               yahooId=cookie12[0].id
               cookie=cookie12[0].cookie;
            }
            else{
               return{
                  error:10                 
               }
            }

            var res
            res=await getHomeSelAccount(args, cookie)
            if(res.isMyBid){
               console.log("********** Other account is used ********")
               if(cookie12.length>1){
                  yahooId=cookie12[1].id
                  cookie=cookie12[1].cookie;
               } 
               else{
                  return {
                     error: 12
                  }
               }                 
               res=await getHomeSelAccount(args, cookie) 
            }           
            const params_preview=res.params_preview   
            const auctionTitle=res.auctionTitle

            if(!params_preview){
               return {
                  error: 20
               }
            }
            console.log(auctionTitle)
            // ================================= Auction Preview ===========================
            console.log("----------------- bid preview ----")
            
            const bid_preview_url="https://auctions.yahoo.co.jp/jp/show/bid_preview"

            bidConfig={}            
            const res_preview = await axios({
               method: 'POST',
               url: bid_preview_url,
               headers: {
                  'cookie': cookie,
                  'user-agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/80.0.3987.100 Safari/537.36'

               },
               responseType: 'text',
               params: params_preview
            })
            if(res_preview.status==200){
               try{
                  // console.log(parse(res_preview.data).querySelector(".SubmitBox").toString())
                  html = parse(parse(res_preview.data).querySelector(".SubmitBox").toString());
                  bidConfig.ItemID = html.querySelector('[name=ItemID]').getAttribute('value')                  
                  bidConfig.Quantity = html.querySelector('[name=Quantity]').getAttribute('value')                 
                  bidConfig.Bid = html.querySelector('[name=Bid]').getAttribute('value')                   
                  bidConfig.a = html.querySelector('[name=a]').getAttribute('value')                   
                  console.log("Bid price==>", bidConfig.Bid)
               }catch{
                  return {
                     error: 21
                  }
               }
            }else {
               return {
                  error: 21
               }
            }
            // ================================= Bid Place        +++++++++++++++++++++++++++++++
            // https://auctions.yahoo.co.jp/jp/config/placebid
            // https://auctions.yahoo.co.jp/jp/config/placebid
            // .NgAttention ---------------------when failed
            // .decBid ---------------------when successed
            // 
            bid_place_url="https://auctions.yahoo.co.jp/jp/config/placebid"
            res_place = await axios({
               method: 'POST',
               url: bid_place_url,
               headers: {
                  'cookie': cookie
               },
               responseType: 'text',
               params: bidConfig
            })
            // console.log(res_place)
            if(res_place.status==200){
               html_place=parse(res_place.data);
               isSuccess = html_place.querySelector(".decBid img");
               NgAttention = html_place.querySelector(".NgAttention");
               MixItem_someone_autobid = html_place.querySelector(".MixItem");
               if(isSuccess || MixItem_someone_autobid){
                  console.log("-----------------  Bid Successed -------------")
                  // Yahoo good history ....
                  models.YahooGood.upsert({
                     AuctionID:        args.AuctionID,
                     Title:            auctionTitle,
                     img:              args.img,
                     exitTime:         args.exitTime,
                     Seller:           args.Seller
                  })
                  
                  // Bid history ....
                  console.log(me.id, args.AuctionID, yahooId)
                  models.BidHistory.create({
                     AuctionID:        args.AuctionID,                     
                     YahooAccountId:   yahooId,
                     userId:           me.id,
                     price:            args.bidPrice,
                  })

               }
               else if(NgAttention){
                  console.log("-----------------  Bid Failed -------------")                  
                  return{
                     error:22
                  }
               }
            }

            // ================================= Successed ! +++++++++++++++++++++++++++++++

            return {
               error: 0
            }
         }, 
      ),
      upsertYahooAccount,
      updateAuctionStatus,
      delAuctionAccount,
      delHistory
   },
};