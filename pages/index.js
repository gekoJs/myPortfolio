import * as Layout from "../layout/index";
import Head from "next/head";
export default function Home() {
  return (
    <>
      <Head>
        <title>Jesús Roa</title>
        <meta name="description" content="Home" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/jesusRoaLogo.svg" />
      </Head>
      <Layout.Home />
    </>
  );
}
