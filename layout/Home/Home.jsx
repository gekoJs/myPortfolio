import Head from "next/head";
import { ThemeButton } from "@/components";
import { useState } from "react";
import style from "./Home.module.scss";

export default function Home() {
  const [theme, setTheme] = useState("light");

  return (
    <>
      <div className={`${theme}-mode ${style.container}`}>
        <ThemeButton theme={theme} setTheme={setTheme} />
        <h1 className={`${theme}-mode`}>Hola soy home</h1>
      </div>
    </>
  );
}
