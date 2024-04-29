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
    //[get]/courses/@id/edit
    edit(req,res,next){
        Course.findById(req.params.id)
            .then(course =>{
                res.render('courses/edit',{course: mongooseToObject(course)})
            })
            .catch(next)
    }
    //[put]/courses/:id
    update(req,res,next){
        Course.updateOne({_id:req.params.id},req.body)
            .then(() => res.redirect('/me/store-courses'))
            .catch(next)
    }
    //[delete]/coursses/:id
    delete(req,res,next){
        Course.deleteOne({_id:req.params.id})
            .then(() => res.redirect('back'))
            .catch(next)
    }
    //[post]/courses/store
    store(req,res,next){
        const course = new Course(req.body)
        course.save()
            .then(()=> res.redirect('courses/'+req.body.slug))
            .catch(error =>{})
    }
}

module.exports = new CourseContoller()
