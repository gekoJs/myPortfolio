import { useRouter } from "next/router";
import Head from "next/head";
import worksData from "../../data/worksData.json";
import style from "./WorkDetail.module.scss";
import Link from "next/link";
import Image from "next/image";
import { motion as m } from "framer-motion";
import { useDispatch, useSelector } from "react-redux";
import { hoverCursor } from "@/Redux/animateTrigger";
import { useMediaQuery } from "@chakra-ui/react";

export default function DetailWork() {
  const dispatch = useDispatch();
  const position = useSelector((state) => state.animations.position);
  const menuOpen = useSelector((state) => state.animations.menu);
  const route = useRouter();
  const { idWork } = route.query;
  const work = worksData.filter((e) => e.id === parseInt(idWork));
  const {
    id,
    title,
    mainImage,
    year,
    team,
    client,
    url,
    pageImages,
    description,
    bgColor,
  } = work[0] || {};

  const [isSmaller900] = useMediaQuery("(max-width: 900px)");
  const [isSmaller700] = useMediaQuery("(max-width: 700px)");
  const [isSmaller620] = useMediaQuery("(max-width: 620px)");
  const [isSmaller500] = useMediaQuery("(max-width: 500px)");

  const variants = {
    toBottom: {
      opacity: 1,
      y: "-3%",
      transition: {
        type: "spring",
        duration: 0.6,
        delay: 0.6,
      },
    },
    toTop: {
      opacity: 0,
      y: "-100%",
      transition: {
        type: "spring",
        duration: 0.6,
        delay: 0.2,
      },
    },
    toLeft: {
      opacity: 0,
      x: "-100%",
      transition: {
        type: "spring",
        duration: 0.6,
        delay: 0.2,
      },
    },
    toRight: {
      opacity: 1,
      x: "0",
      transition: {
        type: "spring",
        duration: 0.6,
        delay: 0.6,
      },
    },
    toLeftInitial: {
      opacity: 1,
      x: "0",
      transition: {
        type: "spring",
        duration: 0.6,
        delay: 0.6,
      },
    },
    toRightInitial: {
      opacity: 0,
      x: "100%",
      transition: {
        type: "spring",
        duration: 0.6,
        delay: 0.2,
      },
    },
    opacityOn: {
      opacity: 0,
      transition: {
        duration: 0.6,
        delay: 0.3,
      },
    },
    opacityOff: {
      opacity: 1,
      transition: {
        duration: 0.6,
        delay: 0.8,
      },
    },
  };
  return (
    <>
      <Head>
        <title>Jesús Roa{title && ` | ${title}`}</title>
        <meta name="description" content={`description of ${title} work`} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/jesusRoaLogo.svg" />
      </Head>

      <main className={style.container}>
        {!!!work.length ? (
          <h1>ERROR</h1>
        ) : (
          <>
            <div className={style.background}>
              <div
                style={{
                  backgroundColor: bgColor,
                  transform: `rotate(50deg) translateX(${position.x / 20}px)`,
                }}
              ></div>
            </div>
            <div
              className={style.containerWrapper}
              style={{ width: isSmaller700 && "90%" }}
            >
              <div className={style.overflow}>
                <m.div
                  className={style.imgMainContainer}
                  style={{
                    height:
                      (isSmaller500 && "240px") || (isSmaller900 && "320px"),
                  }}
                  variants={variants}
                  animate={menuOpen ? "toTop" : "toBottom"}
                  initial={"toTop"}
                >
                  <Image src={mainImage} alt={title} fill={true} />
                </m.div>
              </div>

              <div className={style.titleContainer}>
                <m.h1
                  style={{ color: bgColor }}
                  variants={variants}
                  animate={menuOpen ? "opacityOn" : "opacityOff"}
                >
                  {title}
                </m.h1>
                <m.hr
                  variants={variants}
                  animate={menuOpen ? "toLeft" : "toRight"}
                  initial={"toRight"}
                />
              </div>

              <div
                className={style.aboutPageContainer}
                style={{
                  gridTemplateColumns:
                    isSmaller620 && "repeat(auto-fit, minmax(320px, 1fr))",
                }}
              >
                <div className={style.overflow}>
                  <m.div
                    className={style.aboutSection}
                    variants={variants}
                    animate={menuOpen ? "toLeft" : "toRight"}
                    initial={"toRight"}
                  >
                    <div className={style.aboutElement}>
                      <p
                        className={`${style.aboutElementTitle} ${
                          isSmaller620 && style.aboutElementTitle620
                        }`}
                        style={{ color: bgColor }}
                      >
                        Year
                      </p>
                      <p className={style.aboutElementDesc}>{year}</p>
                    </div>

                    <div className={style.aboutElement}>
                      <h2
                        className={`${style.aboutElementTitle} ${
                          isSmaller620 && style.aboutElementTitle620
                        }`}
                        style={{ color: bgColor }}
                      >
                        Team
                      </h2>
                      <ul>
                        {team.map((e, i) => (
                          <li
                            className={`${style.aboutElementDesc} ${style.aboutElementDesc_2}`}
                          >
                            {i + 1}. {e}
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className={style.aboutElement}>
                      <p
                        className={`${style.aboutElementTitle} ${
                          isSmaller620 && style.aboutElementTitle620
                        }`}
                        style={{ color: bgColor }}
                      >
                        Client
                      </p>
                      <p className={style.aboutElementDesc}>{client}</p>
                    </div>
                  </m.div>
                </div>

                <div className={style.overflow}>
                  <m.div
                    className={`${style.aboutSection} ${style.aboutSectionDescrip}`}
                    variants={variants}
                    animate={menuOpen ? "toRightInitial" : "toLeftInitial"}
                    initial={"toRightInitial"}
                  >
                    <p>{description}</p>
                    <Link href={url}>
                      <button
                        onMouseEnter={() => dispatch(hoverCursor(true))}
                        onMouseLeave={() => dispatch(hoverCursor(false))}
                        className={style.button}
                        style={{ color: bgColor }}
                      >
                        <div>
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            height="48"
                            viewBox="0 96 960 960"
                            width="48"
                            fill={"var(--highlight)"}
                          >
                            <path d="m248 810-42-42 412-412H240v-60h480v480h-60V398L248 810Z" />
                          </svg>
                          View the page
                        </div>
                        <hr />
                      </button>
                    </Link>
                  </m.div>
                </div>
              </div>

              {pageImages.map((e) => (
                <div className={style.pagesImages}>
                  <m.h3
                    style={{ color: bgColor }}
                    variants={variants}
                    animate={menuOpen ? "opacityOn" : "opacityOff"}
                    initial={"opacityOff"}
                  >
                    {e.pageTitle}
                  </m.h3>
                  {e.images.map((img, i) => (
                    <div
                      className={style.overflow}
                      style={{
                        width: "100%",
                        maxWidth: "800px",
                      }}
                    >
                      <m.div
                        className={style.pagesImg}
                        style={{
                          height:
                            (isSmaller700 && "280px") ||
                            (isSmaller900 && "350px"),
                        }}
                        variants={variants}
                        animate={
                          menuOpen
                            ? i % 2 === 0
                              ? "toRightInitial"
                              : "toLeft"
                            : i % 2 === 0
                            ? "toLeftInitial"
                            : "toRight"
                        }
                      >
                        <Image src={img} alt={e.pageTitle} fill={true} />
                      </m.div>
                    </div>
                  ))}
                </div>
              ))}
            </div>
          </>
        )}
      </main>
    </>
  );
}
