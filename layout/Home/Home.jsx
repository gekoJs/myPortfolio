import Head from "next/head";
import { useDispatch, useSelector } from "react-redux";

import style from "./Home.module.scss";
import { motion as m } from "framer-motion";

import { useEffect, useRef, useState } from "react";
import { showMenu } from "@/Redux/animateTrigger";
import { useMediaQuery } from "@chakra-ui/react";

import { cursorHover } from "@/helpers";

export default function Home() {
  //-----------------------------------
  const dispatch = useDispatch();
  const themeDisplayed = useSelector((state) => state.animations.theme);
  useEffect(() => {
    dispatch(showMenu(false));
  }, [dispatch]);
  //-----------------------------------
  //-----------------------------------
  const [isHoverWave, setIsHoverWave] = useState(false);
  const [position, setPosition] = useState(0);
  const handleHoverWave = () => setIsHoverWave(!isHoverWave);
  useEffect(() => {
    let intervalId;
    if (isHoverWave) {
      intervalId = setInterval(() => {
        setPosition((prev) => prev + 1);
      }, 10);
      return () => clearInterval(intervalId);
    }
  }, [isHoverWave]);
  //-----------------------------------
  //-----------------------------------
  const [isHoverText, setisHoverText] = useState(true);
  const handleHoverText = () => {
    cursorHover({
      padding: isHoverText ? "32px" : "12px",
      background: isHoverText ? "var(--fill)" : "transparent",
      mixBlendMode:
        isHoverText && themeDisplayed === "dark" ? "difference" : "normal",
    });
    setisHoverText(!isHoverText);
  };
  //-----------------------------------
  const [isSmallerThan560] = useMediaQuery("(max-width: 560px)");
  const [isSmallerThan370] = useMediaQuery("(max-width: 370px)");
  const [isLargerThan770] = useMediaQuery("(min-width: 770px)");
  //-----------------------------------
  const textAnimation = useSelector((state) => state.animations.menu);

  const classWave =
    themeDisplayed == "light" ? `${style.waveLight}` : `${style.wave}`;

  const variants = {
    open: { opacity: 1, y: "0" },
    close: { opacity: 0, y: "100%" },
  };

  return (
    <>
      <Head>
        <title>Jesús Roa</title>
        <meta name="description" content="Home" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/jesusRoaLogo.svg" />
      </Head>

      <div className={style.container} theme={themeDisplayed}>
        <div className={style.overflow}>
          <m.div
            variants={variants}
            initial="close"
            animate={textAnimation ? "close" : "open"}
            transition={{
              type: "spring",
              duration: 0.6,
              delay: textAnimation ? 0.4 : 1,
            }}
            className={style.greeting}
            style={{
              fontSize:
                (isSmallerThan370 && "35px") || (isSmallerThan560 && "40px"),
              zIndex: themeDisplayed === "light" ? "var(--zIndexHome)" : 0,
              position: "relative",
            }}
          >
            <h1>Hey i'm&nbsp;</h1>
            <div
              className={style.nameWrapper}
              onMouseEnter={() => {
                isLargerThan770 && handleHoverText();
                handleHoverWave();
              }}
              onMouseLeave={() => {
                isLargerThan770 && handleHoverText();
                handleHoverWave();
              }}
            >
              <h1>JESUS ROA</h1>
              <div className={style.waveWrapper}>
                <div
                  className={classWave}
                  style={{ backgroundPositionX: position }}
                ></div>
              </div>
            </div>
          </m.div>
        </div>

        <div className={style.overflow}>
          <m.div
            variants={variants}
            initial="close"
            animate={textAnimation ? "close" : "open"}
            transition={{
              type: "spring",
              duration: 0.5,
              delay: textAnimation ? 0.3 : 0.9,
            }}
            className={style.greeting}
            style={{
              fontSize:
                (isSmallerThan370 && "35px") || (isSmallerThan560 && "40px"),
            }}
          >
            <h2>I build things for the web</h2>
          </m.div>
        </div>

        <div className={style.overflow}>
          <m.div
            variants={variants}
            initial="close"
            animate={textAnimation ? "close" : "open"}
            transition={{
              type: "spring",
              duration: 0.5,
              delay: textAnimation ? 0.2 : 0.8,
            }}
            className={style.degree}
            style={{
              fontSize: isSmallerThan560 && "25px",
              zIndex: themeDisplayed === "light" ? "var(--zIndexHome)" : 0,
              position: "relative",
            }}
          >
            <h3>Full stack&nbsp;</h3>
            <div
              className={style.nameWrapper}
              onMouseEnter={() => {
                isLargerThan770 && handleHoverText();
                handleHoverWave();
              }}
              onMouseLeave={() => {
                isLargerThan770 && handleHoverText();
                handleHoverWave();
              }}
            >
              <h3>WEB DEVELOPER</h3>
              <div className={style.waveWrapper}>
                <div
                  className={classWave}
                  style={{ backgroundPositionX: position }}
                ></div>
              </div>
            </div>
          </m.div>
        </div>
      </div>
    </>
  );
}

{
  /* <div className={`${style.container}`} theme={themeDisplayed}>
        <div className={style.greeting}>
          <h2
            className={`${style.text} ${style.textName}`}
            style={{
              transform: textAnimation ? "translateY(100%)" : "translateY(0)",
              transitionDelay: !textAnimation ? ".3s" : "0s",
              fontSize: isLargerThan520 ? "32px" : isLargerThan930 ? "40px" :  "inherit"
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
                  style={{ backgroundPositionX: position ,bottom: isLargerThan520 ? "15px": isLargerThan930 ? "20px" : "32px" }}
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
              fontSize: isLargerThan400 ? "24px" : isLargerThan520 ? "32px" : isLargerThan930 ? "40px" :  "inherit"
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
              fontSize: isLargerThan520 ? "18px" : isLargerThan930 ? "20px" :  "inherit"
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
                  className={classWaveTwo}
                  ref={referense}
                  style={{ backgroundPositionX: position  ,bottom: isLargerThan520 ? "8px": isLargerThan930 ? "10px" : "16px" }}
                ></div>
              </div>{" "}
            </div>{" "}
            &nbsp;full stack
          </div>
        </div>
      </div> */
}
