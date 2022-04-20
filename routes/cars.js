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
/* GET detail car page */
router.get('/detail', car_controller.car_view_one_Page);
/* GET create car page */
router.get('/create', car_controller.car_create_Page);
/* GET create update page */
router.get('/update', car_controller.car_update_Page);
/* GET delete car page */
router.get('/delete', car_controller.car_delete_Page);

module.exports = router;
