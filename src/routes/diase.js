const express = require('express');
const route = express.Router();
const diaseController = require('../resources/app/controllers/diaseController');

route.get('/predict', diaseController.predict);
route.post('/predicting', diaseController.upload.single('file'), diaseController.predicting);

module.exports = route;
