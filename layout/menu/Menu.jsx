import style from "./Menu.module.scss";
import { useDispatch, useSelector } from "react-redux";
import Link from "next/link";
import { hoverMenu, showMenu } from "@/Redux/animateTrigger";
import { useEffect, useState } from "react";
import { useMediaQuery } from "@chakra-ui/react";

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
  return (
    <div
      className={style.container}
      style={{ pointerEvents: displayMenu ? "auto" : "none" }}
    >
      <ul>
        {menuLinks.map((e, i) => {
          return (
            <div className={`${style.divLi} menu`} key={i}>
              <li className={style.li} style={{transform: isLargerThan450 && "translateY(0)"}}>
                <div
                  onClick={() => dispatch(showMenu(false))}
                  style={{
                    transform: displayMenu
                      ? "translateY(0)"
                      : "translateY(110%)",
                    transitionDelay: displayMenu ? ".3s" : "0s",
                  }}
                  onMouseEnter={() => dispatch(hoverMenu(true))}
                  onMouseLeave={() => dispatch(hoverMenu(false))}
                >
                  <Link href={e.link}>
                    <p
                      className={style.p}
                      style={{
                        fontSize: isLargerThan450
                          ? "36px"
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
                        {`0${i+1}`}{" "}
                      </span>
                      {e.name}
                    </p>
                  </Link>
                </div>
              </li>
            </div>
          );
        })}
      </ul>
    </div>
  );
}
