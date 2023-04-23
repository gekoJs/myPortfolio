import Image from "next/image";
import { useEffect, useState } from "react";
import { useTheme } from "next-themes";

export default function ThemeButton() {
  const { systemTheme, theme, setTheme } = useTheme();
  const [currentTheme, setCurrentTheme] = useState();
  // const [mounted, setMounted] = useState(false);

  useEffect(() => {
    // setMounted(true);
    setCurrentTheme(theme === "system" ? systemTheme : theme);
  }, [theme]);

  const handleClick = () => {
    currentTheme === "light" ? setTheme("dark") : setTheme("light");
  };

  // if (!mounted) null;


  return (
    <div onClick={handleClick}>
      {currentTheme === "light" ? (
        <Image alt="a" src="/svg/light-mode.svg" width={40} height={40} />
      ) : (
        <Image alt="a" src="/svg/dark-mode.svg" width={40} height={40} />
      )}
    </div>
  );
}
