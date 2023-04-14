var Flower = require('../models/flower');
// List of all flowers
exports.flower_list = async function(req, res) {
    try{
    theFlowers = await Flower.find();
    res.send(theFlowers);
    }
    catch(err){
    res.status(500);
    res.send(`{"error": ${err}}`);
    } 
   };
// for a specific flower.
exports.flower_detail = function(req, res) {
 res.send('NOT IMPLEMENTED: flower detail: ' + req.params.id);
};
// Handle flower create on POST.

exports.flower_create_post = async function(req, res) {
    console.log(req.body)
    let document = new Flower();
    // We are looking for a body, since POST does not have query parameters.
    // Even though bodies can be in many different formats, we will be picky
    // and require that it be a json object
    // {"costume_type":"goat", "cost":12, "size":"large"}
    document.flower_type = req.body.flower_type;
    document.cost = req.body.cost;
    document.size = req.body.size;
    try{
    let result = await document.save();
    res.send(result);
    }
    catch(err){
    res.status(500);
    res.send(`{"error": ${err}}`);
    } 
   }
// Handle flower delete form on DELETE.
exports.flower_delete = function(req, res) {
 res.send('NOT IMPLEMENTED: flower delete DELETE ' + req.params.id);
};
// Handle flower update form on PUT.
exports.flower_update_put = function(req, res) {
 res.send('NOT IMPLEMENTED: flower update PUT' + req.params.id);
}

exports.flower_view_all_Page = async function(req, res) {
    try{
    theFlowers = await Flower.find();
    res.render('flowers', { title: 'Flower Search Results', results: theFlowers });
    }
    catch(err){
    res.status(500);
    res.send(`{"error": ${err}}`);
    } 
   };
   
   