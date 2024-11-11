const express = require('express');
const siteController = require('../resources/app/controllers/SiteController');
const router = express.Router();

router.get('/thong-tin', siteController.moreInfo);
router.get('/tim-kiem', siteController.search);
router.post('/tim-kiem', siteController.search);
router.get('/', siteController.home);

module.exports = router;
