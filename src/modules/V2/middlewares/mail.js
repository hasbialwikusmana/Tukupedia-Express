require("dotenv").config();
const nodeMailer = require("nodemailer");
const { google } = require("googleapis");

const CLIENT_ID = process.env.CLIENT_ID;
const CLIENT_SECRET = process.env.CLIENT_SECRET;
const REDIRECT_URL = process.env.REDIRECT_URL;
const REFRESH_TOKEN = process.env.REFRESH_TOKEN;

const oauth2Client = new google.auth.OAuth2(
  CLIENT_ID,
  CLIENT_SECRET,
  REDIRECT_URL
);
oauth2Client.setCredentials({ refresh_token: REFRESH_TOKEN });

async function sendMail(users_email) {
  try {
    const accessToken = await oauth2Client.getAccessToken();
    const smtpTransport = nodeMailer.createTransport({
      service: "gmail",
      auth: {
        type: "OAuth2",
        user: "hasbipijarcamp@gmail.com",
        clientId: CLIENT_ID,
        clientSecret: CLIENT_SECRET,
        refreshToken: REFRESH_TOKEN,
        accessToken: accessToken,
      },
    });
    const mailOptions = {
      from: "Tukupedia <hasbipijarcamp@gmail.com>",
      to: users_email,
      subject: "Aktivasi User Tukupedia",
      html: "<b>Aktivasi your email </b>",
    };
    const result = await smtpTransport.sendMail(mailOptions);
    return result;
  } catch (error) {
    return error;
  }
}
module.exports = {
  sendMail,
};
