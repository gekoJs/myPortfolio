import MyLogo from "@/public/svg/jesusRoaLogo";
import ThemeButton from "../themeButton/ThemeButton";
import style from "./Nav.module.scss";
export default function Nav({changeHover}) {
  return (
    <header className={style.container}>
      <nav>
        <MyLogo changeHover={changeHover}/>
        <ThemeButton/>
      </nav>
    </header>
  );
}
