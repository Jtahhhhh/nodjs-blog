const express = require('express');
const route = express.Router();
const courseController = require('../resources/app/controllers/CourseController');

route.get('/create',courseController.create)
route.post('/store',courseController.store)
route.put('/:id',courseController.update)
route.get('/:id/edit', courseController.edit)
route.get('/:slug', courseController.show)


module.exports = route;
