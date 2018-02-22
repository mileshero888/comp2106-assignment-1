var express = require('express'); 
var nodemailer = require('nodemailer');
var app = express();   
const bodyParser = require('body-parser'); 
app.use(bodyParser.urlencoded({ extended: true })); 
app.use(bodyParser.json()); 

var transporter = nodemailer.createTransport({
  host: "smtp.mailtrap.io",
  port: 2525,
  auth: {
    user: "mail-trap-user",
    pass: "mail-trap-password"
  }
});

module.exports = function(app) {

 app.get('/', function(req, res){
       res.render('index'); 
 });

  app.get('/services', function(req, res){
        res.render('services'); 
  });

  app.get('/projects', function(req, res){
        res.render('projects'); 
  });

  app.get('/about', function(req, res){
        res.render('about'); 
  });

  app.get('/contact', function(req, res){
        res.render('contact'); 
  });

 app.post('/email', function(req, res){ 

  if(req.method == "POST") {
        var data = {}; 
        var name = email = message = '';
        data = JSON.stringify(req.body);
        name = req.body.name;
        email = req.body.email;
        message = req.body.message; 

        if(name != "" && email != "" && message != "") {

          // i have added my credentials
          var mailOptions = {
          from: email,
          // you will put your mail trap email ID here
          to: 'your-mail-trap-email',
          subject: 'Someone contacted you',
          text:message
        }; 
        transporter.sendMail(mailOptions, function(error, info){
          if (error) {
            res.send({ error: true });
          } 
          else {
          res.send({ error: false });
          } 
        }); 
        } else { 
        res.send({ error: true });
        } 
  } else {
    res.send("Do not temper with the url.");
  }  
});  
}