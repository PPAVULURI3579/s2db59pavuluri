var Costume = require('../models/costume');
// List of all Costumes
exports.costume_list = async function (req, res) {
    try {
        theCostumes = await Costume.find();
        res.send(theCostumes);
    }
    catch (err) {
        res.status(500);
        res.send(`{"error": ${err}}`);
    }
};
// for a specific Costume.
exports.costume_detail = async function (req, res) {
    console.log("detail" + req.params.id)
    try {
        result = await Costume.findById(req.params.id)
        res.send(result)
    } catch (error) {
        res.status(500)
        res.send(`{"error": document for id ${req.params.id} not found`);
    }
};
// Handle Costume create on POST.
exports.costume_create_post = function (req, res) {
    res.send('NOT IMPLEMENTED: Costume create POST');
};
// Handle Costume delete form on DELETE.
exports.costume_delete = function (req, res) {
    res.send('NOT IMPLEMENTED: Costume delete DELETE ' + req.params.id);
};
// Handle Costume update form on PUT.
exports.costume_update_put = async function (req, res) {
    console.log(`update on id ${req.params.id} with body
    ${JSON.stringify(req.body)}`)
    try {
        let toUpdate = await Costume.findById(req.params.id)
        // Do updates of properties
        if (req.body.costume_type)
            toUpdate.costume_type = req.body.costume_type;
        if (req.body.cost) toUpdate.cost = req.body.cost;
        if (req.body.size) toUpdate.size = req.body.size;
        let result = await toUpdate.save();
        console.log("Sucess " + result)
        res.send(result)
    } catch (err) {
        res.status(500)
        res.send(`{"error": ${err}: Update for id ${req.params.id}
    failed`);
    }
};