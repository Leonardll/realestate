const mail = require("@sendgrid/mail");

mail.setApiKey(process.env.NEXT_PUBLIC_SENDGRID_API_KEY);

// eslint-disable-next-line import/no-anonymous-default-export
export default async (req, res) => {
  
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
    subject: `New message from ${body.firstName} ${body.phone}`,
    text: message,
    html: message.replace(/\r\n/g, "<br />"),
  };
 await  mail.send(data);


  res.status(200).json({ status: "OK" });
}
