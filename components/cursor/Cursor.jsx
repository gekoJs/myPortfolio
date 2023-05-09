import style from "./Cursor.module.scss";
import { useMediaQuery } from "@chakra-ui/react";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { changePosition } from "@/Redux/animateTrigger";
//******************************************************
//******************************************************

export default function Cursor() {
  //---------------------------
  //---------------------------
  const dispatch = useDispatch();
  const hoverCursor = useSelector((state) => state.animations.hoverCursor);

  const [dotPosition, setDotPosition] = useState({ x: "50%", y: "50%" });
  const [dotLeave, setDotLeave] = useState(true);
  const [dotClick, setDotClick] = useState(false);
  //---------------------------
  //---------------------------
  useEffect(() => {
    window.addEventListener("mousemove", (e) => {
      setDotPosition({ x: e.pageX, y: e.pageY });
      setDotLeave(false);
    }),
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

  useEffect(() => {
    dispatch(changePosition(dotPosition));
  }, [dotPosition]);
  //---------------------------
  //---------------------------
  const changeClass = hoverCursor
    ? `${style.cursor} ${style.hover}`
    : `${style.cursor}`;
  //---------------------------
  //---------------------------
  const [isLargerThan770] = useMediaQuery("(min-width: 770px)");
  //---------------------------
  //---------------------------
  return (
    <>
      {isLargerThan770 && (
        <>
          <div
            style={{
              top: dotPosition.y,
              left: dotPosition.x,
              opacity: dotLeave ? 0 : 1,
              padding: dotClick && "36px",
            }}
            className={changeClass}
          ></div>
          <div
            style={{
              top: dotPosition.y,
              left: dotPosition.x,
              opacity: dotLeave ? 0 : 1,
              background: hoverCursor && "var(--fillHov)",
            }}
            className={style.dot}
          ></div>
        </>
      )}
    </>
  );
}
