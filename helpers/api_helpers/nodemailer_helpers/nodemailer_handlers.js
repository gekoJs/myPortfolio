import { sendMail } from "@/lib";

const handleSendMail = async (req, res) => {
  const { to, subject, text, html } = req.body;
  try {
    const mail = await sendMail(to, subject, text, html);
    res.status(200).send(mail);
  } catch (error) {
    res.status(404).json({ error: error.message });
  }
};

export default handleSendMail;
