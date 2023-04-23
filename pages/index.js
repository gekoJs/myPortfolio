import Head from "next/head";
import Image from "next/image";
import * as Layout from "../layout/index";

export default function Home() {
  return (
    <>
      <Head>
        <title>Jesús Roa</title>
        <meta name="description" content="Home of my portfolio" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/svg/jesusRoa-logo.svg" />
      </Head>
      <Layout.Home />
    </>
  );
}
