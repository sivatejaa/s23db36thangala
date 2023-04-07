var express = require('express');
var router = express.Router();

/* GET home page. */

router.get('/', function (req, res) {
    res.render('flowers', { title: 'Search Results - Flowers' });
  });
  function buy(index) {
    alert(`You purchased item ${index}.`);
  }
  module.exports = router;

  