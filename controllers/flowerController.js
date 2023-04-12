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
exports.flower_create_post = function(req, res) {
 res.send('NOT IMPLEMENTED: flower create POST');
};
// Handle flower delete form on DELETE.
exports.flower_delete = function(req, res) {
 res.send('NOT IMPLEMENTED: flower delete DELETE ' + req.params.id);
};
// Handle flower update form on PUT.
exports.flower_update_put = function(req, res) {
 res.send('NOT IMPLEMENTED: flower update PUT' + req.params.id);
}


   