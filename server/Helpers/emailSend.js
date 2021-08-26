const nodemailer = require("nodemailer");
var smtpTransport = require("nodemailer-smtp-transport");

const sendMails = function (mailList,subject,html) {

  console.log("Generated otp is:",html);
  let mailTransporter = nodemailer.createTransport(
    smtpTransport({
      host: "172.27.172.202",
      port:25,
      auth: {
        user: "CEL",
        pass: "Gmail#@5689",
      },
      debug:true,
      logger:true,
      tls: {rejectUnauthorized: false},
    })
  );

  let mailDetails = {
    from: "CEL@evolvingsols.com",
    to: mailList,
    subject:subject,
    text: "Otp is",
    html: html
  };

  mailTransporter.sendMail(mailDetails, function (err, data) {
    if (err) {
      console.log("Error Occurs", err);
    } else {
      console.log("Email sent successfully");
    }
  });
};

module.exports = {
  sendMails
}

