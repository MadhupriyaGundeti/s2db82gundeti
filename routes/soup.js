var express = require('express');
const soup_controlers= require('../controllers/soup');
var router = express.Router();

// A little function to check if we have an authorized user and continue on or 
// redirect to login. 
const secured = (req, res, next) => { 
  if (req.user){ 
    return next(); 
  } 
  req.session.returnTo = req.originalUrl; 
  res.redirect('/login'); 
}
/* GET home page. */
  router.get('/', soup_controlers.soup_view_all_Page);
/* GET detail soup page */ 
router.get('/detail', soup_controlers.soup_view_one_Page); 
/* GET create soup page */ 
router.get('/create',secured, soup_controlers.soup_create_Page); 

/* GET create update page */ 
router.get('/update',secured, soup_controlers.soup_update_Page); 
/* GET delete soup page */ 
router.get('/delete',secured, soup_controlers.soup_delete_Page); 
module.exports = router;
