import style from "./About.module.scss";
import { useMediaQuery } from "@chakra-ui/react";
import { motion as m } from "framer-motion";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { hoverCursor } from "@/Redux/animateTrigger";
import Image from "next/image";

export default function About() {
  //-----------------------------
  //-----------------------------
  const dispatch = useDispatch();
  const isMenuOpen = useSelector((state) => state.animations.menu);
  //-----------------------------
  //-----------------------------
  const tecnologies = [
    {
      name: "HTML",
      icon: "/svg/icons/html.svg",
      link: "https://developer.mozilla.org/es/docs/Web/HTML",
    },
    {
      name: "css",
      icon: "/svg/icons/css.svg",
      link: "https://developer.mozilla.org/es/docs/Web/CSS",
    },
    {
      name: "javaScript",
      icon: "/svg/icons/javaScript.svg",
      link: "https://developer.mozilla.org/es/docs/Web/JavaScript",
    },
    {
      name: "react",
      icon: "/svg/icons/react.svg",
      link: "https://es.react.dev/",
    },
    {
      name: "nodeJs",
      icon: "/svg/icons/nodeJs.svg",
      link: "https://nodejs.org/es",
    },
    {
      name: "postgreSQL",
      icon: "/svg/icons/postgreSQL.svg",
      link: "https://www.postgresql.org/",
    },
    {
      name: "reactQuery",
      icon: "/svg/icons/reactQuery.svg",
      link: "https://tanstack.com/query/v3/",
    },
    {
      name: "nextJs",
      icon: "/svg/icons/nextJs.svg",
      link: "https://nextjs.org/",
    },
    {
      name: "sass",
      icon: "/svg/icons/sass.svg",
      link: "https://sass-lang.com/",
    },
    {
      name: "typeScript",
      icon: "/svg/icons/typeScript.svg",
      link: "https://www.typescriptlang.org/",
    },
    {
      name: "github",
      icon: "/svg/icons/github.svg",
      link: "https://github.com/",
    },
  ];
  //-----------------------------
  //-----------------------------
  const [loader, setLoader] = useState(false);
  useEffect(() => {
    setLoader(true);
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
    closeImgL: { opacity: 0, y: "100%" },
    openImgR: { y: "0", opacity: 1 },
    closeImgR: { opacity: 0, y: "-100%" },
    openAbout: { x: "0" },
    closeAbout: { x: "-100%" },
    opacityOff: { opacity: 0 },
    opacityOn: { opacity: 1 },
  };
  //-----------------------------
  //-----------------------------
  return (
        <div
          className={style.container}
          style={{
            flexDirection: isShorterThan700 && "column",
            justifyContent: isShorterThan700 && "center",
            padding: isShorterThan700 && "20px",
          }}
        >
          <div
            style={{
              overflow: "hidden",
              alignSelf: isShorterThan700 ? "center" : "flex-start",
              borderRadius: isShorterThan700 && "12px",
              marginTop: isShorterThan700 && "140px",
              width: "100%",
              maxWidth: "500px",
              minWidth: "300px",
            }}
          >
            <div className={style.imgContainer}>
              <m.div
                variants={variants}
                animate={isMenuOpen ? "closeImgL" : "openImgL"}
                initial="openImgL"
                exit={"closeImgL"}
                transition={{
                  type: "spring",
                  duration: 0.8,
                  delay: isMenuOpen ? 0 : 0.4,
                }}
                style={{zIndex: 2}}
              >
                <img
                  className={`${style.imgLeft} ${style.img}`}
                  src="/png/AboutMeLeft.png"
                  alt=""
                />
              </m.div>
              <m.div
                variants={variants}
                animate={isMenuOpen ? "closeImgR" : "openImgR"}
                initial="openImgR"
                transition={{
                  type: "spring",
                  duration: 0.8,
                  delay: isMenuOpen ? 0 : 0.4,
                }}
                style={{zIndex: 2}}
              >
                <img
                  className={`${style.imgRight} ${style.img}`}
                  src="/png/AboutMeRight.png"
                  alt=""
                />
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
                initial="openAbout"
                transition={{
                  type: "spring",
                  duration: 0.8,
                  delay: isMenuOpen ? 0 : 0.4,
                }}
                className={style.title}
                style={{
                  fontSize: isShorterThan1050 && "40px",
                }}
              >
                ABOUT ME
                <hr className={style.hr} />
              </m.h1>
              <m.p
                variants={variants}
                animate={isMenuOpen ? "opacityOff" : "opacityOn"}
                initial="opacityOn"
                transition={{
                  type: "spring",
                  duration: 0.8,
                  delay: isMenuOpen ? 0 : 0.4,
                }}
                className={style.description}
                style={{
                  fontSize: isShorterThan1050 && "18px",
                }}
              >
                Hello! my name is Jesús Daniel Roa Morales, im a full Stack Web
                developer from Venezuela. I'm always curious to learn more when
                it comes to new technologies and creative coding
              </m.p>
            </section>

            <section
              className={style.tecnologiesContainer}
              style={{ overflow: "hidden" }}
            >
              <m.h2
                variants={variants}
                animate={isMenuOpen ? "closeAbout" : "openAbout"}
                initial="openAbout"
                transition={{
                  type: "spring",
                  duration: 0.8,
                  delay: isMenuOpen ? 0 : 0.4,
                }}
                className={style.titleTec}
              >
                TECNOLOGIES <hr className={style.hr} />
              </m.h2>
              <div className={style.iconContainer}>
                {tecnologies.map((e, i) => {
                  return (
                    <m.div
                      variants={variants}
                      animate={isMenuOpen ? "opacityOff" : "opacityOn"}
                      initial="opacityOn"
                      transition={{
                        type: "spring",
                        duration: 0.8,
                        delay: isMenuOpen ? 0 : i * 0.1,
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
