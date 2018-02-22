var express = require('express'); 
var path = require('path');
var routes = require('./routes/index.js');
var app = express(); 
var port = 3000;
const bodyParser = require('body-parser'); 
app.use(bodyParser.urlencoded({ extended: true })); 
app.use(bodyParser.json()); 
//View Engine  
app.set('view engine', 'ejs'); 
app.set('views', __dirname + '/views'); 
app.use('/public', express.static(process.cwd() + '/public'));
app.engine('html', require('ejs').renderFile);  
routes(app);
app.listen( process.env.PORT || port, function(){
    console.log("Server statred on port " + port);
}); 