const nodemailer = require('nodemailer');

const sendTheBill = async (to, subject, data, next) => {
  try {
    const smtpTransport = nodemailer.createTransport('SMTP', {
      service: 'Gmail',
      auth: {
        user: process.env.NODEMAILER_SENDER_EMAIL,
        pass: process.env.SENDER_EMAIL_PASSWORD,
      },
    });

    const msg = {
      from: process.env.NODEMAILER_SENDER_EMAIL,
      to,
      subject,
      html: `<h1>${subject}</h1>
      <div><span>Work hours: </span>${data.duration}</div>
      <div><span>Work hours: </span>${data.bill}</div>
      <p>Thanks...</p>
      `,
    };

    await smtpTransport.sendMail(msg);
  } catch (error) {
    next(error);
  }
};

module.exports = sendTheBill;
