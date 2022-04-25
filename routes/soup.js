var express = require('express');
var router = express.Router();
const soup_controlers= require('../controllers/soup');
/* GET home page. */
  router.get('/', soup_controlers.soup_view_all_Page);
/* GET detail soup page */ 
router.get('/detail', soup_controlers.soup_view_one_Page); 
/* GET create soup page */ 
router.get('/create', soup_controlers.soup_create_Page); 
/* GET create update page */ 
router.get('/update', soup_controlers.soup_update_Page); 
/* GET delete soup page */ 
router.get('/delete', soup_controlers.soup_delete_Page); 
module.exports = router;
