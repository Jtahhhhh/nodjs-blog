const Course = require("../models/Course")
const {mg,  mongooseToObject} = require("../../../util/mongoose")
class CourseContoller {
    //[get]/courses/:slug
    show(req, res,next) {
        Course.findOne({slug : req.params.slug})
            .then(course =>{
                res.render('courses/show',{course: mongooseToObject(course)})
            })
            .catch(next)
        
    }
}

module.exports = new CourseContoller();
