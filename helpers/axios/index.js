import axios from "axios";

const { BASE_URL } = process.env

axios.defaults.baseURL = BASE_URL

export const postEmail = async (email) =>
  await axios.post("api/nodemailer", { ...email });
