const nodemailer = require('nodemailer');

const sendTheBill = async (to, subject, content, next) => {
  try {
    const {
      total,
      hourPrice,
      resourcesPrice,
      hourNumber,
      description,
      client,
      provider,
    } = content;
    const { NODEMAILER_SENDER_EMAIL, SENDER_EMAIL_PASSWORD } = process.env;
    const smtpTransport = nodemailer.createTransport({
      service: 'Gmail',
      auth: {
        user: NODEMAILER_SENDER_EMAIL,
        pass: SENDER_EMAIL_PASSWORD,
      },
    });

    const msg = {
      from: NODEMAILER_SENDER_EMAIL,
      to,
      subject,
      html: `
      <h2 style="color: #151515">Service Seeker</h2>
      <div style="padding: 10px; color: #252525; font-weight: bold"><span style="font-weight: normal;">Invoice to: </span>${client}</div>
      <div style="padding: 10px; color: #252525; font-weight: bold"><span style="font-weight: normal;">Date: </span>${new Date().toDateString()}</div>
      <hr/>
      <table style="border:none;border-collapse:collapse;border-color:#aaa;border-spacing:0; margin: 1rem auto;">
      <thead>
        <tr>
          <th style="text-align:left;vertical-align:top; background-color:#FDCB6E;border-color:#aaa;border-style:solid;border-width:0px;color:#fff;
          font-family:Arial, sans-serif;font-size:14px;font-weight:normal;overflow:hidden;padding:10px 5px;word-break:normal;"><span style="font-weight:bold;">Client</span></th>
          <th style="text-align:left;vertical-align:top; background-color:#FDCB6E;border-color:#aaa;border-style:solid;border-width:0px;color:#fff;
          font-family:Arial, sans-serif;font-size:14px;font-weight:normal;overflow:hidden;padding:10px 5px;word-break:normal;"><span style="font-weight:bold">Provider</span></th>
          <th style="text-align:left;vertical-align:top; background-color:#FDCB6E;border-color:#aaa;border-style:solid;border-width:0px;color:#fff;
          font-family:Arial, sans-serif;font-size:14px;font-weight:normal;overflow:hidden;padding:10px 5px;word-break:normal;"><span style="font-weight:bold">Description</span></th>
          <th style="text-align:left;vertical-align:top; background-color:#FDCB6E;border-color:#aaa;border-style:solid;border-width:0px;color:#fff;
          font-family:Arial, sans-serif;font-size:14px;font-weight:normal;overflow:hidden;padding:10px 5px;word-break:normal;"><span style="font-weight:bold;font-style:normal">price/hour</span></th>
          <th style="text-align:left;vertical-align:top; background-color:#FDCB6E;border-color:#aaa;border-style:solid;border-width:0px;color:#fff;
          font-family:Arial, sans-serif;font-size:14px;font-weight:normal;overflow:hidden;padding:10px 5px;word-break:normal;"><span style="font-weight:bold;font-style:normal">Resources Price</span></th>
          <th style="text-align:left;vertical-align:top; background-color:#FDCB6E;border-color:#aaa;border-style:solid;border-width:0px;color:#fff;
          font-family:Arial, sans-serif;font-size:14px;font-weight:normal;overflow:hidden;padding:10px 5px;word-break:normal;"><span style="font-weight:bold">#Hours</span></th>
          <th style="text-align:left;vertical-align:top; background-color:#FDCB6E;border-color:#aaa;border-style:solid;border-width:0px;color:#fff;
          font-family:Arial, sans-serif;font-size:14px;font-weight:normal;overflow:hidden;padding:10px 5px;word-break:normal;"><span style="font-weight:bold">Total Price</span></th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td style="border-color:#000000;text-align:left;vertical-align:top; background-color:#fff;border-color:#aaa;border-style:solid;border-width:0px;color:#333;
          font-family:Arial, sans-serif;font-size:14px;overflow:hidden;padding:10px 5px;word-break:normal;">${client}</td>
          <td style="border-color:inherit;text-align:left;vertical-align:top; background-color:#fff;border-color:#aaa;border-style:solid;border-width:0px;color:#333;
          font-family:Arial, sans-serif;font-size:14px;overflow:hidden;padding:10px 5px;word-break:normal;">${provider}</td>
          <td style="border-color:inherit;text-align:left;vertical-align:top; background-color:#fff;border-color:#aaa;border-style:solid;border-width:0px;color:#333;
          font-family:Arial, sans-serif;font-size:14px;overflow:hidden;padding:10px 5px;word-break:normal;">${description}</td>
          <td style="border-color:inherit;text-align:left;vertical-align:top; background-color:#fff;border-color:#aaa;border-style:solid;border-width:0px;color:#333;
          font-family:Arial, sans-serif;font-size:14px;overflow:hidden;padding:10px 5px;word-break:normal;">${hourPrice}$</td>
          <td style="border-color:inherit;text-align:left;vertical-align:top; background-color:#fff;border-color:#aaa;border-style:solid;border-width:0px;color:#333;
          font-family:Arial, sans-serif;font-size:14px;overflow:hidden;padding:10px 5px;word-break:normal;">${resourcesPrice}$</td>
          <td style="border-color:inherit;text-align:left;vertical-align:top; background-color:#fff;border-color:#aaa;border-style:solid;border-width:0px;color:#333;
          font-family:Arial, sans-serif;font-size:14px;overflow:hidden;padding:10px 5px;word-break:normal;">${hourNumber}Hr.</td>
          <td style="border-color:inherit;text-align:left;vertical-align:top; background-color:#fff;border-color:#aaa;border-style:solid;border-width:0px;color:#333;
          font-family:Arial, sans-serif;font-size:14px;overflow:hidden;padding:10px 5px;word-break:normal;">${total}$</td>
        </tr>
      </tbody>
      </table>
  </table>
      `,
    };

    await smtpTransport.sendMail(msg);
  } catch (error) {
    next(error);
  }
};

module.exports = sendTheBill;
