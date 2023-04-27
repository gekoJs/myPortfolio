import Head from "next/head";
import Link from "next/link";

import { useDispatch, useSelector } from "react-redux";

import style from "./Home.module.scss";
import { useEffect } from "react";
import { showMenu } from "@/Redux/animateTrigger";

export default function Home() {
  const dispatch = useDispatch();
  const themeDisplayed = useSelector((state) => state.animations.theme);
  const textAnimation = useSelector((state) => state.animations.menu);

  useEffect(() => {
    dispatch(showMenu(false));
  }, [dispatch]);

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
          <h2
            className={style.text}
            style={{
              transform: textAnimation ? "translateY(100%)" : "translateY(0)",
              transitionDelay: !textAnimation ? ".3s" : "0s"
            }}
          >
            Hey i'm&nbsp;<b>Jesús Roa</b>
            <br />i build things for the web
          </h2>
        </div>

        <div className={style.description}>
          <p
            className={style.text}
            style={{
              transform: textAnimation ? "translateY(100%)" : "translateY(0)",
              transitionDelay: !textAnimation ? ".3s" : "0s"
            }}
          >
            I'm a Full Stack Web Developer
          </p>
        </div>
      </div>
    </>
  );
}
