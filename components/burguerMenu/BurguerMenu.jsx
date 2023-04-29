import { hoverOnOffMenu, showMenu, showMenuOff } from "@/Redux/animateTrigger";
import style from "./BurguerMenu.module.scss";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { useState } from "react";
import { useMediaQuery } from "@chakra-ui/react";

export default function BurguerMenu() {
  const [isLargerThan770] = useMediaQuery("(min-width: 770px)");
  const dispatch = useDispatch();
  const isClicked = useSelector((state) => state.animations.menu);
  const isHover = useSelector((state) => state.animations.hoverButtonMenu);

  const lengthening =
    isHover && isLargerThan770
      ? `${style.dot} ${style.dotHover}`
      : `${style.dot}`;

  const displayed =
    (isLargerThan770 && isHover) || isClicked
      ? `${style.dot} ${style.dotLeave}`
      : `${style.dot}`;

  return (
    <div
      onMouseEnter={() => dispatch(hoverOnOffMenu(true))}
      onMouseLeave={() => dispatch(hoverOnOffMenu(false))}
      onClick={() => {
        isClicked === true
          ? dispatch(showMenu(false))
          : dispatch(showMenu(true));
      }}
      style={{ padding: "20px", borderRadius: "100px",  }}
    >
      <div className={style.container}>
        <div className={style.lineWrapper}>
          <div
            className={lengthening}
            style={{
              width: isClicked ? "34px" : "inherit",
              transform: isClicked
                ? "translateY(11px) rotate(45deg)"
                : "rotate(0deg) translateY(0)",
            }}
          ></div>
          <div
            className={lengthening}
            style={{ opacity: isClicked ? 0 : 1 }}
          ></div>
          <div
            className={lengthening}
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
