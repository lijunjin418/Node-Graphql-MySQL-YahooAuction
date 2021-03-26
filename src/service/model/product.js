const hydrateProduct = function (product) {
    const productDao = {
        ...product,
        Seller: product.Seller[0],
        Image: {
            Url: product.Image[0]['#text'],
            Width: product.Image[0]['@_width'],
            Height: product.Image[0]['@_height'],
        },
        Option: product.Option[0]
    }
    return productDao;
}

module.exports = {
    hydrateProduct,
}