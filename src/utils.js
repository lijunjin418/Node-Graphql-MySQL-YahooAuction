const jwt = require('jsonwebtoken')
const APP_SECRET = 'orionDev418'

function getUserId(context) {
    const Authorization = context.request.get('Authorization')
    if (Authorization) {
        const token = Authorization.replace('Bearer ', '')
        const { userId } = jwt.verify(token, APP_SECRET)
        return userId
    }

    throw new Error('Not authenticated')
}
const paginate = (page, limit) => {
    console.log(page, limit)
    const offset = (page-1) * limit;     
    return {
      offset,
      limit,
    };
};

module.exports = {
    APP_SECRET,
    getUserId,
    paginate
}