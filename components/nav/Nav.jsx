import MyLogo from "@/public/svg/jesusRoaLogo";
import Link from "next/link";
import style from "./Nav.module.scss";
import { BurguerMenu, ThemeButton } from "..";
import { useMediaQuery } from "@chakra-ui/react";
export default function Nav() {
  const [isLargerThan600] = useMediaQuery("(max-width: 600px)");
  const [isLargerThan990] = useMediaQuery("(max-width: 990px)");
  return (
    <header
      className={style.container}
      style={{ top: isLargerThan990 && "48px" }}
    >
      <nav style={{
        padding: isLargerThan990 && "0 40px"
      }}>
        <Link href={"/"}>
          <MyLogo />
        </Link>
        <div className={style.wrapper} style={{ gap: isLargerThan600 && "0" }}>
          <ThemeButton />
          <BurguerMenu />
        </div>
      </nav>
    </header>
  );
}
