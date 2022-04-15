var express = require('express');
const car_controller = require('../controllers/car');
var router = express.Router();

/* GET home page. */
/*
router.get('/', function(req, res, next) {
  res.render('cars', { title: 'Search Results' });
});
*/

/* GET costumes */
router.get('/', car_controller.car_view_all_Page );

module.exports = router;
