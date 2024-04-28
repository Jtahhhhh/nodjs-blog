const {mg,  mutipleMongooseToObject} = require("../../../util/mongoose")
const Course = require("../models/Course")
class MeContoller { 
    //[post]/me/store-courses
    storeCourses(req,res,next){
        Course.find({})
        .then(course=>{
                res.render('me/store-courses',{ course: mutipleMongooseToObject(course)});
            })
        .catch(next);
    }
}

module.exports = new MeContoller()
