import Head from "next/head";
import Router from "next/router"
import * as Layout from "@/layout";
export default function About() {
  return (
    <>
      <Head>
        <title>Jesús Roa | About</title>
        <meta name="description" content="Home" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/jesusRoaLogo.svg" />
      </Head>
      <Layout.About/>
    </>
  );
}
