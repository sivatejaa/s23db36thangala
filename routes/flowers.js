var express = require('express');
const flowers_controlers= require('../controllers/flowerController');

var router = express.Router();

/* GET home page. */

router.get('/', flowers_controlers.flower_view_all_Page );
  module.exports = router;

  