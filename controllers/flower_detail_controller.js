var Flower = require('../models/flower');

exports.flower_view_one_Page = async function(req, res) {
    console.log("single view for id " + req.query.id)
    try{
        result = await Flower.findById( req.query.id)
        console.log("result " + result)
        res.render('flowerDetail',{ title: 'Flower Detail', toShow: result });
    }
    catch(err){
        res.status(500)
         res.send(`{'error': '${err}'}`);
    }
   };

// Handle building the view for creating a flower.
// No body, no in path parameter, no query.
// Does not need to be async
exports.flower_create_Page = function(req, res) {
    console.log("create view")
    try{
    res.render('flowercreate', { title: 'flower Create'});
    }
    catch(err){
    res.status(500)
    res.send(`{'error': '${err}'}`);
    }
   };

   exports.flower_update_Page = async function(req, res) {
    console.log("update view for item "+req.query.id)
    try{
    let result = await Flower.findById(req.query.id)
    res.render('flowerupdate', { title: 'Flower Update', toShow: result });
    }
    catch(err){
    res.status(500)
    res.send(`{'error': '${err}'}`);
    }
   };

   exports.flower_delete_Page = async function(req, res) {
    console.log("Delete view for id " + req.query.id)
    try{
    result = await Flower.findById(req.query.id)
    res.render('flowerdelete', { title: 'Flower Delete', toShow: 
   result });
    }
    catch(err){
    res.status(500)
    res.send(`{'error': '${err}'}`);
    }
   };