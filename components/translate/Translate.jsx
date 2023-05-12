import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import style from "./Translate.module.scss";
import Link from "next/link";
import { useDispatch } from "react-redux";
import { hoverCursor } from "@/Redux/animateTrigger";

export default function Translate() {
  const dispatch = useDispatch();
  const { locale, locales, pathname } = useRouter();
  const [lang, setLang] = useState(locale);
  useEffect(() => {
    lang === "en" ? setLang("es") : setLang("en");
  }, []);
  const handleClick = () => {
    lang === "en" ? setLang("es") : setLang("en");
  };
  const p = lang;
  return (
    <div
      className={style.container}
      onClick={handleClick}
      onMouseEnter={()=>dispatch(hoverCursor(true))}
      onMouseLeave={()=>dispatch(hoverCursor(false))}
    >
      <Link href={pathname} locale={lang}>
        <p>{lang.toUpperCase()}</p>
      </Link>
    </div>
  );
}
