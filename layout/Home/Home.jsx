import Head from "next/head";
import { ThemeButton } from "@/components";
import { useState, useEffect } from "react";
import style from "./Home.module.css";
import Link from "next/link";
import { useTheme } from "next-themes";
import { useSelector } from "react-redux";

export default function Home() {
  const themeDisplayed = useSelector(state=> state.themeDisplayed.theme)
  const { systemTheme, theme, setTheme } = useTheme();
  const [currentTheme, setCurrentTheme] = useState();

  useEffect(() => {
    setCurrentTheme( theme === "system" ? systemTheme : theme);
  }, [theme]);

  return (
    <>
      <Head>
        <title>Jesús Roa</title>
        <meta name="description" content="Home" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/jesusRoaLogo.svg" />
      </Head>

      <div className={`${style.container}`} theme={themeDisplayed}>
        <ThemeButton />
        <h1>Hola soy home</h1>

        <Link href={"/about"}>About</Link>
      </div>
    </>
  );
}
