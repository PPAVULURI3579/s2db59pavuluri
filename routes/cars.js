var express = require('express');
const car_controller = require('../controllers/car');
var router = express.Router();
const secured = (req, res, next) => { 
  if (req.user){ 
    return next(); 
  } 
  req.session.returnTo = req.originalUrl; 
  res.redirect("/login"); 
} 




/* GET costumes */
router.get('/', car_controller.car_view_all_Page );
// GET request for one car.
router.get('/car/:id', car_controller.car_detail);
/* GET detail car page */
router.get('/detail', car_controller.car_view_one_Page);
/* GET create car page */
router.get('/create', car_controller.car_create_Page);
/* GET create update page */
router.get('/update', car_controller.car_update_Page);
/* GET delete car page */
router.get('/delete', car_controller.car_delete_Page);

module.exports = router;
