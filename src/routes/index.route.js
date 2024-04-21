const newsRoute = require('./news');
const siteRoute = require('./site');
const courseRoute= require('./courses');

function route(app) {
    app.use('/courses',courseRoute);
    app.use('/news', newsRoute);
    app.use('/', siteRoute);
}

module.exports = route;
