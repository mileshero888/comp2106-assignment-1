unzip the project and place it in any drive


install node js from its official website https://nodejs.org/en/

download the Recommented version for most user

download git bash
 
open git and navigate to the currect working directory..

cd your_director/your_project

type command node server

it will the service on localhost:3000/

open browser and go to localhost:3000

change the content of the web pages as per your need. you don't have to touch the code just alter only

files in the views folder such as views->header.ejs

place your images in the public/assets/images and set path to the images.

for sending the email to your email account. create an account on mailtrap https://mailtrap.io/signin

and change the credential in the following code in the routes/index.js
var transporter = nodemailer.createTransport({
  host: "smtp.mailtrap.io",
  port: 2525,
  auth: {
    user: "65ccce463bafa", // your credential
    pass: "e2ed618b41b845" 
  }
});


 in order to get the credentials log in to mailtrap 

 go to inbox and Integrations --> CHOOSE NODE JS nodemailer from the dropdown copy the code and pase it in the index.js file 

 
 also change the code line (to: 'mailtrap-account-id') 39 in the routes/index.js file ,



