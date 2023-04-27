import style from "./Menu.module.scss";
import { useDispatch, useSelector } from "react-redux";
import Link from "next/link";
import { showMenu } from "@/Redux/animateTrigger";

export default function Menu() {
  const displayMenu = useSelector((state) => state.animations.menu);

  const dispatch = useDispatch();

  const menuLinks = [
    { name: "HOME", link: "/" },
    { name: "WORK", link: "/" },
    { name: "ABOUT", link: "/about" },
    { name: "CONTACT", link: "/" },
  ];

  return (
    <div className={style.container}>
      <ul>
        {menuLinks.map((e) => {
          return (
            <li>
              <div
                onClick={() => dispatch(showMenu(false))}
                style={{
                  transform: displayMenu ? "translateY(0)" : "translateY(110%)",
                  transitionDelay: displayMenu ? ".3s" : "0s",
                }}
              >
                <Link href={e.link}>{e.name}</Link>
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
