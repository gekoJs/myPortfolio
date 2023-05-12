import style from "./Home.module.scss";
import { useMediaQuery } from "@chakra-ui/react";
import { motion as m } from "framer-motion";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { hoverCursor, showMenu } from "@/Redux/animateTrigger";
import { useRouter } from "next/router";
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
          <h1>
            {t.greeting_1.h}
            <div className={style.largeLetter}>{t.greeting_1.e}</div>
            {t.greeting_1.y} {t.greeting_1.im}&nbsp;
          </h1>
          <div
            className={style.nameWrapper}
            onMouseEnter={() => {
              isLargerThan770 && dispatch(hoverCursor(true));
              handleHoverWave();
            }}
            onMouseLeave={() => {
              isLargerThan770 && dispatch(hoverCursor(false));
              handleHoverWave();
            }}
          >
            <h1 className={style.homeName}>
              {t.greeting_1_name.jes}
              <div className={style.largeLetter}>{t.greeting_1_name.u}</div>
              {t.greeting_1_name.s} {t.greeting_1_name.r}
              <div className={style.largeLetter}>{t.greeting_1_name.o}</div>
              {t.greeting_1_name.a}
            </h1>
            <div className={style.waveWrapper}>
              <div
                className={classWave}
                style={{ backgroundPositionX: position }}
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
          <h2>
            {t.greeting_2.i_buil}<div className={style.largeLetter}>{t.greeting_2.d}</div> {t.greeting_2.thi}
            <div className={style.largeLetter}>{t.greeting_2.n}</div>{t.greeting_2.gs} {t.greeting_2.for_t}
            <div className={style.largeLetter}>{t.greeting_2.h}</div>{t.greeting_2.e} {t.greeting_2.web}
          </h2>
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
          <h3>
            {t.degree.ful}<div className={style.largeLetter}>{t.degree.l}</div> {t.degree.s}
            <div className={style.largeLetter}>{t.degree.t}</div>{t.degree.ack}&nbsp;
          </h3>
          <div
            className={style.nameWrapper}
            onMouseEnter={() => {
              isLargerThan770 && dispatch(hoverCursor(true));
              handleHoverWave();
            }}
            onMouseLeave={() => {
              isLargerThan770 && dispatch(hoverCursor(false));
              handleHoverWave();
            }}
          >
            <h3 className={style.homeDegree}>
              <div className={style.largeLetter_2}>{t.degree.w}</div>{t.degree.eb_d}
              <div className={style.largeLetter}>{t.degree.e}</div>{t.degree.velo}
              <div className={style.largeLetter}>{t.degree.p}</div>{t.degree.er}
            </h3>
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
  );
}
