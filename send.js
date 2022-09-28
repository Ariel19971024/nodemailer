var nodemailer = require('nodemailer');

var transporter = nodemailer.createTransport({
  service: 'Gmail',
  auth: {
    user: "life23913349@gmail.com", // Your email,
    pass: "xhzjthecxvrywafi" // password or Application password,
  }
});

var mailOptions = {
  from: 'life23913349@gmail.com', // Your email,
  to: ["life23913349@gmail.com"], // receiver email
  subject: 'Sending Email using Node.js',
  text: 'That was easy!',
  html: { path: "Entemplate.txt" }, // email template file path
};

transporter.sendMail(mailOptions, function(error, info){
  if (error) {
    console.log(error);
  } else {
    console.log('Email sent: ' + info.response);
  }
});