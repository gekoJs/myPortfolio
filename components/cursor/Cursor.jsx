import style from "./Cursor.module.scss";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { useSelector } from "react-redux";
import { useMediaQuery } from "@chakra-ui/react";
export default function Cursor() {
  const [isLargerThan770] = useMediaQuery("(min-width: 770px)");

  const [dotPosition, setDotPosition] = useState({ x: "50%", y: "50%" });
  const [dotLeave, setDotLeave] = useState(true);
  const [dotClick, setDotClick] = useState(false);

  const isHoverLogo = useSelector((state) => state.animations.hoverButtonLogo);
  const isHoverMenu = useSelector((state) => state.animations.hoverButtonMenu);
  const isHoverTheme = useSelector(
    (state) => state.animations.hoverButtonTheme
  );
  const isHoverMenu2 = useSelector((state) => state.animations.hoverMenu);
  const isHoverWorkCard = useSelector(
    (state) => state.animations.hoverWorkCard
  );

  const isTrue =
    isHoverLogo ||
    isHoverMenu ||
    isHoverTheme ||
    isHoverMenu2 ||
    isHoverWorkCard;
  const changeClass =
    isHoverLogo ||
    isHoverMenu ||
    isHoverTheme ||
    isHoverMenu2 ||
    isHoverWorkCard
      ? `${style.cursor} ${style.hover}`
      : `${style.cursor}`;

  useEffect(() => {
    window.addEventListener("mousemove", (e) =>
      setDotPosition({ x: e.pageX, y: e.pageY })
    ),
      document
        .querySelector("body")
        .addEventListener("mouseenter", () => setDotLeave(false)),
      document
        .querySelector("body")
        .addEventListener("mouseleave", () => setDotLeave(true)),
      document
        .querySelector("body")
        .addEventListener("mousedown", () => setDotClick(true)),
      document
        .querySelector("body")
        .addEventListener("mouseup", () => setDotClick(false));
  }, []);

  return (
    <>
      {isLargerThan770 && (
        <>
          <div
            style={{
              top: dotPosition.y,
              left: dotPosition.x,
              opacity: dotLeave ? 0 : 1,
              padding: dotClick || isTrue ? "36px" : "12px",
            }}
            className={changeClass}
          ></div>
          <div
            style={{
              top: dotPosition.y,
              left: dotPosition.x,
              opacity: dotLeave ? 0 : 1,
              background: isTrue && "var(--fillHov)",
            }}
            className={style.dot}
          ></div>
        </>
      )}
    </>
  );
}
