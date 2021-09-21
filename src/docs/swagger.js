const basicInfo = require('./basicInfo.js');
const servers = require('./servers.js');
const components = require('./components.js');
const apis = require('./routes/apis.js');

module.exports = {
    ...basicInfo,
    ...servers,
    ...components,
    ...apis
};