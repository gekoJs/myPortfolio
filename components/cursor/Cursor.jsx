import style from "./Cursor.module.scss";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";

export default function Cursor() {
  const [dotPosition, setDotPosition] = useState({ x: 0, y: 0 });
  const [dotLeave, setDotLeave] = useState(false);
  const [dotClick, setDotClick] = useState(false);
  
  useEffect(() => {
    window.addEventListener("mousemove", (e) =>
      setDotPosition({ x: e.pageX, y: e.pageY })
    );
    document
      .querySelector("body")
      .addEventListener("mouseenter", () => setDotLeave(false));

    document
      .querySelector("body")
      .addEventListener("mouseleave", () => setDotLeave(true));

    document
      .querySelector("body")
      .addEventListener("mousedown", () => setDotClick(true));

    document
      .querySelector("body")
      .addEventListener("mouseup", () => setDotClick(false));
  }, []);

  return (
    <>
      <div
        style={{
          top: dotPosition.y,
          left: dotPosition.x,
          opacity: dotLeave ? 0 : 1,
          padding: dotClick ? "26px" : "12px",
        }}
        className={style.cursor}
      ></div>
      <div
        style={{
          top: dotPosition.y,
          left: dotPosition.x,
          opacity: dotLeave ? 0 : 1,
        }}
        className={style.dot}
      ></div>
    </>
  );
}
