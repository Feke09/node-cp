// email-sender.js
import nodemailer from "nodemailer";

async function sendEmail() {
  let transporter = nodemailer.createTransport({
    service: "gmail", // Use your email provider
    auth: {
      user: "elizabethukonga@gmail.com", // Your email
      pass: "80jdaaihb", // Your email password
    },
  });

  let info = await transporter.sendMail({
    from: '"Node Mailer" <elizabethukonga@gmail.com>',
    to: "yusufmomoh6@gmail.com",
    subject: "Hello from Node.js",
    text: "This is a test email sent from a Node.js application!",
  });

  console.log("Message sent: %s", info.messageId);
}

sendEmail().catch(console.error);
