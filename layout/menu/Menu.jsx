import style from "./Menu.module.scss";
import { useDispatch, useSelector } from "react-redux";
import Link from "next/link";
import { hoverMenu, showMenu } from "@/Redux/animateTrigger";
import { useEffect, useState } from "react";
import { useMediaQuery } from "@chakra-ui/react";
import { motion as m } from "framer-motion";
export default function Menu() {
  const displayMenu = useSelector((state) => state.animations.menu);

  const dispatch = useDispatch();

  const menuLinks = [
    { name: "HOME", link: "/" },
    { name: "WORK", link: "/work" },
    { name: "ABOUT", link: "/about" },
    { name: "CONTACT", link: "/" },
  ];
  const [isLargerThan750] = useMediaQuery("(max-width: 750px)");
  const [isLargerThan450] = useMediaQuery("(max-width: 450px)");

  const variants = {
    open: { opacity: 1, y: "0" },
    close: { opacity: 0, y: "100%" },
  };

  return (
    <div
      className={style.container}
      style={{ pointerEvents: displayMenu ? "auto" : "none" }}
    >
      <ul>
        {menuLinks.map((e, i) => {
          return (
            <div className={`${style.divLi}`} key={i}>
              <li
                className={style.li}
                style={{ transform: isLargerThan450 && "translateY(0)" }}
              >
                <m.div
                  variants={variants}
                  initial="close"
                  animate={displayMenu ? "open" : "close"}
                  transition={{
                    type: "spring",
                    duration: 0.4,
                    delay: 0.1 * i,
                  }}
                  delay={2}
                  onClick={() => dispatch(showMenu(false))}
                  // style={{
                  //   transform: displayMenu
                  //     ? "translateY(0)"
                  //     : "translateY(110%)",
                  //   transitionDelay: displayMenu ? ".3s" : "0s",
                  // }}
                  onMouseEnter={() => dispatch(hoverMenu(true))}
                  onMouseLeave={() => dispatch(hoverMenu(false))}
                >
                  <Link href={e.link}>
                    <p
                      className={style.p}
                      style={{
                        fontSize: isLargerThan450
                          ? "46px"
                          : isLargerThan750 && "50px",
                      }}
                    >
                      <span
                        style={{
                          fontSize: isLargerThan450
                            ? "24px"
                            : isLargerThan750 && "32px",
                        }}
                      >
                        {`0${i + 1}`}{" "}
                      </span>
                      {e.name}
                    </p>
                  </Link>
                </m.div>
              </li>
            </div>
          );
        })}
      </ul>
    </div>
  );
}
