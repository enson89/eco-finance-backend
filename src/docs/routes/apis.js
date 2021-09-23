const login = require('./login');
const updateUserById = require('./updateUserById');
const getEsgRating = require('./getEsgRating');
const createEsgRating = require('./createEsgRating');
const getTxnByUserId = require('./getTxnByUserId');
const deleteTxnById = require('./deleteTxnById');


module.exports = {
    paths:{
        '/login': {
            ...login
        },
        '/users': {
            ...updateUserById
        },
        '/esg': {
            ...getEsgRating,
            ...createEsgRating,
        },
        '/txn': {
            ...getTxnByUserId,
            ...deleteTxnById
        }
    }
}