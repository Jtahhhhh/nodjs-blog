const express = require('express');
const route = express.Router();
const news = require('../resources/app/controllers/NewsController');

route.get('/:slug', news.show);
route.get('/', news.index);

module.exports = route;
