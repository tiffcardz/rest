const express = require("express");
const app = express();

// WEB SERVICE DEFINITION

//GET POST PUT DELETE (methods) ON A RESOURCE

app.get('/', function(request, response) {
    
    //request.
    
    console.log("sending Hello Mofo to client");
    response.send("HELLO MOFO _,/");


});



function pow(a, n) {
    res = 1;
    for(var i = 0; i < n; i++){
        res = res * a; // res *= a
    }

    return res;
}

function sum(x, y) {
    return x + y;
}

// domain/pow?a=5&n=2 // 25
app.get("/pow", function(req, res){

    const a= parseInt(req.query.a);
    const n= parseInt(req.query.n);
    const power = pow(a,n);
    

    res.send(power+"");

});

app.get("/add", function(req, res) {

    // blahblah.com/add?a=10&b=20
    const a = parseInt(req.query.a);
    const b = parseInt(req.query.b);

    const result = sum(a, b);

    res.send(result+"");

});

app.get("/memo", function(req, res) {

    const message = req.query.message;
    const date = new Date().toString();

    

});


// something.com/echo?m=blahblahblah
// response: you said 'blahblahblah'
app.get("/echo", function(req, res) {

    var m = req.query.m
    var n = parseInt(req.query.n)

    var s = "";
    for(i = 0; i < n ; i++){
        s = s + m;
    }

    m = "You said \"" + s + "\"";

    res.send(m);
    
});


  
// listen for requests :)
var listener = app.listen(80, function() {
    console.log('Your app is listening on port ' + listener.address().port);
});