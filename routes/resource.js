var express = require('express');
var router = express.Router();
// Require controller modules.
var api_controller = require('../controllers/api');
var car_controller = require('../controllers/car');

/// API ROUTE ///
// GET resources base.
router.get('/', api_controller.api);

/// car ROUTES ///
// POST request for creating a car.
router.post('/cars', car_controller.car_create_post);
// DELETE request to delete car.
router.delete('/cars/:id', car_controller.car_delete);
// PUT request to update car.
router.put('/cars/:id', car_controller.car_update_put);
// GET request for one car.
router.get('/cars/:id', car_controller.car_detail);
// GET request for list of all car items.
router.get('/cars', car_controller.car_list);
module.exports = router;
