import Router from "next/router";
import style from "./BackButton.module.scss"


export default function BackButton() {
  return (
    <button className={style.container} onClick={()=> Router.back()}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        height="48"
        viewBox="0 96 960 960"
        width="48"
      >
        <path d="M280 856v-60h289q70 0 120.5-46.5T740 634q0-69-50.5-115.5T569 472H274l114 114-42 42-186-186 186-186 42 42-114 114h294q95 0 163.5 64T800 634q0 94-68.5 158T568 856H280Z" />
      </svg>
    </button>
  );
}
