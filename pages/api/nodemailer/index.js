import { POST } from "@/helpers";
import handleSendMail from "@/helpers/api_helpers/nodemailer_helpers/nodemailer_handlers";

export default async function mailHandler(req, res) {
  const method = req.method;

  switch (method) {
    case POST:
      return await handleSendMail(req, res);
    default:
      return res.status(400).json({
        message: "400 Bad Request: invalid method",
      });
  }
}
