import Image from "next/image";
import style from "./Work.module.scss";
import { useDispatch, useSelector } from "react-redux";
import { hoverCursor } from "@/Redux/animateTrigger";
import { useMediaQuery } from "@chakra-ui/react";
import { motion as m } from "framer-motion";

export default function Work() {
  const dispatch = useDispatch();
  const isMenuOpen = useSelector((state) => state.animations.menu);

  const works = [
    {
      name: "PI-Dogs",
      image:
        "https://ichef.bbci.co.uk/news/976/cpsprodpb/17638/production/_124800859_gettyimages-817514614.jpg",
      description:
        "El perro (Canis familiaris o Canis lupus familiaris, dependiendo de si se lo considera una especie por derecho propio o una subespecie del lobo llamado perro doméstico o can y en algunos lugares coloquialmente llamado chucho,5 tuso,6 choco,7 entre otros; es un mamífero carnívoro de la familia de los cánidos, que constituye una especie del género Canis.",
    },
    {
      name: "PI-Dogs",
      image:
        "https://ichef.bbci.co.uk/news/976/cpsprodpb/17638/production/_124800859_gettyimages-817514614.jpg",
      description:
        "El perro (Canis familiaris o Canis lupus familiaris, dependiendo de si se lo considera una especie por derecho propio o una subespecie del lobo llamado perro doméstico o can y en algunos lugares coloquialmente llamado chucho,5 tuso,6 choco,7 entre otros; es un mamífero carnívoro de la familia de los cánidos, que constituye una especie del género Canis.",
    },
    {
      name: "PI-Dogs",
      image:
        "https://ichef.bbci.co.uk/news/976/cpsprodpb/17638/production/_124800859_gettyimages-817514614.jpg",
      description:
        "El perro (Canis familiaris o Canis lupus familiaris, dependiendo de si se lo considera una especie por derecho propio o una subespecie del lobo llamado perro doméstico o can y en algunos lugares coloquialmente llamado chucho,5 tuso,6 choco,7 entre otros; es un mamífero carnívoro de la familia de los cánidos, que constituye una especie del género Canis.",
    },
  ];
  const [isSmallerThan570px] = useMediaQuery("(max-width: 570px)");
  const variants = {
    showCard: {
      opacity: 1,
      y: 0,
    },
    hideCard: {
      opacity: 0,
      y: "100%",
    },
  };
  return (
    <main className={style.mainContainer}>
      <div className={`${style.overflow} ${style.mainOverflow}`}>
        <m.div
          className={style.mainWrapper}
          variants={variants}
          animate={isMenuOpen ? {opacity: 0} : {opacity: 1}}
          initial={{opacity: 1}}
          exit={{opacity: 0}}
          transition={{
            type: "spring",
            duration: 0.4,
            delay: isMenuOpen ? 0.4 : 0.6,
          }}
        >
          <h1
            className={style.mainTitle}
            style={{ fontSize: isSmallerThan570px && "50px" }}
          >
            WORKS
          </h1>
          <div className={style.cardsContainer}>
            {works.map((e, i) => {
              return (
                <div className={style.overflow}>
                  <m.div
                    variants={variants}
                    animate={isMenuOpen ? "hideCard" : "showCard"}
                    initial={"showCard"}
                    exit={"hideCard"}
                    transition={{
                      type: "spring",
                      duration: 0.8,
                      delay: isMenuOpen ? 0 : i * 0.4,
                    }}
                    onMouseEnter={() => dispatch(hoverCursor(true))}
                    onMouseLeave={() => dispatch(hoverCursor(false))}
                    className={style.cardWrapper}
                    key={i}
                  >
                    <img src={e.image} alt={e.name} className={style.img} />
                    <div className={style.cardTitleWrapper}>
                      <h3
                        className={style.cardTitle}
                        style={{ fontSize: isSmallerThan570px && "28px" }}
                      >
                        {e.name}
                      </h3>
                    </div>
                  </m.div>
                </div>
              );
            })}
          </div>
        </m.div>
      </div>
    </main>
  );
}
