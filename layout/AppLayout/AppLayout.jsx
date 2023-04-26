import { Nav, Footer, Cursor } from "../../components/index";
import Noise from "@/styles/noise/Noise";
import { useSelector } from "react-redux";
import { useEffect, useState } from "react";

export default function AppLayout({ children }) {
  const themeDisplayed = useSelector((state) => state.themeDisplayed.theme);


  // useEffect(() => {
  //   // const dotOnMouseEnter = () => {
  //   //   setDotLeave(false);
  //   // };
  //   document.querySelector("body").addEventListener("mouseenter", (e)=>console.log(e))
  //   // window.addEventListener("mouseleave", setDotLeave(true));
  //   // return () => window.removeEventListener("mouseenter", dotOnMouseEnter);
  // }, []);
  return (
    <div
      theme={themeDisplayed}
      // onMouseLeave={dotOnMouseLeave}
      // onMouseEnter={dotOnMouseEnter}
      // onMouseDown={onClicHandler}
      // onMouseUp={onClicHandler}
    >
      <div>
        <Nav />
        {children}
        <Noise />
          <Cursor/>
        <Footer />
      </div>
    </div>
  );
}
