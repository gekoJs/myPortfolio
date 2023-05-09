import axios from "axios";

export const postEmail = async (email) => await axios.post("api/nodemailer", {...email});