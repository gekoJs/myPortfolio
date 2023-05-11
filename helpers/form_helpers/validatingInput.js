export default function validatingInput(input) {
  const err = {};
  if (!input.name)
    err.name = "How could i know who you are if you dont tell me? :c";
  else if (!/(.*[a-z]){3}/i.test(input.name))
    err.name = "Is your name that short??";
  else if (
    !/^[a-zA-ZàáâäãåąčćęèéêëėįìíîïłńòóôöõøùúûüųūÿýżźñçčšžÀÁÂÄÃÅĄĆČĖĘÈÉÊËÌÍÎÏĮŁŃÒÓÔÖÕØÙÚÛÜŲŪŸÝŻŹÑßÇŒÆČŠŽ∂ð ,.'-]+$/u.test(
      input.name
    )
  )
    err.name = "So your name has numbers...";

  if (!input.email) err.email = "I need your email so i can reach you";
  else if (!/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(input.email))
    err.email = "Write a valid email please c:";

  if (!input.message) err.message = "Come on dont be shy, i dont bite :D";
  return err;
}
