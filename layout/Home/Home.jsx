import Head from "next/head";
import { ThemeButton } from "@/components";
import { useState } from "react";
import style from "./Home.module.scss"

export default function Home() {
  const [theme, setTheme] = useState("light");

  return (
    <>
      <Head>
        <title>Jesús Roa | Home</title>
        <meta name="description" content="Home of my portfolio" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/svg/jesusRoa-logo.svg" />
      </Head>

      <div className={`${theme}-mode ${style.container}`}>
        <ThemeButton theme={theme} setTheme={setTheme} />
        <h1 className={`${theme}-mode`}>Hola soy home</h1>
      </div>
    </>
  );
}
