import Head from "next/head";
import { ThemeButton } from "@/components";
import { useState } from "react";
import style from "./Home.module.scss";
import Link from "next/link";

export default function Home() {
  const [theme, setTheme] = useState("light");

  return (
    <>
      <Head>
        <title>Jesús Roa</title>
        <meta name="description" content="Home" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/jesusRoaLogo.svg" />
      </Head>

      <div className={`${theme}-mode ${style.container}`}>
        <ThemeButton/>
        <h1 className={`${theme}-mode`}>Hola soy home</h1>

        <Link href={"/about"}>
        About
        </Link>
      </div>
    </>
  );
}
