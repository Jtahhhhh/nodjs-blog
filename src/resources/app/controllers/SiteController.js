const Couers = require("../models/Couers")
class SiteContoller {
    //[get]/news
    home(req, res) {
        Couers.find({}, function (err,course) {
            if(!err) res.json(course);
            res.status(400).json({error:'message'})
        })

        // res.render('home');
    }
    //[get]/news/:slug
    search(req, res) {
        res.render('search');
    }
}

module.exports = new SiteContoller();
