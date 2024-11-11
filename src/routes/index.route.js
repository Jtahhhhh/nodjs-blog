const express = require('express');
const diase = require('./diase');
const newsRoute = require('./news');
const siteRoute = require('./site');
const courseRoute= require('./courses');
const meRoute = require('./me');
const totoRoute = require('./toto')

function route(app) {
    app.use('/toto',totoRoute)
    app.use('/diase', diase);
    app.use('/courses', courseRoute);
    app.use('/news', newsRoute);
    app.use('/me', meRoute);
    app.use('/', siteRoute);
}

module.exports = route;
