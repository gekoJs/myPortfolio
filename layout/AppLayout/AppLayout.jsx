import { Nav, Footer, Cursor, AnimatedPillar } from "../../components/index";
import { Menu } from "..";
import Noise from "@/styles/noise/Noise";
import { useSelector } from "react-redux";
import style from "./AppLayout.module.scss";
import { useEffect } from "react";

export default function AppLayout({ children }) {
  const themeDisplayed = useSelector((state) => state.animations.theme);
  useEffect(() => {
    const colors = [
      "#9CFF2E",
      "#0096FF",
      "#FBF46D",
      "#28FFBF",
      "#FF4848",
      "#7C83FD",
      "#41AEA9",
      "#EEEEEE",
    ];
    let interval = setInterval(() => {
      let randomNumber = Math.floor(Math.random() * 8);
      document.documentElement.style.setProperty(
        "--highlight",
        colors[randomNumber]
      );
    }, 4000);
    return () => clearInterval(interval);
  }, []);
  return (
    <div theme={themeDisplayed} className={style.container}>
      <div>
        <Nav />
        <Menu />
        {children}
        <Noise />
        <AnimatedPillar/>
        <Cursor />
      </div>
    </div>
  );
}
