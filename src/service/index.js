
const axios = require('axios');
const parser = require('fast-xml-parser');

require('dotenv').config()

const API_KEY = process.env.API_KEY

const parse_option = {
    parseTrueNumberOnly: true,
    arrayMode: true,
    ignoreAttributes : false,
}
const instance = axios.create({
    baseURL: process.env.API_ENDPOINT,
    params: { appid: API_KEY }
});
instance.interceptors.request.use(request => {
    request.params.appid = API_KEY
    return request
})
instance.interceptors.response.use(response => {
    const data = parser.parse(response.data, parse_option);
	return data
}, error => {
    return Promise.reject(error)
})
module.exports = instance