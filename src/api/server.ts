import { action } from "@solidjs/router";
import { createTransport } from "nodemailer";

const SMTP = {
  HOST: process.env.SMTP_HOST ?? "localhost",
  PORT: Number.parseInt(process.env.SMTP_PORT ?? "2525"),
  SUBJECT: process.env.SMTP_SUBJECT ?? "New submission on magic-nonsense.com",
  FROM: process.env.SMTP_FROM ?? "Magic-Nonsense.com <no-reply@example.com",
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

export const submitContactAction = action(async (data: FormData) => {
  "use server";

  const submitted = {
    name: String(data.get("submitter_name")),
    email: String(data.get("submitter_email")),
    message: String(data.get("submitter_message")),
  };

  let text = template;
  text = text.replaceAll("%NAME%", submitted.name);
  text = text.replaceAll("%EMAIL%", submitted.email);
  text = text.replaceAll("%MESSAGE%", submitted.message);

  try {
    await createMailer().sendMail({
      subject: SMTP.SUBJECT,
      from: SMTP.FROM,
      to: SMTP.TO,
      text,
    });
  } catch (e) {
    console.log("error", e);
  }
});
