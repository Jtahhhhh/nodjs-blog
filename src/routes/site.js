const express = require('express');
const route = express.Router();
const news = require('../resources/app/controllers/SiteController');

route.use('/tim-kiem', news.search);
route.use('/', news.home);

module.exports = route;
