const nodemailer = require("nodemailer");
const { google } = require("googleapis");

const { CLIENT_ID, CLIENT_SECRET, REDIRECT_URI, REFRESH_TOKEN } = process.env;

const oAuthClient = new google.auth.OAuth2(
  CLIENT_ID,
  CLIENT_SECRET,
  REDIRECT_URI
);

oAuthClient.setCredentials({ refresh_token: REFRESH_TOKEN });

export default async function sendMail({ to, from, subject, text, html }) {
  try {
    const accesToken = await oAuthClient.getAccessToken();
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        type: "OAuth2",
        user: "daniroa.js@gmail.com",
        clientId: CLIENT_ID,
        clientSecret: CLIENT_SECRET,
        refreshToken: REFRESH_TOKEN,
        accessToken: accesToken,
      },
    });
    const mailOptions = {
      from,
      to,
      subject,
      text,
      html,
    };
    const result = await transporter.sendMail(mailOptions);

    if (!result.messageId) throw Error("The email wasn't sent");

    console.log("Message sent: %s", result.messageId);
    return result;
  } catch (error) {
    return { error };
  }
}
