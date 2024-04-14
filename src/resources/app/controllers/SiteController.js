class SiteContoller {
    //[get]/news
    home(req, res) {
        res.render('home');
    }
    //[get]/news/:slug
    search(req, res) {
        res.render('search');
    }
}

module.exports = new SiteContoller();
