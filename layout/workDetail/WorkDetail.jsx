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
            <div className={style.containerWrapper} style={{width: isSmaller700 && "90%"}}>
              <div
                className={style.imgMainContainer}
                style={{ height: isSmaller900 && "320px" }}
              >
                <Image src={mainImage} alt={title} fill={true} />
              </div>

              <div className={style.titleContainer}>
                <h1 style={{ color: bgColor }}>{title}</h1>
                <hr />
              </div>

              <div
                className={style.aboutPageContainer}
                style={{
                  gridTemplateColumns:
                    isSmaller620 && "repeat(auto-fit, minmax(320px, 1fr))",
                }}
              >
                <div className={style.aboutSection}>
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
                        <li className={style.aboutElementDesc}>
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
                </div>

                <div
                  className={`${style.aboutSection} ${style.aboutSectionDescrip}`}
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
                          fill={bgColor}
                        >
                          <path d="m248 810-42-42 412-412H240v-60h480v480h-60V398L248 810Z" />
                        </svg>
                        View the page
                      </div>
                      <hr />
                    </button>
                  </Link>
                </div>
              </div>

              {pageImages.map((e) => (
                <div className={style.pagesImages}>
                  <h3 style={{ color: bgColor }}>{e.pageTitle}</h3>
                  {e.images.map((img) => (
                    <div
                      className={style.pagesImg}
                      style={{
                        height:
                          (isSmaller700 && "280px") ||
                          (isSmaller900 && "350px"),
                      }}
                    >
                      <Image src={img} alt={e.pageTitle} fill={true} />
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
