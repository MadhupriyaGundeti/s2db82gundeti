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
exports.soup_detail = async function(req, res) { 
    console.log("detail"  + req.params.id) 
    try { 
        result = await soup.findById( req.params.id) 
        res.send(result) 
    } catch (error) { 
        res.status(500) 
        res.send(`{"error": document for id ${req.params.id} not found`); 
    } 
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
exports.soup_update_put = async function(req, res) { 
    console.log(`update on id ${req.params.id} with body 
${JSON.stringify(req.body)}`) 
    try { 
        let toUpdate = await soup.findById( req.params.id) 
        // Do updates of properties 
        if(req.body.soup_type)  
               toUpdate.soup_name = req.body.soup_name;
        if(req.body.cost) toUpdate.soup_size = req.body.soup_size;
        if(req.body.size) toUpdate.price = req.body.price;
        let result = await toUpdate.save();
        console.log("Sucess " + result)
        res.send(result) 
    } catch (err) { 
        res.status(500) 
        res.send(`{"error": ${err}: Update for id ${req.params.id} 
failed`); 
    } 
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
// Handle soup delete on DELETE. 
exports.soup_delete = async function(req, res) { 
    console.log("delete "  + req.params.id) 
    try { 
        result = await soup.findByIdAndDelete( req.params.id) 
        console.log("Removed " + result) 
        res.send(result) 
    } catch (err) { 
        res.status(500) 
        res.send(`{"error": Error deleting ${err}}`); 
    } 
}; 
 