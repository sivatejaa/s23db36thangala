var express = require('express');
var router = express.Router();
// Require controller modules.
var api_controller = require('../controllers/api');
var flower_controller = require('../controllers/flowerController');
var flower_detail_controller = require('../controllers/flower_detail_controller');
/// API ROUTE ///
// GET resources base.
router.get('/', api_controller.api);

 
router.post('/flowers', flower_controller.flower_create_post);
// DELETE request to delete flower.
router.delete('/flowers/:id', flower_controller.flower_delete);
// PUT request to update flower.
router.put('/flowers/:id', flower_controller.flower_update_put);
// GET request for one flower.
router.get('/flowers/:id', flower_controller.flower_detail);
// GET request for list of all flower items.
router.get('/flowers', flower_controller.flower_list);




module.exports = router