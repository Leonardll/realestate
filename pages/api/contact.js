const mail = require("@sendgrid/mail");

mail.setApiKey(process.env.SENDGRID_API_KEY);

// eslint-disable-next-line import/no-anonymous-default-export
export default (req, res) => {
  
  const body = JSON.parse(req.body);

  const message = `
  FirstName: ${body.firstName}\r\n
  Email: ${body.email}\r\n
  phone:${body.phone}
  Message: ${body.message}\r\n
`;

  const data = {
    to: "info@unicohogar.com",
    from: "info@unicohogar.com",
    subject: `New message from ${body.firstName} ${body.number}`,
    text: message,
    html: message.replace(/\r\n/g, "<br />"),
  };
 mail.send(data);


  res.status(200).json({ status: "OK" });
}
