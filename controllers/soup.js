var soup = require('../models/soup'); 

// List of all soup 
exports.soup_list = async function(req, res) { 
    try{ 
        thesoup = await soup.find(); 
        res.send(thesoup); 
    } 
    catch(err){ 
        res.status(500); 
        res.send(`{"error": ${err}}`); 
    }   
};  
 
// for a specific soup. 
exports.soup_detail = function(req, res) { 
    res.send('NOT IMPLEMENTED: soup detail: ' + req.params.id); 
}; 
 
// Handle soup create on POST. 
exports.soup_create_post = async function(req, res) { 
    console.log(req.body) 
    let document = new soup(); 
    // We are looking for a body, since POST does not have query parameters. 
    // Even though bodies can be in many different formats, we will be picky 
    // and require that  it be a json object 
    // {"soup_type":"goat", "cost":12, "size":"large"} 
    document.soup_name = req.body.soup_name; 
    document.soup_size = req.body.soup_size; 
    document.price = req.body.price; 
    try{ 
        let result = await document.save(); 
        res.send(result); 
    } 
    catch(err){ 
        res.status(500); 
        res.send(`{"error": ${err}}`); 
    }   
}; 
 
 
// Handle soup delete form on DELETE. 
exports.soup_delete = function(req, res) { 
    res.send('NOT IMPLEMENTED: soup delete DELETE ' + req.params.id); 
}; 
 
// Handle soup update form on PUT. 
exports.soup_update_put = function(req, res) { 
    res.send('NOT IMPLEMENTED: soup update PUT' + req.params.id); 
}; 
// VIEWS 
// Handle a show all view 
exports.soup_view_all_Page = async function(req, res) { 
    try{ 
        thesoup = await soup.find(); 
        res.render('soup', { title: 'soup Search Results', results: thesoup }); 
    } 
    catch(err){ 
        res.status(500); 
        res.send(`{"error": ${err}}`); 
    }   
}; 