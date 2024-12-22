const test = require("./test");
const home = require('./home');
const dataAggregator = require('./dataAggregator');
function route(app) {
    app.use('/dataAggregator', dataAggregator);
    app.use('/test', test);
    app.use('/home', home);
}
module.exports = route;