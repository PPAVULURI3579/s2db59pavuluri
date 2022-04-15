var Car = require('../models/car');
// List of all cars
exports.car_list = async function (req, res) {
    try {
        theCars = await Car.find();
        res.send(theCars);
    }
    catch (err) {
        res.status(500);
        res.send(`{"error": ${err}}`);
    }
};
// for a specific car.
exports.car_detail = async function (req, res) {
    console.log("detail" + req.params.id)
    try {
        result = await Car.findById(req.params.id)
        res.send(result)
    } catch (error) {
        res.status(500)
        res.send(`{"error": document for id ${req.params.id} not found`);
    }
};
// Handle Car create on POST.
exports.car_create_post = async function (req, res) {
    console.log(req.body)
    let document = new Car();
    // We are looking for a body, since POST does not have query parameters.
    // Even though bodies can be in many different formats, we will be picky
    // and require that it be a json object
    // {"car_brand":"Mustang GT", "car_color":"Lucid Red Pearl", "car_cost":37000}
    document.car_brand = req.body.car_brand;
    document.car_cost = req.body.car_cost;
    document.car_color = req.body.car_color;
    try {
        let result = await document.save();
        res.send(result);
    }
    catch (err) {
        res.status(500);
        res.send(`{"error": ${err}}`);
    }
};
// Handle car delete form on DELETE.
exports.car_delete = function (req, res) {
    res.send('NOT IMPLEMENTED: Car delete DELETE ' + req.params.id);
};
// Handle car update form on PUT.
exports.car_update_put = async function (req, res) {
    console.log(`update on id ${req.params.id} with body
    ${JSON.stringify(req.body)}`)
    try {
        let toUpdate = await Car.findById(req.params.id)
        // Do updates of properties
        if (req.body.car_brand) toUpdate.car_brand = req.body.car_brand;
        if (req.body.car_cost) toUpdate.car_cost = req.body.car_cost;
        if (req.body.car_color) toUpdate.car_color = req.body.car_color;
        let result = await toUpdate.save();
        console.log("Sucess " + result)
        res.send(result)
    } catch (err) {
        res.status(500)
        res.send(`{"error": ${err}: Update for id ${req.params.id} failed`);
    }
};

// VIEWS
// Handle a show all view
exports.car_view_all_Page = async function (req, res) {
    try {
        theCars = await Car.find();
        res.render('cars', { title: 'Car Search Results', results: theCars });
    }
    catch (err) {
        res.status(500);
        res.send(`{"error": ${err}}`);
    }
};