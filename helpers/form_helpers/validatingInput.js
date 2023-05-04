export default function validatingInput(input) {
  const err = {};
  if (!input.name)
    err.name = "How could i know who you are if you dont tell me? :c";
  else if (!/^[a-zA-Z]*$/.test(input.name))
    err.name = "What? your name has numbers??? .-.";

  if (!input.email) err.email = "I need your email so i can reach you";

  if (!input.message) err.message = "Come on dont be shy, i dont bite :D";
  return err;
}
