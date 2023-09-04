import { sendMail_resend } from "@/lib";

const handleSendMail = async (req, res) => {
  try {
    const mail = await sendMail_resend(req.body);

    console.log(mail);
    if (mail.error) throw Error;
    res.status(200).send(mail);
  } catch (error) {
    res.status(404).json({ error: error.message });
  }
};

export default handleSendMail;
