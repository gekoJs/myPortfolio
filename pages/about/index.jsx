import Head from "next/head";
import Router from "next/router"
export default function About() {
  return (
    <>
      <Head>
        <title>Jesús Roa | About</title>
        <meta name="description" content="Home" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/vercel.svg" />
      </Head>
      <h1>Hi im About</h1>
      <button onClick={()=> Router.back()}>Back</button>
    </>
  );
}