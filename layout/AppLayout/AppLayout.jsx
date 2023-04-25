import { Nav, Footer, Cursor } from "../../components/index";
import Noise from "@/styles/noise/Noise";
import { useSelector } from "react-redux";
import { useEffect, useState } from "react";
import style from "./AppLayout.module.scss";

export default function AppLayout({ children }) {
  const themeDisplayed = useSelector((state) => state.themeDisplayed.theme);

  const [dotPosition, setDotPosition] = useState({ x: 0, y: 0 });
  const cursorOnMove = (e) => {
    setDotPosition({ x: e.pageX, y: e.pageY });
  };

  const [dotLeave, setDotLeave] = useState(false);
  const dotOnMouseLeave = () => {
    setDotLeave(true);
  };
  const dotOnMouseEnter = () => {
    setDotLeave(false);
  };

  const [dotClick, setDotClick] = useState(false);
  const onClicHandler = () => {
    dotClick ? setDotClick(false) : setDotClick(true);
  };

  return (
    <div
      theme={themeDisplayed}
      onMouseMove={(e) => cursorOnMove(e)}
      onMouseLeave={dotOnMouseLeave}
      onMouseEnter={dotOnMouseEnter}
      onMouseDown={onClicHandler}
      onMouseUp={onClicHandler}
    >
      <Nav />
      {children}
      <Noise />
      <Cursor
        dotPosition={dotPosition}
        dotLeave={dotLeave}
        dotClick={dotClick}
      />
      <Footer />
    </div>
  );
}
