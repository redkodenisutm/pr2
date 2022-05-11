import nodemailer from "nodemailer";
import { SEND_MAIL_CONFIG } from "./config";

const transporter = nodemailer.createTransport(SEND_MAIL_CONFIG);

interface Options {
  subject: string;
  content?: string;
}

const sendMail = async ({ subject, content }: Options) => {
  try {
    let info = await transporter.sendMail({
      from: SEND_MAIL_CONFIG.auth.user,
      to: SEND_MAIL_CONFIG.auth.user,
      subject,
      html:
        content ??
        `
      <div
        class="container"
        style="max-width: 90%; margin: auto; padding-top: 20px"
      >
        <h2>This is a testing email 1</h2>
        <p>Please ignore this one</p>
      </div>
    `,
    });
    console.log(`MAIL SENT: ${info.messageId}`);
  } catch (error) {
    console.log(error);
    return false;
  }
};

export default sendMail;
