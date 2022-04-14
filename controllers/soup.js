var soup = require('../models/soup'); 
 
// List of all soups 
exports.soup_list = function(req, res) { 
    res.send('NOT IMPLEMENTED: soup list'); 
}; 
 
// for a specific soup. 
exports.soup_detail = function(req, res) { 
    res.send('NOT IMPLEMENTED: soup detail: ' + req.params.id); 
}; 
 
// Handle soup create on POST. 
exports.soup_create_post = function(req, res) { 
    res.send('NOT IMPLEMENTED: soup create POST'); 
}; 
 
// Handle soup delete form on DELETE. 
exports.soup_delete = function(req, res) { 
    res.send('NOT IMPLEMENTED: soup delete DELETE ' + req.params.id); 
}; 
 
// Handle soup update form on PUT. 
exports.soup_update_put = function(req, res) { 
    res.send('NOT IMPLEMENTED: soup update PUT' + req.params.id); 
}; 
