import MyLogo from "@/public/svg/jesusRoaLogo";
import Link from "next/link";
import style from "./Nav.module.scss";
import { BurguerMenu, ThemeButton, Translate } from "..";
import { useMediaQuery } from "@chakra-ui/react";
import { motion as m } from "framer-motion";
import { useSelector } from "react-redux";
import { useRouter } from "next/router";

export default function Nav() {
  const {locale, locales, pathname} = useRouter()
  const [isLargerThan600] = useMediaQuery("(max-width: 600px)");
  const [isLargerThan990] = useMediaQuery("(max-width: 990px)");
  const isMenuOpen = useSelector((state) => state.animations.menu);
  const variants = {
    toTop: {
      opacity: 0,
      y: "-100%",
      transition: {
        duration: 0.6,
        type: "spring",
      },
    },
    toBottom: {
      opacity: 1,
      y: "0",
      transition: {
        duration: 0.6,
        type: "spring",
      },
    },
  };
  return (
    <header
      className={style.container}
      style={{ top: isLargerThan990 && "48px", mixBlendMode: "difference" }}
    >
      <nav
        style={{
          mixBlendMode: "difference",
        }}
      >
        <m.div
          className={style.logo}
          variants={variants}
          animate={isMenuOpen ? "toTop" : "toBottom"}
        >
          <Link href={"/"}>
            <MyLogo />
          </Link>
        </m.div>
        <div className={style.wrapper} style={{ gap: isLargerThan600 && "0" }}>

          <Translate/>

          <m.div
            variants={variants}
            animate={isMenuOpen ? "toTop" : "toBottom"}
          >
            <ThemeButton/>
          </m.div>
          <BurguerMenu />
        </div>
      </nav>
    </header>
  );
}
