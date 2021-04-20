const nodemailer = require('nodemailer');

const sendTheBill = async (
  to,
  subject,
  {
    total,
    hourPrice,
    resourcesPrice,
    hourNumber,
    description,
    client,
    provider,
  },
  next
) => {
  try {
    const smtpTransport = nodemailer.createTransport({
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
      html: `
      <h2>Service Seeker</h2>
      <div style="padding: 10px; background-color: #25D595; color: #fff"><span>INVOICE TO: </span>${client}</div>
      <div style="padding: 10px; background-color: #25D595; color: #fff"><span>Date: </span>${new Date().toDateString()}</div>
      <hr/>
      <table style="border:none;border-collapse:collapse;border-color:#aaa;border-spacing:0;">
      <thead>
        <tr>
          <th style="text-align:left;vertical-align:top; background-color:#f38630;border-color:#aaa;border-style:solid;border-width:0px;color:#fff;
          font-family:Arial, sans-serif;font-size:14px;font-weight:normal;overflow:hidden;padding:10px 5px;word-break:normal;"><span style="font-weight:bold;">Client</span></th>
          <th style="text-align:left;vertical-align:top; background-color:#f38630;border-color:#aaa;border-style:solid;border-width:0px;color:#fff;
          font-family:Arial, sans-serif;font-size:14px;font-weight:normal;overflow:hidden;padding:10px 5px;word-break:normal;"><span style="font-weight:bold">Provider</span></th>
          <th style="text-align:left;vertical-align:top; background-color:#f38630;border-color:#aaa;border-style:solid;border-width:0px;color:#fff;
          font-family:Arial, sans-serif;font-size:14px;font-weight:normal;overflow:hidden;padding:10px 5px;word-break:normal;"><span style="font-weight:bold">Description</span></th>
          <th style="text-align:left;vertical-align:top; background-color:#f38630;border-color:#aaa;border-style:solid;border-width:0px;color:#fff;
          font-family:Arial, sans-serif;font-size:14px;font-weight:normal;overflow:hidden;padding:10px 5px;word-break:normal;"><span style="font-weight:bold;font-style:normal">price/hour</span></th>
          <th style="text-align:left;vertical-align:top; background-color:#f38630;border-color:#aaa;border-style:solid;border-width:0px;color:#fff;
          font-family:Arial, sans-serif;font-size:14px;font-weight:normal;overflow:hidden;padding:10px 5px;word-break:normal;"><span style="font-weight:bold;font-style:normal">Resources Price</span></th>
          <th style="text-align:left;vertical-align:top; background-color:#f38630;border-color:#aaa;border-style:solid;border-width:0px;color:#fff;
          font-family:Arial, sans-serif;font-size:14px;font-weight:normal;overflow:hidden;padding:10px 5px;word-break:normal;"><span style="font-weight:bold">#Hours</span></th>
          <th style="text-align:left;vertical-align:top; background-color:#f38630;border-color:#aaa;border-style:solid;border-width:0px;color:#fff;
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
