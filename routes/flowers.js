var express = require('express');
const flowers_controlers= require('../controllers/flowerController');
var flower_detail_controller = require('../controllers/flower_detail_controller');
var router = express.Router();

/* GET home page. */

router.get('/', flowers_controlers.flower_view_all_Page );
  module.exports = router;

  router.get('/detail', flower_detail_controller.flower_view_one_Page);