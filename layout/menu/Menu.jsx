import style from "./Menu.module.scss";
import { useMediaQuery } from "@chakra-ui/react";
import { motion as m } from "framer-motion";
import { useDispatch, useSelector } from "react-redux";
import { hoverCursor, showMenu } from "@/Redux/animateTrigger";
import Link from "next/link";
import { useRouter } from "next/router";
import en from "../../data/locales/en/menu.json";
import es from "../../data/locales/es/menu.json";
export default function Menu() {
  const { locale, pathname } = useRouter();

  const lang = locale === "en" ? en : es;
  //----------------------------
  //----------------------------
  const dispatch = useDispatch();
  const displayMenu = useSelector((state) => state.animations.menu);
  //----------------------------
  //----------------------------
  const menuLinks = [
    { name: lang.home, link: "/" },
    { name: lang.work, link: "/work" },
    { name: lang.about, link: "/about" },
    { name: lang.contact, link: "/contact" },
  ];

  const variants = {
    open: { opacity: 1, y: "0" },
    close: { opacity: 0, y: "100%" },
  };
  //----------------------------
  //----------------------------
  const [isSmallerThan900] = useMediaQuery("(max-width: 900px)");
  const [isSmaller1000] = useMediaQuery("(max-width: 1000px)");
  const [isSmaller850] = useMediaQuery("(max-width: 850px)");
  const [isSmaller730] = useMediaQuery("(max-width: 730px)");
  const [isSmaller570] = useMediaQuery("(max-width: 570px)");
  const [isSmaller470] = useMediaQuery("(max-width: 470px)");
  const [isSmaller400] = useMediaQuery("(max-width: 400px)");
  //----------------------------
  //----------------------------
  return (
    <div
      className={style.container}
      style={{
        pointerEvents: displayMenu ? "auto" : "none",
        fontSize:
          (locale === "es" && isSmaller400 && "6.5px") ||
          (locale === "es" && isSmaller470 && "8px") ||
          (locale === "es" && isSmaller570 && "9px") ||
          (locale === "es" && isSmaller730 && "10px") ||
          (locale === "es" && isSmaller850 && "12px") ||
          (locale === "es" && isSmaller1000 && "14px"),
      }}
    >
      <ul
        style={{
          marginLeft:
            (isSmallerThan900 && "8%") ||
            (locale === "es" && "18%") ||
            (locale === "es" && isSmaller570 && "10%"),
        }}
      >
        {menuLinks.map((e, i) => {
          return (
            <div className={`${style.divLi}`} key={i}>
              <li className={style.li}>
                <m.div
                  variants={variants}
                  initial="close"
                  animate={displayMenu ? "open" : "close"}
                  transition={{
                    type: "spring",
                    duration: 0.4,
                    delay: 0.1 * i,
                  }}
                  onClick={()=>pathname === e.link && dispatch(showMenu(false))}
                  onMouseEnter={() => dispatch(hoverCursor(true))}
                  onMouseLeave={() => dispatch(hoverCursor(false))}
                  style={{ display: "flex" }}
                >
                  <Link href={e.link}>
                    <div className={style.p}>
                      <span className={`transitionColor ${style.number}`}>
                        {`0${i + 1}`}{" "}
                      </span>
                      {e.name.split("").map((letter, i) =>
                        letter === "H" ||
                        letter === "R" ||
                        letter === "B" ||
                        letter === "N" ? (
                          <div
                            className={style.largeLetter}
                            key={i}
                            style={{ transition: "color 1s ease" }}
                          >
                            {letter}
                          </div>
                        ) : (
                          letter
                        )
                      )}
                    </div>
                  </Link>
                  <span className={style.yourehere}>
                    {pathname === e.link && (
                      <p>
                        &nbsp;
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 245.33 192.05"
                          style={{
                            transition: "fill 1s ease",
                          }}
                        >
                          <title>Recurso 1</title>
                          <g id="Capa_2" data-name="Capa 2">
                            <g id="Capa_1-2" data-name="Capa 1">
                              <path d="M245.33,186c0,5.87-7.83,8.33-10.86,3.3a4.88,4.88,0,0,1-.52-1.14c-19.75-60.3-67.64-75.43-126.13-79.89a1.41,1.41,0,0,0-1.52,1.4v44.23a3,3,0,0,1-4.75,2.37L1.07,80.34a2.71,2.71,0,0,1,0-4.31L101,.5a2.48,2.48,0,0,1,4,1.87c.68,15.49,1.26,28.69,1.87,42.45a3.22,3.22,0,0,0,2.91,3.06c44.35,4.14,83.86,17.83,108.15,56.9,9,14.45,16.61,30.28,21.09,47,3.07,11.49,6.07,22.49,6.35,34.23Zm-147-87.72c46.75-.58,86.83,10.31,120.84,39.56a1.75,1.75,0,0,0,2.76-1.95c-21-56.19-65.72-77-123.9-78.65a2.49,2.49,0,0,1-2.43-2.48V21.54a2.13,2.13,0,0,0-3.41-1.69l-73.06,55a4.16,4.16,0,0,0,0,6.62L94,138a1.29,1.29,0,0,0,2.07-1V100.59A2.28,2.28,0,0,1,98.29,98.32Z" />
                            </g>
                          </g>
                        </svg>
                        &nbsp;&nbsp;{lang.here}
                      </p>
                    )}
                  </span>
                </m.div>
              </li>
            </div>
          );
        })}
      </ul>
    </div>
  );
}
