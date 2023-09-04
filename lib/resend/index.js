import { Resend } from "resend";
const resend = new Resend("re_EoYrZusG_GEZqVLL3akoPuuuSSfBnUssB");

export default async function sendEmail_resend({
  to,
  from,
  subject,
  text,
  html,
}) {
  try {
    const data = await resend.emails.send({
      from: "Acme <onboarding@resend.dev>",
      to: ["daniroa.js@gmail.com"],
      subject,
      html,
    });

    console.log(data);
    return data;
  } catch (error) {
    return { error };
  }
}
