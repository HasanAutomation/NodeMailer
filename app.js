console.log("This is a mail app");
const nodemailer=require('nodemailer');
let transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: 'kk631352@gmail.com',
      pass: '#Debacle#1'
    }
  });
  
  let mailOptions = {
    from: 'kk631352@gmail.com',
    to: 'anurupadas89811@gmail.com',
    subject: 'Sending Email using Node.js',
    text: 'sutiye lal kore debo'
  };
  
  transporter.sendMail(mailOptions, function(error, info){
    if (error) {
      console.log(error);
    } else {
      console.log('Email sent: ' + info.response);
    }
  });