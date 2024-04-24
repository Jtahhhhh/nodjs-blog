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
    //[get]/courses/create
    create(req,res){
        res.render('courses/create')
    }
    //[post]/courses/store
    store(req,res,next){
        // res.render('courses/store')
        // res.json(req.)
        const course = new Course(req.body)
        course.save()
            .then(()=> res.redirest('courses/'+req.body.slug))
            .catch(error =>{})
    }
}

module.exports = new CourseContoller()
