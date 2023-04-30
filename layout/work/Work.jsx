import Image from "next/image";
import style from "./Work.module.scss";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { hoverWorkCard } from "@/Redux/animateTrigger";
export default function Work() {
  const dispatch = useDispatch();
  const textAnimation = useSelector((state) => state.animations.menu);

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

  return (
    <div className={style.container}>
      <h1 className={style.title}>My Works</h1>
      <div className={style.cardContainer}>
        {works.map((e, i) => {
          return (
            <div className={style.containerTwo}>
              <div
                key={i}
                className={style.cardWraper}
                onMouseEnter={() => dispatch(hoverWorkCard(true))}
                onMouseLeave={() => dispatch(hoverWorkCard(false))}
                style={{
                  transform: textAnimation
                    ? "translateY(100%)"
                    : "translateY(0)",
                  transitionDelay: !textAnimation ? `${i*.1}s` : "0s",
                }}
              >
                <div className={style.imgWrapper}>
                  <Image src={e.image} fill style={{ objectFit: "cover" }} />
                </div>
                <div className={style.contentWrapper}>
                  <h3>{e.name}</h3>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
