export default function validatingInput(input, lang) {
  const err = {};
  if (!input.name) err.name = lang.valid_name_1;
  else if (!/(.*[a-z]){3}/i.test(input.name)) err.name = lang.valid_name_3;
  else if (
    !/^[a-zA-ZàáâäãåąčćęèéêëėįìíîïłńòóôöõøùúûüųūÿýżźñçčšžÀÁÂÄÃÅĄĆČĖĘÈÉÊËÌÍÎÏĮŁŃÒÓÔÖÕØÙÚÛÜŲŪŸÝŻŹÑßÇŒÆČŠŽ∂ð ,.'-]+$/u.test(
      input.name
    )
  )
    err.name = lang.valid_name_2;

  if (!input.email) err.email = lang.valid_mail_1;
  else if (!/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(input.email))
    err.email = lang.valid_mail;

  if (!input.message) err.message = lang.valid_message;
  return err;
}
