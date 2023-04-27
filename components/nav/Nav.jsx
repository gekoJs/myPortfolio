import MyLogo from "@/public/svg/jesusRoaLogo";
import Link from "next/link";
import style from "./Nav.module.scss";
import { BurguerMenu, ThemeButton } from "..";
export default function Nav() {
  return (
    <header className={style.container}>
      <nav>
        <Link href={"/"}>
          <MyLogo />
        </Link>
        <div className={style.wrapper}>
          <ThemeButton />
          <BurguerMenu />
        </div>
      </nav>
    </header>
  );
}
