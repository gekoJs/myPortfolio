import style from "./Home.module.scss";
import { useMediaQuery } from "@chakra-ui/react";
import { motion as m } from "framer-motion";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { hoverCursor, showMenu } from "@/Redux/animateTrigger";

export default function Home(props) {
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
          <h1>H<div className={style.largeLetter}>e</div>y i'm&nbsp;</h1>
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
            <h1 className={style.homeName}>Jes<div className={style.largeLetter}>u</div>s R<div className={style.largeLetter}>o</div>a</h1>
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
          <h2>I buil<div className={style.largeLetter}>d</div> thi<div className={style.largeLetter}>n</div>gs for t<div className={style.largeLetter}>h</div>e web</h2>
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
          <h3>Ful<div className={style.largeLetter}>l</div> s<div className={style.largeLetter}>t</div>ack&nbsp;</h3>
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
            <h3 className={style.homeDegree}><div className={style.largeLetter_2}>W</div>EB D<div className={style.largeLetter}>E</div>VELO<div className={style.largeLetter}>P</div>ER</h3>
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
