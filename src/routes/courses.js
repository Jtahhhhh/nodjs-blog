const express = require('express');
const route = express.Router();
const courseController = require('../resources/app/controllers/CourseController');

route.get('/create',courseController.create)
route.post('/store',courseController.store)
route.post('/handleForm',courseController.handleForm)
route.post('/handleFormAction',courseController.handleFormAction)
route.put('/:id',courseController.update)
route.patch('/:id/restore',courseController.restore)
route.delete('/:id',courseController.delete)
route.delete('/:id/force',courseController.destroy)
route.get('/:id/edit', courseController.edit)
route.get('/:slug', courseController.show)


module.exports = route;
