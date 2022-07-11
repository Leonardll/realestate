import cookie from "cookie";

const mail = require("@sendgrid/mail");

mail.setApiKey(process.env.NEXT_PUBLIC_SENDGRID_API_KEY);

// eslint-disable-next-line import/no-anonymous-default-export
export default async (req, res) => {
  res.setHeader(
    "Set-Cookie",
    cookie.serialize("token", req.body.token, {
      httpOnly: true,
      secure: process.env.NODE_ENV !== "development",
      expires: new Date(0),
      maxAge: 60 * 60,
      sameSite: "strict",
      path: "/",
    })
  );

  const body = JSON.parse(JSON.stringify(req.body));

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
  try {
    await mail.send(data);
    console.log(message);
    console.log(data);
    res.status(200).json({ status: "OK" });
  } catch (error) {
    console.log("server error", error);
    if (error.response) {
      console.log(error.response.body);
    }
    res.status(400).json({ status: "ERROR", message: error.message });
  }
};
