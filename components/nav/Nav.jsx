import MyLogo from "@/public/svg/jesusRoaLogo";
import style from "./Nav.module.scss";
import { BurguerMenu, ThemeButton } from "..";
export default function Nav() {
  return (
    <header className={style.container}>
      <nav>
        <MyLogo />
        <div className={style.wrapper}>
          <ThemeButton />
          <BurguerMenu/>
        </div>
      </nav>
    </header>
  );
}
