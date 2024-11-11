const Course = require('../models/Course');
//const {mg,  mutipleMongooseToObject} = require("../../../util/mongoose")

class SiteController {
    //[GET] /
    home(req, res, next) {
        res.render('home')
        // Course.find({})
        //     .then(courses => {
        //         res.render('home', { courses: mutipleMongooseToObject(courses) });
        //     })
        //     .catch(next);
    }

    //[GET] /search
    search(req, res) {
        res.render('search');
    }

    //[GET] /thong-tin
    moreInfo(req, res) {
        res.render('moreInf');
    }
}

module.exports = new SiteController();
