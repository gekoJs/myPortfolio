import { useSelector } from "react-redux";
import style from "./AnimatedPillar.module.scss";
import { useState } from "react";
import { useMediaQuery } from "@chakra-ui/react";
export default function AnimatedPillar() {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const handleMouseMove = (e) => {
    setPosition({ x: e.clientX, y: e.clientY });
  };

  const theme = useSelector((state) => state.animations.theme);

  const classPillarOne =
    theme === "light" ? `${style.pillarOneLight}` : ` ${style.pillarOne}`;
  const classPillarTwo =
    theme === "light" ? `${style.pillarTwoLight}` : ` ${style.pillarTwo}`;
  const classPillarThree =
    theme === "light" ? `${style.pillarThreeLight}` : ` ${style.pillarThree}`;
  const classPillarFour =
    theme === "light" ? `${style.pillarFourLight}` : ` ${style.pillarFour}`;

  const [isLarguerThan1100] = useMediaQuery("(max-width: 1100px)");
  const [isLarguerThan750] = useMediaQuery("(max-width: 750px)");
  const [isLarguerThan550] = useMediaQuery("(max-width: 550px)");
  return (
    <div className={style.container} onMouseMove={(e) => handleMouseMove(e)}>
      <div
        className={`${style.pillarWrapper} ${style.pillarWrapperOne}`}
        style={{
          transform: `translate(${position.x / 10}px, ${position.y / 5}px)`,
          height:isLarguerThan1100 && "400px",
          width: isLarguerThan550 && "150px",
          left: isLarguerThan550 && "-4%",
          bottom: isLarguerThan550 && "10%" || isLarguerThan1100 && "-1%"
        }}
      >
        <div className={`${classPillarOne} ${style.pillar}`}></div>
      </div>

      <div
        className={`${style.pillarWrapper} ${style.pillarWrapperTwo}`}
        style={{
          transform: `translate(${position.x / 16}px, ${position.y / 8}px)`,
          height: isLarguerThan1100 && "400px",
          width: isLarguerThan550 && "150px",
          bottom : isLarguerThan1100 && "-8%",
          right:  isLarguerThan550 && "4%" || isLarguerThan750 && "-16%" ||  isLarguerThan1100 && "-2%"
        }}
      >
        <div className={`${classPillarTwo} ${style.pillar}`}></div>
      </div>

      <div
        className={`${style.pillarWrapper} ${style.pillarWrapperThree}`}
        style={{
          transform: `translate(${position.x / 30}px, ${position.y / 15}px)`,
          height: isLarguerThan1100 && "400px",
          top: isLarguerThan1100 && "-10%",
          width: isLarguerThan550 && "200px",
          left: isLarguerThan550 && "10%" || isLarguerThan750 && "-8%" || isLarguerThan1100 && "2%"
        }}
      >
        <div className={`${classPillarThree} ${style.pillar}`}></div>
      </div>

      <div
        className={`${style.pillarWrapper} ${style.pillarWrapperFour}`}
        style={{
          transform: `translate(${position.x / 8}px, ${position.y / 4}px)`,
          height: isLarguerThan1100 && "400px",
          width: isLarguerThan550 && "150px"|| isLarguerThan750 && "200px",
          right: isLarguerThan750 && "8%",
          top: isLarguerThan750 && "10%" ||  isLarguerThan1100 && "-12%"
        }}
      >
        <div className={`${classPillarFour} ${style.pillar}`}></div>
      </div>
    </div>
  );
}
