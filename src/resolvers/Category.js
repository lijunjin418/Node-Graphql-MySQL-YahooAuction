const api = require('../service/index'); 
const { categoryTranslate, categoryArrTranslate} = require('../service/translate');
const { hydrateCategory } = require('../service/model/category')
const { hydrateProduct } = require('../service/model/product')
const { hydrateAuctionItem } = require('../service/model/auctionItem')
const {ApolloError} = require('apollo-server');
myCache = require('../service/cache')

module.exports = {
    Query:{
        info: () => 'This is yahoo auction api with graphql',
        topCategory,
        currentCategory,
        productList,
        auctionItem,
    }
}
// ----------------------------------------------------------------------
// Get Top Category for home page
// ----------------------------------------------------------------------
async function topCategory(parent, args, {models}) {  
    var categories
    if(myCache.has('topCategory')){        
        categories=myCache.get('topCategory')
    }
    else{
        categories = await models.Category.findAll({        
            where: { Depth: 1},        
            order: [['Order', 'ASC']],
            raw:true
        });
        myCache.set('topCategory', categories);
    }
    return categories
}

// ----------------------------------------------------------------------
// Get child Category for home page
// ----------------------------------------------------------------------
async function currentCategory (parnet, args, context) {
    try {
        const res = await api({
            method: 'get',
            url: '/V2/categoryTree',
            params: {
                category: args.CategoryId
            },
            data: {
            }
        })
        const rawCategory = res.ResultSet[0].Result[0]
        const categoryDao = hydrateCategory(rawCategory)
        const promises = [];
        promises.push(categoryTranslate(categoryDao));
        if (rawCategory.ChildCategory) {
            promises.push(categoryArrTranslate(rawCategory.ChildCategory));
        }
        const translatedResult = await Promise.all(promises);
        const category = translatedResult[0];
        if (translatedResult[1]) {
            category.ChildCategory = translatedResult[1]
        }
        return category
    } catch (error) {
        throw new ApolloError('CurrentCategory error', "ResonseERROR")
    }
}

// ----------------------------------------------------------------------
// Get Product List
// ----------------------------------------------------------------------
async function productList (parnet, args, context) {
    try {
        var apiurl
        var params={                         
            page: args.page,
            sort: args.sort,
            order: args.order,
            aucminprice: args.aucminprice,
            aucmaxprice: args.aucmaxprice,
            store: args.store,
            item_status: args.status,
        }
        if(args.keyword){
            apiurl='V2/search'
            params.query=args.keyword            
            if(args.CategoryId){
                params.category=args.CategoryId
            }
        } 
        else{
            apiurl='/V2/categoryLeaf';
            params.category=args.CategoryId            
        }
        const res = await api({
            method: 'get',
            url: apiurl,
            params: params
        })
        var rawProducts = []
        const productArr = [];
        if (res.ResultSet[0].Result !=''){
            rawProducts = res.ResultSet[0].Result[0]
        }
        if (rawProducts){
            rawProducts.Item && rawProducts.Item.map( item => {
                const productDao = hydrateProduct(item)
                productArr.push(productDao)
            })
        }
        return {
            total: res.ResultSet[0]['@_totalResultsAvailable'],
            limit: res.ResultSet[0]['@_totalResultsReturned'],
            offset: res.ResultSet[0]['@_firstResultPosition'],
            Product: productArr
        }
    } catch (error) {
        throw new ApolloError('ProductList error', "ResonseERROR")

    }
}
// ----------------------------------------------------------------------
// Get Auction Items on Yahoo
// ----------------------------------------------------------------------
async function auctionItem (parnet, args, context) {
    try {
        const res = await api({
            method: 'get',
            url: '/V2/auctionItem',
            params: {
                auctionID: args.AuctionID
            }
        })
        const data = res.ResultSet[0].Result[0]
        const auctionItemDao = hydrateAuctionItem(data)
        const auctionItem = categoryTranslate(auctionItemDao)
        return auctionItem
    } catch (error) {
        throw new ApolloError('AuctionItem error', "ResonseERROR")

    }
}