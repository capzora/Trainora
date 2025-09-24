const sgMail = require('@sendgrid/mail');
sgMail.setApiKey(process.env.SENDGRID_API_KEY);

async function sendEmail({ to, subject, text, html }) {
  const msg = {
    to,
    from: 'ashrut2103@gmail.com', // must be a verified sender on SendGrid
    subject,
    text,
    html
  };

  try {
    const response = await sgMail.send(msg);
    console.log(" Email sent to:", to);
    return response;
  } catch (err) {
    console.error(" Error sending email:", err.response?.body || err);
    throw err;
  }
}

async function sendReminderEmail(to, programTitle, dueDate, amount) {
  const msg = {
    to,
    from: "ashrut2103@gmail.com", // must be verified in SendGrid
    subject: " EMI Payment Reminder - Trainora.ai",
    html: `
      <p>Hi,</p>
      <p>This is a reminder that your next EMI of <b>₹${amount}</b> for 
      <b>${programTitle}</b> is due on <b>${new Date(dueDate).toDateString()}</b>.</p>
      <p>Please make the payment on time to continue accessing your course.</p>
      <p>- Team Trainora</p>
    `,
  };
  await sgMail.send(msg);
}


module.exports = { sendEmail, sendReminderEmail };
