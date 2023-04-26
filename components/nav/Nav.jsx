import MyLogo from "@/public/svg/jesusRoaLogo";
import ThemeButton from "../themeButton/ThemeButton";
import style from "./Nav.module.scss";

export default function Nav() {
  return (
    <header className={style.container}>
      <nav>
        <MyLogo />
        <ThemeButton/>
      </nav>
    </header>
  );
}
