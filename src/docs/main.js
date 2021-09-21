const basicInfo = require('./basicInfo');
const servers = require('./servers');
const components = require('./components');
const apis = require('./apis/main');

module.exports = {
    ...basicInfo,
    ...servers,
    ...components,
    ...apis
};