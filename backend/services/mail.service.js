const nodemailer = require('nodemailer');
const keys = require('../config/keys');



module.exports.sendSubscribeEmail = async(
      email,
      text,
  ) => {

    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: keys.emailFrom,
        pass: keys.gmailPassword
      }
    });

    const mailOptions = {
      from: keys.email, // sender address
      to: email, // list of receivers
      subject: 'Actions', // Subject line
      html: text
    };

    await transporter.sendMail(mailOptions);
  };
