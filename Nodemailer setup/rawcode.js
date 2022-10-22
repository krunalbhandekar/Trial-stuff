var nodemailer = require('nodemailer');

var transporter = nodemailer.createTransport({
  service: '',
  auth: {
    user: '',
    // here do not write your actual gmail password , please write your gmail app password generate after 2 step verification process...
    pass: ''
  }
});

var mailOptions = {
  from: '',
  to: '',
  subject: '',
  text: ``
};

transporter.sendMail(mailOptions, function(error, info){
  if (error) {
    console.log(error);
  } else {
    console.log('Email sent: ' + info.response);
  }
});