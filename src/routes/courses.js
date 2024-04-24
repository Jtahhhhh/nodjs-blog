const express = require('express');
const route = express.Router();
const course = require('../resources/app/controllers/CourseController');

route.get('/create',course.create)
route.post('/store',course.store)
route.get('/:slug', course.show)


module.exports = route;
