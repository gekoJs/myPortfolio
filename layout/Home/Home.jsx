import style from "./Home.module.scss";
import { useMediaQuery } from "@chakra-ui/react";
import { motion as m } from "framer-motion";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { hoverCursor, showMenu } from "@/Redux/animateTrigger";

export default function Home() {
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
  const [isSmallerThan560] = useMediaQuery("(max-width: 560px)");
  const [isSmallerThan370] = useMediaQuery("(max-width: 370px)");
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
            fontSize:
              (isSmallerThan370 && "35px") || (isSmallerThan560 && "40px"),
            zIndex: themeDisplayed === "light" ? "var(--zIndexHome)" : 2,
            position: "relative",
          }}
        >
          <h1>Hey i'm&nbsp;</h1>
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
            <h1 className={style.homeName}>JESUS ROA</h1>
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
            zIndex: themeDisplayed === "light" ? "var(--zIndexHome)" : 2,
            position: "relative",
          }}
        >
          <h3>Full stack&nbsp;</h3>
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
            <h3 className={style.homeDegree}>WEB DEVELOPER</h3>
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
