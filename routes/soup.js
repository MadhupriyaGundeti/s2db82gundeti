var express = require('express');
var router = express.Router();
const soup_controlers= require('../controllers/soup');
/* GET home page. */
router.get('/', function(req, res, next) {
  router.get('/', soup_controlers.soup_view_all_Page)
  res.render('soup', { title: 'Search Results soup' });
});

module.exports = router;
 