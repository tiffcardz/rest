const express = require("express");
const app = express();

// WEB SERVICE DEFINITION

//GET POST PUT DELETE (methods) ON A RESOURCE

app.get('/', function(request, response) {
    
    //request.
    
    console.log("sending Hello Mofo to client");
    response.send("HELLO MOFO _,/");



});

app.get("/add", function(req, res) {

    const a = parseInt(req.query.a);
    const b = parseInt(req.query.b);

    res.send("Sum of " + a + " and " + b + " = " + (a+b));

});

app.get("/memo", function(req, res) {

    const message = req.query.message;
    const date = new Date().toString();

    

});




  
// listen for requests :)
var listener = app.listen(80, function() {
    console.log('Your app is listening on port ' + listener.address().port);
});