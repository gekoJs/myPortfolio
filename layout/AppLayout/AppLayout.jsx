import { Nav, Footer, Cursor } from "../../components/index";
import { Menu } from "..";
import Noise from "@/styles/noise/Noise";
import { useSelector } from "react-redux";
import style from "./AppLayout.module.scss"

export default function AppLayout({ children }) {
  const themeDisplayed = useSelector((state) => state.animations.theme);

  return (
    <div theme={themeDisplayed}>
      <div>
        <Nav />
        <Menu />
        {children}
        {/* <Noise /> */}
        <Cursor />
        <Footer />
      </div>
    </div>
  );
}
