import nodemailer from "nodemailer";
import { google } from "googleapis";

const Oauth2 = google.auth.OAuth2;
const GclientId = process.env.GOOGLE_CLIENTE_ID;
const Gsecret = process.env.GOOGLE_SECRET;
const GrefreshToken = process.env.GOOGLE_REFRESH_TOKEN;

const oauth2Client = new Oauth2(
  GclientId,
  Gsecret,
  "https://developers.google.com/oauthplayground"
);
oauth2Client.setCredentials({
  refresh_token: GrefreshToken,
});

const accessToken = oauth2Client.getAccessToken();

const smtpTransport = nodemailer.createTransport({
  service: "gmail",
  auth: {
    type: "Oauth2",
    user: "camedal330@gmail.com",
    clientId: GclientId,
    clientSecret: Gsecret,
    refreshToken: GrefreshToken,
    accessToken: accessToken,
  },
  tls: {
    rejectUnauthorized: false,
  },
});

const sendEmail = (email, token, userId) => {
  const mailOptions = {
    from: "Marco <camedal330@gmail.com>",
    to: email,
    subject: "Restablecimiento de contraseña, (Proyecto Final Node) ",
    generaTextFromHTML: true,
    html: `<a href=http://miapp.com/new-password?tkn=${token}&userId=${userId}>Restablece tu contraseña</a>`,
  };

  smtpTransport.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.log("[Error] ==> en sendMail: ", error);
    } else {
      console.log("Mail sent Successfully ==> ", info);
    }
    smtpTransport.close();
  });
};

export default sendEmail;
