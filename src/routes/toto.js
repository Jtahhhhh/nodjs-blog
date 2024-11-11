const express = require('express');
const route = express.Router();
const totoController = require('../resources/app/controllers/totoController');

route.get('/predict', totoController.predict);
route.post('/predicting', totoController.upload.single('file'), totoController.predicting);

module.exports = route;
