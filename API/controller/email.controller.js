import nodemailer from 'nodemailer';

function sendEmail(email,password)
{
var transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'vishalbankey252003@gmail.com',
    pass: 'fnxumekslltxtktj'
  }
});

var mailOptions = {
  from: 'vishalbankey252003@gmail.com',
  to: email,
  subject: 'Verification Mail',
  html: "<h1>Welcome to Tenders</h1><p>You have successfully registered to aur site your login credentials are attached below</p><h2>Username : "+email+"</h2><h2>Password : "+password+"</h2><h3>Click on the link below to verify</h3>http://localhost:3000/verifyuser/"+email
};

transporter.sendMail(mailOptions, function(error, info){
  if (error) {
    console.log(error);
  } else {
    console.log('Email sent: ' + info.response);
  }
});
}

export default sendEmail;