var nodemailer = require('nodemailer');

var transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'eoceanbe48@gmail.com',
    
    pass: 'cdamvfnoffxwmzpq'
  }
});

var mailOptions = {
  from: 'eoceanbe48@gmail.com',
  to: 'konstantinoskalaitzis@yahoo.com',
  subject: 'Sending Email using Node.js',
  text: 'Please dont!'
};

transporter.sendMail(mailOptions, function(error, info){
  if (error) {
    console.log(error);
  } else {
    console.log('Email sent: ' + info.response);
  }
});
