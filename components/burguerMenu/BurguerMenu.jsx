import style from "./BurguerMenu.module.scss";
import { useMediaQuery } from "@chakra-ui/react";
import { useDispatch, useSelector } from "react-redux";
import { hoverCursor, showMenu } from "@/Redux/animateTrigger";

export default function BurguerMenu() {
  //--------------------------------
  //--------------------------------
  const dispatch = useDispatch();
  const isClicked = useSelector((state) => state.animations.menu);
  const themeDisplayed = useSelector((state) => state.animations.theme);
  //--------------------------------
  //--------------------------------
  const [isLargerThan770] = useMediaQuery("(min-width: 770px)");
  //--------------------------------
  //--------------------------------
  const displayed =
    isClicked
      ? `${style.dot} ${style.dotHov} ${style.dotLeave}`
      : `${style.dot} ${style.dotHov}`;
  //--------------------------------
  //--------------------------------
  return (
    <div
      onMouseEnter={() => {
        isLargerThan770 && dispatch(hoverCursor(true));
      }}
      onMouseLeave={() => {
        isLargerThan770 && dispatch(hoverCursor(false));
      }}
      onClick={() => {
        isClicked === true
          ? dispatch(showMenu(false))
          : dispatch(showMenu(true));
      }}
      className={style.mainContainer}
      style={{
        padding: "20px",
        borderRadius: "100px",
        zIndex: themeDisplayed === "light" ? "var(--zIndexHome)" : 0,
      }}
    >
      <div className={style.container}>
        <div className={style.lineWrapper}>
          <div
            className={`${style.dot} ${style.dotHover}`}
            style={{
              width: isClicked ? "34px" : "inherit",
              transform: isClicked
                ? "translateY(11px) rotate(45deg)"
                : "rotate(0deg) translateY(0)",
            }}
          ></div>
          <div
            className={`${style.dot} ${style.dotHover}`}
            style={{ opacity: isClicked ? 0 : 1 }}
          ></div>
          <div
            className={`${style.dot} ${style.dotHover}`}
            style={{
              width: isClicked ? "34px" : "inherit",
              transform: isClicked
                ? "translateY(-11px) rotate(-45deg)"
                : "rotate(0deg) translateY(0)",
            }}
          ></div>
        </div>
        <div className={style.lineWrapper}>
          <div className={displayed}></div>
          <div className={displayed}></div>
          <div className={displayed}></div>
        </div>
        <div className={style.lineWrapper}>
          <div className={displayed}></div>
          <div className={displayed}></div>
          <div className={displayed}></div>
        </div>
      </div>
    </div>
  );
}
