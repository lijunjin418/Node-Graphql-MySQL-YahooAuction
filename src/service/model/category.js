const Entities = require('html-entities').XmlEntities;
const entities = new Entities();

const hydrateCategory = function (category) {
    const categoryDao = {
        ...category,
        CategoryName: category.CategoryName.toString(),
        CategoryPath: entities.decode(category.CategoryPath.toString()),
        CategoryIdPath: category.CategoryIdPath.toString(),
    }
    return categoryDao;
}

module.exports = {
    hydrateCategory,
}