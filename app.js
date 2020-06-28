const nodemailer=require('nodemailer');
let transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: 
      pass:
    }
  });
  
  let mailOptions = {
    from: 
    to: 
    subject: 
    text:
  };
  
  transporter.sendMail(mailOptions, function(error, info){
    if (error) {
      console.log(error);
    } else {
      console.log('Email sent: ' + info.response);
    }
  });