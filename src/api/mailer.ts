"use server";

import { createTransport } from "nodemailer";

const SMTP = {
  HOST: process.env.SMTP_HOST ?? "localhost",
  PORT: Number.parseInt(process.env.SMTP_PORT ?? "2525"),
  SUBJECT: process.env.SMTP_SUBJECT ?? "New submission on magic-nonsense.com",
  FROM: process.env.SMTP_FROM ?? "Magic-Nonsense.com <no-reply@example.com>",
  TO: process.env.SMTP_TO ?? "submissions@example.com",
};

const template = `
 New submission on contact form on magic-nonsense.com
 
 Form:
 -  name: %NAME%
 -  email: %EMAIL%
 -  message: %MESSAGE%
 `;

const createMailer = () =>
  createTransport({
    host: SMTP.HOST,
    port: SMTP.PORT,
  });

export const sendMail = async (name: string, email: string, message: string) => {
  let text = template;
  text = text.replaceAll("%NAME%", name);
  text = text.replaceAll("%EMAIL%", email);
  text = text.replaceAll("%MESSAGE%", message);

  try {
    return await createMailer().sendMail({
      subject: SMTP.SUBJECT,
      from: SMTP.FROM,
      to: SMTP.TO,
      text,
    });
  } catch {
    return false;
  }
};
