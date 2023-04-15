var express = require('express');
const flowers_controlers= require('../controllers/flowerController');
var flower_detail_controller = require('../controllers/flower_detail_controller');
var router = express.Router();

/* GET home page. */

router.get('/', flowers_controlers.flower_view_all_Page );
  module.exports = router;

  router.get('/detail', flower_detail_controller.flower_view_one_Page);

  router.get('/create', flower_detail_controller.flower_create_Page);

  router.get('/update', flower_detail_controller.flower_update_Page);

  router.get('/delete', flower_detail_controller.flower_delete_Page);

