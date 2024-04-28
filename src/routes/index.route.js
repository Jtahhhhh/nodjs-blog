const newsRoute = require('./news');
const siteRoute = require('./site');
const courseRoute= require('./courses');
const meRoute = require('./me');

function route(app) {
    app.use('/courses',courseRoute);
    app.use('/news', newsRoute);
    app.use('/me', meRoute);
    app.use('/', siteRoute);
}

module.exports = route;
