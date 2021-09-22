const login = require('./login');
const getEsgRating = require('./getEsgRating');
const createEsgRating = require('./createEsgRating');

module.exports = {
    paths:{
        '/login': {
            ...login
        },
        '/esg': {
            ...getEsgRating,
            ...createEsgRating,
        }
    }
}