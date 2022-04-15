var express = require('express');
var router = express.Router();
// Require controller modules.
var api_controller = require('../controllers/api');
var costume_controller = require('../controllers/costume');
var car_controller = require('../controllers/car');

/// API ROUTE ///
// GET resources base.
router.get('/', api_controller.api);
/// costume ROUTES ///
// POST request for creating a costume.
router.post('/costumes', costume_controller.costume_create_post);
// DELETE request to delete costume.
router.delete('/costumes/:id', costume_controller.costume_delete);
// PUT request to update costume.
router.put('/costumes/:id', costume_controller.costume_update_put);
// GET request for one costume.
router.get('/costumes/:id', costume_controller.costume_detail);
// GET request for list of all costume items.
router.get('/costumes', costume_controller.costume_list);

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
