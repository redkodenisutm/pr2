import { ImapSimpleOptions } from "imap-simple";

export const READ_MAIL_CONFIG: ImapSimpleOptions = {
  imap: {
    user: process.env.EMAIL || "",
    password: process.env.PASSWORD || "",
    host: "imap.gmail.com",
    port: 993,
    authTimeout: 10000,
    tls: true,
    tlsOptions: { rejectUnauthorized: false },
  },
};

export const SEND_MAIL_CONFIG = {
  service: "gmail",
  auth: {
    user: process.env.EMAIL,
    pass: process.env.PASSWORD,
  },
};
