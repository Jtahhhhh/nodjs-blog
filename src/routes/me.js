const express = require('express');
const route = express.Router();
const me = require('../resources/app/controllers/meController');

route.get('/store/courses',me.storeCourses)
route.get('/trash/courses',me.trashCourses)




module.exports = route;
