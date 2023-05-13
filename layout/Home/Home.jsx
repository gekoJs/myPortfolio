import style from "./Home.module.scss";
import { transition, useMediaQuery } from "@chakra-ui/react";
import { motion as m } from "framer-motion";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { hoverCursor, showMenu } from "@/Redux/animateTrigger";
import { useRouter } from "next/router";
import Link from "next/link";
import en from "../../data/locales/en/home.json";
import es from "../../data/locales/es/home.json";
export default function Home() {
  const { locale } = useRouter();
  const t = locale === "en" ? en : es;
  //--------------------------
  //--------------------------
  const dispatch = useDispatch();
  const textAnimation = useSelector((state) => state.animations.menu);
  const themeDisplayed = useSelector((state) => state.animations.theme);
  //--------------------------
  //--------------------------
  const [isHoverWave1, setIsHoverWave1] = useState(false);
  const [isHoverWave2, setIsHoverWave2] = useState(false);
  const [position1, setPosition1] = useState(0);
  const [position2, setPosition2] = useState(0);

  const handleHoverWave1 = () => setIsHoverWave1(!isHoverWave1);
  const handleHoverWave2 = () => setIsHoverWave2(!isHoverWave2);

  useEffect(() => {
    let intervalId;
    if (isHoverWave1) {
      intervalId = setInterval(() => {
        setPosition1((prev) => prev + 1);
      }, 10);
      return () => clearInterval(intervalId);
    }
    if (isHoverWave2) {
      intervalId = setInterval(() => {
        setPosition2((prev) => prev + 1);
      }, 10);
      return () => clearInterval(intervalId);
    }
  }, [isHoverWave1, isHoverWave2]);
  useEffect(() => {
    dispatch(showMenu(false));
  }, []);
  //--------------------------
  //--------------------------
  const [isLargerThan770] = useMediaQuery("(min-width: 770px)");
  //--------------------------
  //--------------------------
  const classWave =
    themeDisplayed == "light" ? `${style.waveLight}` : `${style.wave}`;
  //--------------------------
  //--------------------------
  const variants = {
    open: { opacity: 1, y: "0" },
    close: { opacity: 0, y: "100%" },
    openWidth: {
      opacity: 1,
      x: "0",
      transition: {
        delay: 0.8,
        type: "spring",
      },
    },
    offWidth: {
      opacity: 0,
      x: "-50%",
      transition: {
        delay: 0.4,
        type: "spring",
      },
    },
    offWidthR: {
      opacity: 0,
      x: "50%",
      transition: {
        delay: 0.4,
        type: "spring",
      },
    },
  };
  //--------------------------
  //--------------------------

  return (
    <div className={style.container} theme={themeDisplayed}>
      <div className={style.overflow}>
        <m.div
          variants={variants}
          animate={textAnimation ? "close" : "open"}
          initial="close"
          transition={{
            type: "spring",
            duration: 0.6,
            delay: textAnimation ? 0.4 : 1,
          }}
          className={style.greeting}
          style={{
            zIndex: themeDisplayed === "light" ? "var(--zIndexHome)" : 2,
            position: "relative",
          }}
        >
          <h1>{t.greeting_1}&nbsp;</h1>
          <div
            className={style.nameWrapper}
            onMouseEnter={() => {
              isLargerThan770 && dispatch(hoverCursor(true));
              handleHoverWave1();
            }}
            onMouseLeave={() => {
              isLargerThan770 && dispatch(hoverCursor(false));
              handleHoverWave1();
            }}
          >
            <h1 className={`transitionColor ${style.homeName}`}>
              {t.greeting_1_name}
            </h1>
            <div className={style.waveWrapper}>
              <div
                className={classWave}
                style={{ backgroundPositionX: position1 }}
              ></div>
            </div>
          </div>
        </m.div>
      </div>

      <div className={style.overflow} style={{ zIndex: 2 }}>
        <m.div
          variants={variants}
          initial="close"
          animate={textAnimation ? "close" : "open"}
          transition={{
            type: "spring",
            duration: 0.5,
            delay: textAnimation ? 0.3 : 0.9,
          }}
          className={`${style.greeting} ${style.greeting_2}`}
        >
          <h2>{t.greeting_2}</h2>
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
            zIndex: themeDisplayed === "light" ? "var(--zIndexHome)" : 2,
            position: "relative",
          }}
        >
          <h3>{t.degree._1}&nbsp;</h3>
          <div
            className={style.nameWrapper}
            onMouseEnter={() => {
              isLargerThan770 && dispatch(hoverCursor(true));
              handleHoverWave2();
            }}
            onMouseLeave={() => {
              isLargerThan770 && dispatch(hoverCursor(false));
              handleHoverWave2();
            }}
          >
            <h3 className={`transitionColor ${style.homeDegree}`}>
              {t.degree._2}
            </h3>
            <div className={style.waveWrapper}>
              <div
                className={classWave}
                style={{ backgroundPositionX: position2 }}
              ></div>
            </div>
          </div>
        </m.div>
      </div>

      <div
        className={style.links}
        style={{
          zIndex: themeDisplayed === "light" ? "var(--zIndexHome)" : 2,
          position: "relative",
        }}
      >
        <div className={style.link}>
          <Link href={"/about"}>
            <m.div
              className={style.link}
              variants={variants}
              animate={textAnimation ? "offWidth" : "openWidth"}
              initial={"offWidth"}
              onMouseEnter={() => dispatch(hoverCursor(true))}
              onMouseLeave={() => dispatch(hoverCursor(false))}
            >
              <p>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  height="48"
                  viewBox="0 96 960 960"
                  width="48"
                >
                  <path d="m248 810-42-42 412-412H240v-60h480v480h-60V398L248 810Z" />
                </svg>
                {t.link_1}
              </p>
              <hr />
            </m.div>
          </Link>
        </div>

        <div className={style.link}>
          <Link href={"/work"}>
            <m.div
              variants={variants}
              animate={textAnimation ? "offWidthR" : "openWidth"}
              initial={"offWidthR"}
              onMouseEnter={() => dispatch(hoverCursor(true))}
              onMouseLeave={() => dispatch(hoverCursor(false))}
            >
              <p>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  height="48"
                  viewBox="0 96 960 960"
                  width="48"
                >
                  <path d="m248 810-42-42 412-412H240v-60h480v480h-60V398L248 810Z" />
                </svg>
                {t.link_2}
              </p>
              <hr />
            </m.div>
          </Link>
        </div>
      </div>
    </div>
  );
}
