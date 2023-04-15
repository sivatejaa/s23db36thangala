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