import Head from "next/head";
import Link from "next/link";

import { useDispatch, useSelector } from "react-redux";

import style from "./Home.module.scss";

import { useEffect, useRef, useState } from "react";
import { showMenu } from "@/Redux/animateTrigger";
import { useMediaQuery } from "@chakra-ui/react";

export default function Home() {
  const [isLargerThan930] = useMediaQuery("(max-width: 930px)")
  const [isLargerThan520] = useMediaQuery("(max-width: 520px)")
  const [isLargerThan400] = useMediaQuery("(max-width: 400px)")
  const dispatch = useDispatch();
  const themeDisplayed = useSelector((state) => state.animations.theme);
  const textAnimation = useSelector((state) => state.animations.menu);

  useEffect(() => {
    dispatch(showMenu(false));
  }, [dispatch]);

  const referense = useRef();

  const [position, setPosition] = useState(0);
  const [isHover, setIsHover] = useState(false);

  useEffect(() => {
    let intervalId;
    if (isHover) {
      intervalId = setInterval(() => {
        setPosition((prev) => prev + 1);
      }, 10);
      return () => clearInterval(intervalId);
    }
    intervalId = setInterval(() => {
      setPosition((prev) => prev + 1);
    }, 80);
    return () => clearInterval(intervalId);
  }, [isHover]);

  const handleHover = () => setIsHover(!isHover);

  const classWave = themeDisplayed == "light" ? `${style.waveLight}` : `${style.wabe}` 
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
            className={`${style.text} ${style.textName}`}
            style={{
              transform: textAnimation ? "translateY(100%)" : "translateY(0)",
              transitionDelay: !textAnimation ? ".3s" : "0s",
              fontSize: isLargerThan520 ? "28px" : isLargerThan930 ? "40px" :  "inherit"
            }}
          >
            Hey i'm&nbsp;
            <div
              className={style.name}
              onMouseEnter={handleHover}
              onMouseLeave={handleHover}
            >
              JESUS ROA{" "}
              <div className={style.wabeContainer}>
                <div
                  className={classWave}
                  ref={referense}
                  style={{ backgroundPositionX: position }}
                ></div>
              </div>
            </div>
          </h2>
        </div>
        <div className={style.greeting}>
          <h3
            className={`${style.text} ${style.textName}`}
            style={{
              transform: textAnimation ? "translateY(100%)" : "translateY(0)",
              transitionDelay: !textAnimation ? ".3s" : "0s",
              fontSize: isLargerThan400 ? "24px" : isLargerThan520 ? "28px" : isLargerThan930 ? "40px" :  "inherit"
            }}
          >
            i build things for the web
          </h3>
        </div>

        <div className={style.description}>
          <div
            className={style.text}
            style={{
              transform: textAnimation ? "translateY(100%)" : "translateY(0)",
              transitionDelay: !textAnimation ? ".3s" : "0s",
              fontSize: isLargerThan520 ? "15px" : isLargerThan930 ? "20px" :  "inherit"
            }}
          >
            i'm a&nbsp;
            <div
              className={style.name}
              onMouseEnter={handleHover}
              onMouseLeave={handleHover}
            >
              DEVELOPER
              <div className={style.wabeContainer}>
                <div
                  className={` ${style.wabeTwo}`}
                  ref={referense}
                  style={{ backgroundPositionX: position }}
                ></div>
              </div>{" "}
            </div>{" "}
            &nbsp;full stack
          </div>
        </div>
      </div>
    </>
  );
}
