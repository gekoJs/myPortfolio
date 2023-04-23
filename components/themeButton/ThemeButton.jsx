import Image from "next/image";
import { useEffect, useState } from "react";
import { useTheme } from "next-themes";

export default function ThemeButton() {
  const { systemTheme, theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);
  if (!mounted) null;

  const currentTheme = theme === "system" ? systemTheme : theme;
  const handleClick = () => {
    currentTheme === "light" ? setTheme("dark") : setTheme("light");
  };
  return (
    <div onClick={handleClick}>
      {currentTheme === "light" ? (
        <Image alt="a" src={"/svg/light-mode.svg"} width={40} height={40} />
      ) : (
        <Image alt="a" src={"/svg/dark-mode.svg"} width={40} height={40} />
      )}
    </div>
  );
}
