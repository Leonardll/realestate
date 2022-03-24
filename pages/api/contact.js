const mail = require("@sendgrid/mail");

mail.setApiKey(process.env.SENDGRID_API_KEY);

// eslint-disable-next-line import/no-anonymous-default-export
export default (req, res) => {
  
  const body = JSON.parse(req.body);

  const message = `
  FirstName: ${body.firstName}\r\n
  LastName: ${body.lastName}\r\n
  Email: ${body.email}\r\n
  Subject: ${body.subject}
  Message: ${body.message}
`;

  const data = {
    to: "info@unicohogar.com",
    from: "lonardlator@yahoo.fr",
    subject: `New message from ${body.firstName}`,
    text: message,
    html: message.replace(/\r\n/g, "<br />"),
  };
 mail.send(data);


  res.status(200).json({ status: "OK" });
}
