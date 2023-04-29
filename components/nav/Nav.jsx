import MyLogo from "@/public/svg/jesusRoaLogo";
import Link from "next/link";
import style from "./Nav.module.scss";
import { BurguerMenu, ThemeButton } from "..";
import { useMediaQuery } from "@chakra-ui/react";
export default function Nav() {
  const [isLargerThan600] = useMediaQuery("(max-width: 600px)");
  return (
    <header className={style.container}>
      <nav>
        <Link href={"/"}>
          <MyLogo />
        </Link>
        <div className={style.wrapper} style ={{gap: isLargerThan600 && "0"}}>
          <ThemeButton />
          <BurguerMenu />
        </div>
      </nav>
    </header>
  );
}
