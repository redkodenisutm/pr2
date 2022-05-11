import imaps from "imap-simple";
import { convert } from "html-to-text";
import { READ_MAIL_CONFIG } from "./config";

const readMail = async () => {
  imaps.connect(READ_MAIL_CONFIG, async (err, connection) => {
    if (err) {
      console.log(err);
      return false;
    }

    console.log("CONNECTION SUCCESSFUL");

    await connection.openBox("INBOX");
    const searchCriteria = ["UNSEEN"];
    const fetchOptions = {
      bodies: ["TEXT"],
      markSeen: false,
    };
    const results = await connection.search(searchCriteria, fetchOptions);
    results.forEach((res: { parts: any[] }) => {
      const text = res.parts.find((part) => {
        return part.which === "TEXT" && part.size < 2048;
      });

      if (text) {
        let emailText = convert(text.body);
        console.log(emailText);
      }
    });

    connection.end();
  });
};

export default readMail;
