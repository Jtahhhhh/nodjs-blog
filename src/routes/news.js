const express = require('express');
const route = express.Router();
const news = require('../resources/app/controllers/NewsController');

route.use('/:slug', news.show);
route.use('/', news.index);

module.exports = route;
