import { useState, useEffect } from "react";
import style from "./Cursor.module.scss";
import { motion } from "framer-motion";

export default function Cursor({ dotPosition, dotLeave, dotClick }) {
  return (
    <>
      <div
        style={{
          top: dotPosition.y,
          left: dotPosition.x,
          opacity: dotLeave ? 0 : 1,
          padding: dotClick ? "26px" : "16px"
        }}
        className={style.cursor}
      ></div>
      <div
        style={{
          top: dotPosition.y,
          left: dotPosition.x,
          opacity: dotLeave ? 0 : 1,
        }}
        className={style.dot}
      ></div>
    </>
  );
}
