import "dotenv/config";
import sendMail from "./sendEmail";
import readMail from "./readEmail";

(async () => {
  await sendMail({ subject: "Email 1", content: "This is a test email 1" });
  await sendMail({ subject: "Email 2" });

  console.log("Now waiting for 5 seconds...");

  setTimeout(async () => {
    console.log("Fetching unseen emails...");
    await readMail();
  }, 5000);
})();
