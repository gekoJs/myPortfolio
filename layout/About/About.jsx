import Image from "next/image";
import style from "./About.module.scss";
import { useDispatch } from "react-redux";
import { hoverCursor } from "@/Redux/animateTrigger";
import { useMediaQuery } from "@chakra-ui/react";
export default function About() {
  const dispatch = useDispatch();
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

  const [isShorterThan1050] = useMediaQuery("(max-width: 1050px)");
  const [isShorterThan850] = useMediaQuery("(max-width: 850px)");
  const [isShorterThan700] = useMediaQuery("(max-width: 700px)");

  return (
    <div
      className={style.container}
      style={{
        flexDirection: isShorterThan700 && "column",
        justifyContent: isShorterThan700 && "center",
        padding: isShorterThan700 && "20px"
      }}
    >
      <div className={style.imgContainer} style={{
        alignSelf: isShorterThan700 && "center",
        borderRadius: isShorterThan700 && "12px",
        marginTop: isShorterThan700 && "140px",
      }}>
        <img
          // width={300}
          // height={300}
          className={`${style.imgLeft} ${style.img}`}
          src="/png/AboutMeLeft.png"
          alt=""
        />
        <img
          // width={300}
          // height={300}
          className={`${style.imgRight} ${style.img}`}
          src="/png/AboutMeRight.png"
          alt=""
        />
      </div>

      <div
        className={style.wrapper}
        style={{
          minWidth: isShorterThan1050 && "320px",
          padding: isShorterThan850 && "20px" || isShorterThan850 && "0 20px 0 40px",
          margin: isShorterThan700 && "20px 0"
        }}
      >
        <section className={style.contentWrapper}>
          <h1
            className={style.title}
            style={{
              fontSize: isShorterThan1050 && "40px",
            }}
          >
            ABOUT ME
            <hr className={style.hr} />
          </h1>
          <p
            className={style.description}
            style={{
              fontSize: isShorterThan1050 && "18px",
            }}
          >
            Hello! my name is Jesús Daniel Roa Morales, im a full Stack Web
            developer from Venezuela. I'm always curious to learn more when it
            comes to new technologies and creative coding
          </p>
        </section>

        <section className={style.tecnologiesContainer}>
          <h2 className={style.titleTec}>
            TECNOLOGIES <hr className={style.hr} />
          </h2>
          <div className={style.iconContainer}>
            {tecnologies.map((e, i) => {
              return (
                <div
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
                </div>
              );
            })}
          </div>
        </section>
      </div>
    </div>
  );
}
