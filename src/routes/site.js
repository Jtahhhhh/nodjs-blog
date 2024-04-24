const express = require('express');
const route = express.Router();
const news = require('../resources/app/controllers/SiteController');

route.get('/tim-kiem', news.search);
route.post('/tim-kiem', news.search);
route.get('/', news.home);

module.exports = route;
