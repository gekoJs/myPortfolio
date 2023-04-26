import Head from "next/head";
import Link from "next/link";

import { useSelector } from "react-redux";

import style from "./Home.module.scss";

export default function Home() {
  const themeDisplayed = useSelector((state) => state.themeDisplayed.theme);

  return (
    <>
      <Head>
        <title>Jesús Roa</title>
        <meta name="description" content="Home" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/jesusRoaLogo.svg" />
      </Head>

      <div className={`${style.container}`} theme={themeDisplayed}>
        <div className={style.greeting}>
          <h2>
            Hey i'm&nbsp;<b>Jesús Roa</b>
            <br />i build things for the web
          </h2>
        </div>

        <div className={style.description}>
          <p>I'm a Full Stack Web Developer</p>
        </div>

        <div className={style.links}>
          <Link href={"/about"}>About</Link>
        </div>
      </div>
    </>
  );
}
