import Image from "next/image";
import { useEffect } from "react";
import { useTheme } from "next-themes";
import { useDispatch } from "react-redux";
import { changeTheme } from "@/Redux/animateTrigger";
import { useSelector } from "react-redux";

export default function ThemeButton() {
  const dispatch = useDispatch();
  const themeDisplayed = useSelector(state=> state.animations.theme)

  const { systemTheme, theme, setTheme } = useTheme();

  useEffect(() => {
    dispatch(changeTheme(theme === "system" ? systemTheme : theme));
  }, [theme]);
  
  const handleClick = () => {
    themeDisplayed === "light" ? setTheme("dark") : setTheme("light");
  };

  return (
    <div onClick={handleClick}>
      {themeDisplayed === "light" ? (
        <Image alt="a" src="/svg/light-mode.svg" width={28} height={28} />
      ) : (
        <Image alt="a" src="/svg/dark-mode.svg" width={28} height={28} />
      )}
    </div>
  );
}
