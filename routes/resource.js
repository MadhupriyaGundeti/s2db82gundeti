var express = require('express'); 
var router = express.Router(); 
 
// Require controller modules. 
var api_controller = require('../controllers/api'); 
var soup_controller = require('../controllers/soup'); 
 
/// API ROUTE /// 
 
// GET resources base. 
router.get('/', api_controller.api); 
 
/// soup ROUTES /// 
 
// POST request for creating a soup.  
router.post('/soup', soup_controller.soup_create_post); 
 
// DELETE request to delete soup. 
router.delete('/soup/:id', soup_controller.soup_delete); 
 
// PUT request to update soup. 
router.put('/soup/:id', soup_controller.soup_update_put); 
 
// GET request for one soup. 
router.get('/soup/:id', soup_controller.soup_detail); 
 
// GET request for list of all soup items. 
router.get('/soup', soup_controller.soup_list); 
 
module.exports = router; 