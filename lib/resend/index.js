import { Resend } from "resend";
const { RESEND_KEY } = process.env;

const resend = new Resend(RESEND_KEY);

export default async function sendEmail_resend({
//   to,
//   from,
  subject,
//   text,
  html,
}) {
  try {
    const data = await resend.emails.send({
      from: "Acme <onboarding@resend.dev>",
      to: ["daniroa.js@gmail.com"],
      subject,
      html,
    });

    console.log({ data }, "Email sent");
    return data;
  } catch (error) {
    return { error };
  }
}
