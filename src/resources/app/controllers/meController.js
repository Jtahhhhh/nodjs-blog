const {mg,  mutipleMongooseToObject} = require("../../../util/mongoose")
const Course = require("../models/Course")
class MeContoller { 
    //[post]/me/store-courses
    storeCourses(req,res,next){
        Promise.all([ Course.find({}),Course.countDocumentsDeleted()])
            .then(([course,count])=>{
                console.log(count)
                res.render('me/store-courses',{deletedCount:count, course: mutipleMongooseToObject(course)})
            })
         
            .catch(next)
    }
    //[post]/me/trash-courses
    trashCourses(req,res,next){
        Course.findDeleted({})
        .then(course=>{{
                console.log(course)
                res.render('me/trash-courses',{ course: mutipleMongooseToObject(course)});
                }
            })
        .catch(next)
    }
}

module.exports = new MeContoller()
