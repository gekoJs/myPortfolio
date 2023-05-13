import style from "./About.module.scss";
import { useMediaQuery } from "@chakra-ui/react";
import { motion as m } from "framer-motion";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { hoverCursor, showMenu } from "@/Redux/animateTrigger";
import { useRouter } from "next/router";
import tecnologiesData from "../../data/tecnologiesData.json";
import Image from "next/image";
import en from "../../data/locales/en/about.json";
import es from "../../data/locales/es/about.json";

export default function About() {
  const { locale } = useRouter();
  const lang = locale === "en" ? en : es;
  //-----------------------------
  //-----------------------------
  const dispatch = useDispatch();
  const isMenuOpen = useSelector((state) => state.animations.menu);
  //-----------------------------
  //-----------------------------
  useEffect(() => {
    dispatch(showMenu(false));
  }, []);
  //-----------------------------
  //-----------------------------
  const [isShorterThan1050] = useMediaQuery("(max-width: 1050px)");
  const [isShorterThan850] = useMediaQuery("(max-width: 850px)");
  const [isShorterThan700] = useMediaQuery("(max-width: 700px)");
  //-----------------------------
  //-----------------------------
  const variants = {
    openImgL: { y: "0", opacity: 1 },
    closeImgL: {
      opacity: 0,
      y: "100%",
      transition: {
        delay: 0.4,
        type: "spring",
      },
    },
    openImgR: { y: "0", opacity: 1 },
    closeImgR: {
      opacity: 0,
      y: "-100%",
      transition: {
        delay: 0.4,
        type: "spring",
      },
    },
    openAbout: {
      opacity: 1,
      x: "0",
    },
    closeAbout: {
      x: "-100%",
      opacity: 0,
      transition: {
        delay: 0.4,
        type: "spring",
      },
    },
    opacityOff: {
      opacity: 0,
    },
    opacityOn: {
      opacity: 1,
    },
  };
  //-----------------------------
  //-----------------------------
  return (
    <div
      className={style.container}
      style={{
        flexDirection: isShorterThan700 && "column",
      }}
    >
      <div
        className={style.overflow}
        style={{
          alignSelf: isShorterThan700 ? "center" : "flex-start",
          borderRadius: isShorterThan700 && "0 0 2em 2em",
        }}
      >
        <div className={style.imgContainer}>
          <m.div
            style={{ width: "50%" }}
            variants={variants}
            animate={isMenuOpen ? "closeImgL" : "openImgL"}
            initial="closeImgL"
            transition={{
              type: "spring",
              duration: 0.8,
              delay: isMenuOpen ? 0 : 0.4,
            }}
          >
            <div className={style.imgLeftContainer}>
              <Image src={"/png/AboutMeLeft.png"} fill={true} />
            </div>
          </m.div>

          <m.div
            style={{ width: "50%" }}
            variants={variants}
            animate={isMenuOpen ? "closeImgR" : "openImgR"}
            initial={"closeImgR"}
            transition={{
              type: "spring",
              duration: 0.8,
              delay: isMenuOpen ? 0 : 0.4,
            }}
          >
            <div className={style.imgRightContainer}>
              <Image src={"/png/AboutMeRight.png"} fill={true} />
            </div>
          </m.div>
        </div>
      </div>

      <div
        className={style.wrapper}
        style={{
          minWidth: isShorterThan1050 && "320px",
          padding:
            (isShorterThan850 && "20px") ||
            (isShorterThan850 && "0 20px 0 40px"),
          margin: isShorterThan700 && "20px 0",
        }}
      >
        <section className={style.contentWrapper}>
          <m.h1
            variants={variants}
            animate={isMenuOpen ? "closeAbout" : "openAbout"}
            initial={"closeAbout"}
            transition={{
              type: "spring",
              duration: 0.8,
              delay: isMenuOpen ? 0 : 0.4,
            }}
            className={style.title}
          >
            {lang.about}&nbsp;<span className="transitionColor">{lang.me}</span>
            <hr className={style.hr} />
          </m.h1>
          <m.p
            variants={variants}
            animate={isMenuOpen ? "opacityOff" : "opacityOn"}
            initial={"opacityOff"}
            transition={{
              type: "spring",
              duration: 0.8,
              delay: isMenuOpen ? 0 : 0.4,
            }}
            className={style.description}
            dangerouslySetInnerHTML={{ __html: lang.description }}
          />

          <m.a href={"/pdf/jesus_roa_resume.pdf"} target={"_blank"}
            className={style.resumeContainer}
            variants={variants}
            animate={isMenuOpen ? "opacityOff" : "opacityOn"}
            initial={"opacityOff"}
            transition={{
              type: "spring",
              duration: 0.8,
              delay: isMenuOpen ? 0 : 0.4,
            }}
            onMouseEnter={()=> dispatch(hoverCursor(true))}
            onMouseLeave={()=> dispatch(hoverCursor(false))}
          >
            <div className={style.resumeWrapper}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                height="48"
                viewBox="0 96 960 960"
                width="48"
              >
                <path d="m248 810-42-42 412-412H240v-60h480v480h-60V398L248 810Z" />
              </svg>
              <p>
                Resume
              </p>
            </div>
            <hr />
          </m.a>
        </section>

        <section
          className={style.tecnologiesContainer}
          style={{ overflow: "hidden" }}
        >
          <m.h2
            variants={variants}
            animate={isMenuOpen ? "closeAbout" : "openAbout"}
            initial="closeAbout"
            transition={{
              type: "spring",
              duration: 0.8,
              delay: isMenuOpen ? 0 : 0.4,
            }}
            className={style.titleTec}
          >
            {lang.tecnologies} <hr className={style.hr} />
          </m.h2>
          <div className={style.iconContainer}>
            {tecnologiesData.map((e, i) => {
              return (
                <m.div
                  variants={variants}
                  animate={isMenuOpen ? "opacityOff" : "opacityOn"}
                  initial={"opacityOff"}
                  transition={{
                    type: "spring",
                    duration: 0.8,
                    delay: isMenuOpen ? 0.2 : 0.6 + i * 0.1,
                  }}
                  className={style.iconWrapper}
                  key={i}
                  onMouseEnter={() => {
                    dispatch(hoverCursor(true));
                  }}
                  onMouseLeave={() => {
                    dispatch(hoverCursor(false));
                  }}
                >
                  <a href={e.link} target="_blank">
                    <img className={style.icon} src={e.icon} alt="" />
                  </a>
                </m.div>
              );
            })}
          </div>
        </section>
      </div>
    </div>
  );
}
