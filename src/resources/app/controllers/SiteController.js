const Course = require("../models/Course")
const {mg, mutipleMongooseToObject} = require("../../../util/mongoose")
class SiteContoller {
    //[get]/news
    // [
    home(req, res, next) {
        Course.find({})
            .then(course=>{
                    res.render('home',{ course: mutipleMongooseToObject(course)});
                })
            .catch(next);
    }
     
    //[get]/news/:slug
    search(req, res) {
        res.render('search');
    }
}

module.exports = new SiteContoller();
