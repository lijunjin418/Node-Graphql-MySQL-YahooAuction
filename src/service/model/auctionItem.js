const Entities = require('html-entities').XmlEntities;
const entities = new Entities();

const hydrateAuctionItem = function (auctionItem) {
    const Img = []    
    // console.log(auctionItem.Payment[0]);
    if (auctionItem.Img){
        Object.keys(auctionItem.Img[0]).forEach(property => {
            if (auctionItem.Img[0][property]) {
                Img.push({
                    Url: auctionItem.Img[0][property][0]['#text'],
                    Width: auctionItem.Img[0][property][0]['@_width'],
                    Height: auctionItem.Img[0][property][0]['@_height'],
                })
            }
        })
    }
    const auctionItemDao = {
        ...auctionItem,
        AuctionID: auctionItem.AuctionID.toString(),
        CategoryPath: entities.decode(auctionItem.CategoryPath.toString()),
        CategoryIdPath: auctionItem.CategoryIdPath.toString(),
        Title: auctionItem.Title.toString(),
        Seller: {
            ...auctionItem.Seller[0],
            ItemListUrl: auctionItem.Seller[0].ItemListURL,
            RatingUrl: auctionItem.Seller[0].RatingURL,
            Rating: auctionItem.Seller[0].Rating[0]
        },
        AuctionItemUrl: auctionItem.AuctionItemUrl.toString(),
        Img: Img,
        HighestBidders: {
            ...auctionItem.HighestBidders[0],
            totalHighestBidders: auctionItem.HighestBidders[0]['@_totalHighestBidders'],
            Bidder: auctionItem.HighestBidders[0].Bidder ? auctionItem.HighestBidders[0].Bidder.map( bidder => {
                return {
                    ...bidder,
                    Rating: bidder.Rating[0]
                }
            }) : [] 
        },
        ItemStatus: auctionItem.ItemStatus[0],
        ItemReturnable: auctionItem.ItemReturnable[0],
        StartTime: auctionItem.StartTime.toString(),
        EndTime: auctionItem.EndTime.toString(),
        Bidorbuy: auctionItem.Bidorbuy ? auctionItem.Bidorbuy.toString() : null,
        Reserved: auctionItem.Reserved ? auctionItem.Reserved.toString() : null,
        Option: auctionItem.Option[0],
        Description: auctionItem.Description.toString(),
        Payment: {
            ...auctionItem.Payment[0],
            EasyPayment: auctionItem.Payment[0].EasyPayment ? auctionItem.Payment[0].EasyPayment[0] : null,
            Bank: auctionItem.Payment[0].Bank ? {
                totalBankMethodAvailable:auctionItem.Payment[0].Bank[0]['@_totalBankMethodAvailable'] ,
                Method: auctionItem.Payment[0].Bank[0]['Method']
            }: null,
            Other: auctionItem.Payment[0].Other ? auctionItem.Payment[0].Other[0] : null,
        },
        BlindBusiness: auctionItem.BlindBusiness.toString(),
        SevenElevenReceive: auctionItem.SevenElevenReceive.toString(),
        Location: auctionItem.Location ? auctionItem.Location.toString() : null,
        Shipping: auctionItem.Shipping ? {
            totalShippingMethodAvailable: auctionItem.Shipping[0]['@_totalShippingMethodAvailable'],
            Method: auctionItem.Shipping[0].Method[0]
        } : null,
        BaggageInfo: auctionItem.BaggageInfo ? auctionItem.BaggageInfo[0] : null,
    }
    return auctionItemDao;
}

module.exports = {
    hydrateAuctionItem,
}