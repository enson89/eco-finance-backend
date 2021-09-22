const login = require('./login');
const getEsgRating = require('./getEsgRating');
const createEsgRating = require('./createEsgRating');
const getTxnByUserId = require('./getTxnByUserId');

module.exports = {
    paths:{
        '/login': {
            ...login
        },
        '/esg': {
            ...getEsgRating,
            ...createEsgRating,
        },
        '/txn': {
            ...getTxnByUserId
        }
    }
}