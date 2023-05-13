import MyLogo from "@/public/svg/jesusRoaLogo";
import Link from "next/link";
import style from "./Nav.module.scss";
import { BurguerMenu, ThemeButton, Translate, BackButton } from "..";
import { useMediaQuery } from "@chakra-ui/react";
import { motion as m } from "framer-motion";
import { useSelector } from "react-redux";
import { useRouter } from "next/router";

export default function Nav() {
  const { locale, locales, pathname } = useRouter();
  const [isLargerThan600] = useMediaQuery("(max-width: 600px)");
  const [isLargerThan990] = useMediaQuery("(max-width: 990px)");
  const isMenuOpen = useSelector((state) => state.animations.menu);
  const variants = {
    toTop: {
      y: "-100%",
      opacity: 0,
      transition: {
        duration: isMenuOpen ? 0.2 : 0.6,
        type: "spring",
      },
    },
    toBottom: {
      y: "0",
      opacity: 1,
      transition: {
        duration: isMenuOpen ? 0.2 : 0.6,
        type: "spring",
      },
    },
  };
  console.log(pathname);
  return (
    <header
      className={style.container}
      style={{
        top: isLargerThan990 && "48px",
        // mixBlendMode: "difference", //just works with the container father
      }}
    >
      <nav>
        <m.div
          className={style.logo}
          variants={variants}
          animate={isMenuOpen ? "toTop" : "toBottom"}
          initial={"toTop"}
        >
          <Link href={"/"}>
            <MyLogo />
          </Link>
          {pathname === `/work/[idWork]` && <BackButton />}
        </m.div>
        <div className={style.wrapper} style={{ gap: isLargerThan600 && "0" }}>
          <m.div
            variants={variants}
            animate={isMenuOpen ? "toTop" : "toBottom"}
            initial={"toTop"}
          >
            <Translate />
          </m.div>

          <m.div
            variants={variants}
            animate={isMenuOpen ? "toTop" : "toBottom"}
            initial={"toTop"}
          >
            <ThemeButton />
          </m.div>
          <BurguerMenu />
        </div>
      </nav>
    </header>
  );
}
