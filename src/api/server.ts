import { action } from "@solidjs/router";
import { sendMail } from "./mailer";

export const submitContactAction = action(async (data: FormData) => {
  "use server";

  const submitted = {
    name: String(data.get("submitter_name")),
    email: String(data.get("submitter_email")),
    message: String(data.get("submitter_message")),
  };

  const result = await sendMail(submitted.name, submitted.email, submitted.message);
  if (!result) {
    return result;
  }

  console.log("sending: ", result.messageId);
  return true;
});
