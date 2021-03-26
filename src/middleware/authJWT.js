const jwt = require('jsonwebtoken')
const { AuthenticationError} = require('apollo-server') ;

const getMe = async req => {
    const token = req.headers['x-token'];    
    if (token) {
      try {
        return await jwt.verify(token, process.env.SECRET);;
      } catch (e) {         
        return false
      }
    }
  };

module.exports = {    
    getMe,
}