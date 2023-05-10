import Image from "next/image";
import style from "./Work.module.scss";
import { useDispatch, useSelector } from "react-redux";
import { hoverCursor, showMenu } from "@/Redux/animateTrigger";
import { useMediaQuery } from "@chakra-ui/react";
import { motion as m } from "framer-motion";
import { useEffect } from "react";
import Link from "next/link";
import worksData from "../../data/worksData.json";
//////////////////////////////////

export default function Work() {
  //----------------------------
  //----------------------------
  const dispatch = useDispatch();
  const isMenuOpen = useSelector((state) => state.animations.menu);
  useEffect(() => {
    dispatch(showMenu(false));
  }, []);
  //----------------------------
  //----------------------------
  const [isSmaller420] = useMediaQuery("(max-width: 420px)");
  //----------------------------
  //----------------------------
  const variants = {
    showCard: {
      opacity: 1,
      y: 0,
    },
    hideCard: {
      opacity: 0,
      y: "100%",
    },
    widthLarge: {
      opacity: 1,
      width: isSmaller420 && "calc(100% - 1em)" || "calc(100% - 2em)",
      transition: {
        type: "spring",
        delay: 0.6,
      },
    },
    widthNull: {
      width: "0",
    },
  };
  //----------------------------
  //----------------------------
  return (
    <main className={style.container}>
      <m.h1
        className={style.mainTitle}
        variants={variants}
        animate={isMenuOpen ? "widthNull" : "widthLarge"}
      >
        <div>
          WORK<label>S</label>
        </div>
        <hr />
      </m.h1>

      <div className={style.cardsContainer}>
        {worksData.map((e, i) => {
          return (
            <div className={style.overflow} key={i}>
              <Link href={`/work/${e.id}`}>
                <m.div
                  className={style.cardWrapper}
                  onMouseEnter={() => dispatch(hoverCursor(true))}
                  onMouseLeave={() => dispatch(hoverCursor(false))}
                  variants={variants}
                  animate={isMenuOpen ? "hideCard" : "showCard"}
                  initial={"showCard"}
                  exit={"hideCard"}
                  transition={{
                    type: "spring",
                    duration: 0.8,
                    delay: isMenuOpen ? 0 : 0.6 + i * 0.2,
                  }}
                >
                  <Image
                    src={e.mainImage}
                    alt={e.title}
                    className={style.img}
                    fill={true}
                  />
                  <div className={style.cardTitleWrapper}>
                    <h3 className={style.cardTitle}>{e.title}</h3>
                  </div>
                </m.div>
              </Link>
            </div>
          );
        })}
      </div>
    </main>
  );
}
