import { useDispatch, useSelector } from "react-redux";
import style from "./Contact.module.scss";
import { useEffect, useState } from "react";
import { hoverCursor, showMenu } from "@/Redux/animateTrigger";
import { useMediaQuery } from "@chakra-ui/react";
import { motion as m } from "framer-motion";
import { validatingInput } from "@/helpers";
////////////////////////////////////////////////

export default function Contact() {
  //-----------------------------
  //-----------------------------
  const dispatch = useDispatch();
  const isMenuOpen = useSelector((state) => state.animations.menu);
  const [isClicked, setIsClicked] = useState(false);
  const [inputValues, setInputValues] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [inputErrors, setInputErrors] = useState({});
  useEffect(() => {
    dispatch(showMenu(false));
  }, []);
  //-----------------------------
  //-----------------------------
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
  const variants = {
    hide: {
      width: 0,
      opacity: 0,
      pointerEvents: "none",
    },
    showTitle: {
      width: "75%",
      opacity: 1,
      pointerEvents: "auto",
    },
    hideInputLabel: {
      x: "100px",
      opacity: 0,
      pointerEvents: "none",
    },
    showInputLabel: {
      x: "0",
      opacity: 1,
      pointerEvents: "auto",
    },
    hideSMI: {
      y: "100px",
      opacity: 0,
      pointerEvents: "none",
    },
    showSMI: {
      y: "0",
      opacity: isClicked ? 1 : 0,
      pointerEvents: "auto",
    },
    showInput: {
      opacity: 1,
      width: "100%",
      pointerEvents: "auto",
    },
    opacityOff: {
      opacity: 0,
      pointerEvents: "none",
    },
    opacityOn: {
      opacity: 1,
      pointerEvents: "auto",
    },
  };
  //-----------------------------
  //-----------------------------
  const handleInputChange = (e) => {
    setInputValues({ ...inputValues, [e.target.name]: e.target.value });
    setInputErrors(
      validatingInput({ ...inputValues, [e.target.name]: e.target.value })
    );
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (Object.keys(inputErrors).length) {
      return console.log("sorry");
    }
    setInputValues({
      name: "",
      email: "",
      message: "",
    });
    setInputErrors({});
    console.log("enviado");
  };
  //-----------------------------
  //-----------------------------
  const [isSmallerThan1000] = useMediaQuery("(max-width: 1000px)");
  const [isSmallerThan505] = useMediaQuery("(max-width: 505px)");
  const [isSmallerThan400] = useMediaQuery("(max-width: 400px)");
  //-----------------------------
  //-----------------------------
  return (
    <main className={style.container}>
      <m.h1
        variants={variants}
        animate={isMenuOpen ? "hide" : "showTitle"}
        initial="showTitle"
        exit={"hide"}
        transition={{
          type: "spring",
          duration: 0.8,
          delay: isMenuOpen ? 0 : 0.2,
        }}
        className={style.titleContainer}
        style={{
          fontSize:
            (isSmallerThan505 && "40px") || (isSmallerThan1000 && "50px"),
          width: isSmallerThan505 && "100%",
          justifyContent: isSmallerThan505 && "center",
          overflow: "hidden",
        }}
      >
        KEEP IN TOUCH{" "}
        <hr
          style={{
            display: isSmallerThan505 && "none",
          }}
          className={style.hr}
        />
      </m.h1>

      <m.div
        variants={variants}
        animate={isMenuOpen ? "opacityOff" : "opacityOn"}
        initial="opacityOn"
        exit={"opacityOff"}
        transition={{
          type: "spring",
          duration: 0.8,
          delay: isMenuOpen ? 0.8 : 0.2,
        }}
        className={style.formWrapper}
      >
        <h2
          className={style.h2}
          style={{
            fontSize: isSmallerThan505 && "28px",
            margin: isSmallerThan400 && "0",
          }}
        >
          <img
            className={style.img}
            style={{ width: isSmallerThan505 && "40px" }}
            src="/svg/icons/gmail.svg"
            alt=""
          />
          SAY HELLO!
        </h2>
        <form className={style.form} onSubmit={(e) => handleSubmit(e)}>
          <m.label
            variants={variants}
            animate={isMenuOpen ? "hideInputLabel" : "showInputLabel"}
            initial="showInputLabel"
            exit={"hideInputLabel"}
            transition={{
              type: "spring",
              duration: 0.8,
              delay: isMenuOpen ? 0.6 : 0.2,
            }}
          >
            Whats your name?
          </m.label>
          <m.input
            variants={variants}
            animate={isMenuOpen ? "hide" : "showInput"}
            initial="showInput"
            exit={"hide"}
            transition={{
              type: "spring",
              duration: 0.8,
              delay: isMenuOpen ? 0.6 : 0.2,
            }}
            type="text"
            name="name"
            onMouseEnter={() => dispatch(hoverCursor(true))}
            onMouseLeave={() => dispatch(hoverCursor(false))}
            onChange={(e) => handleInputChange(e)}
            placeholder="Ramon Carlos Boyer Garcia Sanchez Santa Maria..."
          />
          {inputErrors.name && (
            <m.p
              variants={variants}
              animate={isMenuOpen ? "hideInputLabel" : "showInputLabel"}
              initial="showInputLabel"
              exit={"hideInputLabel"}
              transition={{
                type: "spring",
                duration: 0.8,
                delay: isMenuOpen ? 0.6 : 0.2,
              }}
              className={style.error}
            >
              {inputErrors.name}
            </m.p>
          )}
          <m.label
            variants={variants}
            animate={isMenuOpen ? "hideInputLabel" : "showInputLabel"}
            initial="showInputLabel"
            exit={"hideInputLabel"}
            transition={{
              type: "spring",
              duration: 0.8,
              delay: isMenuOpen ? 0.6 : 0.4,
            }}
          >
            Write your email
          </m.label>
          <m.input
            variants={variants}
            animate={isMenuOpen ? "hide" : "showInput"}
            initial="showInput"
            exit={"hide"}
            transition={{
              type: "spring",
              duration: 0.8,
              delay: isMenuOpen ? 0.6 : 0.4,
            }}
            type="text"
            name="email"
            onChange={(e) => handleInputChange(e)}
            onMouseEnter={() => dispatch(hoverCursor(true))}
            onMouseLeave={() => dispatch(hoverCursor(false))}
            placeholder="ramoncarlos@gmail.com"
          />
          {inputErrors.email && (
            <m.p
              variants={variants}
              animate={isMenuOpen ? "hideInputLabel" : "showInputLabel"}
              initial="showInputLabel"
              exit={"hideInputLabel"}
              transition={{
                type: "spring",
                duration: 0.8,
                delay: isMenuOpen ? 0.6 : 0.2,
              }}
              className={style.error}
            >
              {inputErrors.email}
            </m.p>
          )}
          <m.label
            variants={variants}
            animate={isMenuOpen ? "hideInputLabel" : "showInputLabel"}
            initial="showInputLabel"
            exit={"hideInputLabel"}
            transition={{
              type: "spring",
              duration: 0.8,
              delay: isMenuOpen ? 0.6 : 0.6,
            }}
          >
            What do you want to tell me?
          </m.label>
          <m.input
            variants={variants}
            animate={isMenuOpen ? "hide" : "showInput"}
            initial="showInput"
            exit={"hide"}
            transition={{
              type: "spring",
              duration: 0.8,
              delay: isMenuOpen ? 0.6 : 0.6,
            }}
            type="text"
            name="message"
            onChange={(e) => handleInputChange(e)}
            onMouseEnter={() => dispatch(hoverCursor(true))}
            onMouseLeave={() => dispatch(hoverCursor(false))}
            placeholder="CAAARMEEEEN"
          />
          {inputErrors.message && (
            <m.p
              variants={variants}
              animate={isMenuOpen ? "hideInputLabel" : "showInputLabel"}
              initial="showInputLabel"
              exit={"hideInputLabel"}
              transition={{
                type: "spring",
                duration: 0.8,
                delay: isMenuOpen ? 0.6 : 0.2,
              }}
              className={style.error}
            >
              {inputErrors.message}
            </m.p>
          )}
          <button
            className={style.buttonSend}
            type="submit"
            onMouseEnter={() => dispatch(hoverCursor(true))}
            onMouseLeave={() => dispatch(hoverCursor(false))}
          >
            Send email
          </button>
        </form>
      </m.div>

      <m.div
        variants={variants}
        animate={isMenuOpen ? "opacityOff" : "opacityOn"}
        initial="opacityOn"
        exit={"opacityOff"}
        transition={{
          type: "spring",
          duration: 0.8,
          delay: isMenuOpen ? 0.8 : 0.2,
        }}
        className={style.otherMethodsWrapper}
      >
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
              <m.a
                variants={variants}
                animate={isMenuOpen ? "hideSMI" : "showSMI"}
                initial="showSMI"
                exit={"hideSMI"}
                transition={{
                  type: "spring",
                  duration: 0.8,
                  delay: isMenuOpen ? 0 : i * 0.1,
                }}
                href={e.href}
                target="_blank"
                onMouseEnter={() => dispatch(hoverCursor(true))}
                onMouseLeave={() => dispatch(hoverCursor(false))}
                key={i}
                style={{
                  transition: "opacity .2s ease, transform .2s ease",
                  opacity: isClicked ? 1 : 0,
                  pointerEvents: !isClicked && "none",
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
              </m.a>
            );
          })}
        </div>
      </m.div>
    </main>
  );
}
