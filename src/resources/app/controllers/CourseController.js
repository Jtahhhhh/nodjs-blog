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
            .then(() => res.redirect('/me/store/courses'))
            .catch(next)
    }
    //[put]/courses/:id/restore
    restore(req,res,next){
        Course.restore({_id:req.params.id})
            .then(() => res.redirect('back'))
            .catch(next)
    }
    //[delete]/coursses/:id
    delete(req,res,next){
        Course.delete({_id:req.params.id})
            .then(() => res.redirect('back'))
            .catch(next)
    }
     //[delete]/coursses/:id
     destroy(req,res,next){
        Course.deleteOne({_id:req.params.id})
            .then(() => res.redirect('back'))
            .catch(next)
    }
    //[post]/courses/store
    store(req,res,next){
        const course = new Course(req.body)
        course.save()
            .then(()=> res.redirect('/courses/'+req.body.slug))
            .catch(next)
    }
    //[post] /courses/handle-form-actions
    handleFormAction(req,res,next){
        switch(req.body.action){
            case 'delete':
                Course.delete({_id: {$in:req.body.coursesID} })
                .then(() => res.redirect('back'))
                .catch(next)
                break;
            default:
            res.json({message:'Action is invalid'})
        }
    }
    handleForm(req,res,next){
        switch(req.body.action){
            case 'restore':
                Course.restore({_id: {$in:req.body.coursesID} })
                .then(() => res.redirect('back'))
                .catch(next)
                break;
            case 'delete':
                Course.deleteOne({_id: {$in:req.body.coursesID} })
                .then(() => res.redirect('back'))
                .catch(next)
                break;
            default:
            res.json({message:'Action is invalid'})
        }
    }
}

module.exports = new CourseContoller()
