import { useDispatch } from "react-redux";
import style from "./Contact.module.scss";
import { useEffect, useState } from "react";
import { hoverCursor } from "@/Redux/animateTrigger";
import { useMediaQuery } from "@chakra-ui/react";
export default function Contact() {
  const [isClicked, setIsClicked] = useState(false);
  const dispatch = useDispatch();

  const contactPlatforms = [
    {
      name: "Whatsapp",
      src: "/svg/icons/whatsapp.svg",
      href: "https://wa.me/+584149755699",
    },
    {
      name: "Linkedin",
      src: "/svg/icons/linkedin.svg",
      href: "https://www.linkedin.com/in/jes%C3%BAs-daniel-roa-morales-17aaa6252/",
    },
    {
      name: "Instagram",
      src: "/svg/icons/instagram.svg",
      href: "https://www.instagram.com/jdanielroa/",
    },
  ];

  const [isSmallerThan1000] = useMediaQuery("(max-width: 1000px)");
  const [isSmallerThan505] = useMediaQuery("(max-width: 505px)");
  const [isSmallerThan400] = useMediaQuery("(max-width: 400px)");
  return (
    <div className={style.container}>
      <h1
        className={style.titleContainer}
        style={{
          fontSize:
            (isSmallerThan505 && "40px") || (isSmallerThan1000 && "50px"),
            width: isSmallerThan505 && "100%",
            justifyContent: isSmallerThan505 && "center",
        }}
      >
        KEEP IN TOUCH{" "}
        <hr
          style={{
            display: isSmallerThan505 && "none",
          }}
          className={style.hr}
        />
      </h1>

      <div className={style.formWrapper}>
        <h2
          className={style.h2}
          style={{ fontSize: isSmallerThan505 && "28px", margin: isSmallerThan400 && "0" }}
        >
          <img
            className={style.img}
            style={{ width: isSmallerThan505 && "40px" }}
            src="/svg/icons/gmail.svg"
            alt=""
          />
          SAY HELLO!
        </h2>
        <form action="" className={style.form}>
          <label>Whats your name?</label>
          <input
            type="text"
            onMouseEnter={() => dispatch(hoverCursor(true))}
            onMouseLeave={() => dispatch(hoverCursor(false))}
            placeholder="Ramon Carlos Boyer Garcia Sanchez Santa Maria..."
          />
          <label>Write your email</label>
          <input
            type="text"
            onMouseEnter={() => dispatch(hoverCursor(true))}
            onMouseLeave={() => dispatch(hoverCursor(false))}
            placeholder="ramoncarlos@gmail.com"
          />
          <label>What do you want to tell me?</label>
          <input
            type="text"
            onMouseEnter={() => dispatch(hoverCursor(true))}
            onMouseLeave={() => dispatch(hoverCursor(false))}
            placeholder="CAAARMEEEEN"
          />
          <button
            className={style.buttonSend}
            type="submit"
            onMouseEnter={() => dispatch(hoverCursor(true))}
            onMouseLeave={() => dispatch(hoverCursor(false))}
          >
            Send email
          </button>
        </form>
      </div>

      <div className={style.otherMethodsWrapper}>
        <h2
          className={style.h2}
          style={{ fontSize: isSmallerThan505 && "28px" }}
        >
          {" "}
          <img
            onClick={() => setIsClicked(!isClicked)}
            onMouseEnter={() => dispatch(hoverCursor(true))}
            onMouseLeave={() => dispatch(hoverCursor(false))}
            style={{
              transform: isClicked && "rotate(180deg)",
              animation: isClicked && "ClickMe 1s ease infinite",
              width: isSmallerThan505 && "40px",
            }}
            className={style.img}
            src="/svg/icons/arrow.svg"
            alt=""
          />{" "}
          Or write me by:
        </h2>
        <div
          className={style.otherWrapper}
          style={{
            transition: "height .4s ease",
            height: !isClicked ? "1px" : "80px",
          }}
        >
          {contactPlatforms.map((e, i) => {
            return (
              <a
                href={e.href}
                target="_blank"
                onMouseEnter={() => dispatch(hoverCursor(true))}
                onMouseLeave={() => dispatch(hoverCursor(false))}
                key={i}
                style={{
                  transition: "opacity .2s ease, transform .2s ease",
                  opacity: isClicked ? 1 : 0,
                  cursor: "pointer",
                }}
                className={style.socialMediaIcons}
              >
                <img
                  className={style.img}
                  style={{ width: isSmallerThan505 && "40px" }}
                  src={e.src}
                  alt={e.name}
                />
              </a>
            );
          })}
        </div>
      </div>
    </div>
  );
}
