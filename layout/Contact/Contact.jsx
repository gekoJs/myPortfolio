import { useDispatch, useSelector } from "react-redux";
import style from "./Contact.module.scss";
import { Fragment, useEffect, useState } from "react";
import { hoverCursor, showMenu } from "@/Redux/animateTrigger";
import { useMediaQuery } from "@chakra-ui/react";
import { motion as m } from "framer-motion";
import { contactFormTemplate, postEmail, validatingInput } from "@/helpers";
import { useMutation } from "react-query";
import { useRouter } from "next/router";
import en from "../../data/locales/en/contact.json";
import es from "../../data/locales/es/contact.json";
////////////////////////////////////////////////
export default function Contact() {
  const theme = useSelector((state) => state.animations.theme);
  const { locale } = useRouter();
  const lang = locale === "en" ? en : es;
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
  const [isSmallerThan650] = useMediaQuery("(max-width: 650px)");
  const [isSmallerThan505] = useMediaQuery("(max-width: 505px)");
  const [isSmallerThan400] = useMediaQuery("(max-width: 400px)");
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
      width: isSmallerThan650 ? "90%" : "75%",
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
  const inputs = [
    {
      inputTitle: lang.email,
      inputPlaceHolder: "ramoncarlos@gmail.com",
      inputName: "email",
      inputErr: inputErrors.email,
    },
    {
      inputTitle: lang.name,
      inputPlaceHolder: "Ramon Carlos Boyer Garcia Sanchez Santa Maria...",
      inputName: "name",
      inputErr: inputErrors.name,
    },
    {
      inputTitle: lang.message,
      inputPlaceHolder: "CAAARMEEEEN",
      inputName: "message",
      inputErr: inputErrors.message,
    },
  ];
  const emailData = {
    to: "daniroa.js@gmail.com",
    from: `${inputValues.name} <${inputValues.email}>`,
    subject: `Hola, soy ${inputValues.name} y me gustaria comunicarme contigo!`,
    text: "Quisiera comunicarme contigo",
    html: contactFormTemplate(
      inputValues.name,
      inputValues.email,
      inputValues.message
    ),
  };
  const existError = !!Object.keys(inputErrors).length;
  //-----------------------------
  //-----------------------------
  const handleInputChange = (e) => {
    setInputValues({ ...inputValues, [e.target.name]: e.target.value });
    setInputErrors(
      validatingInput({ ...inputValues, [e.target.name]: e.target.value }, lang)
    );
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!Object.values(inputValues).every((e) => e.length)) {
      setInputErrors({
        ...inputErrors,
        inputLength: "All spaces need to be completed",
      });
      return;
    }
    if (Object.keys(inputErrors).length) {
      return;
    }
    emailMutation.mutate(emailData);
  };

  const emailMutation = useMutation({
    mutationFn: postEmail,
    onSuccess: () => {
      setInputValues({
        name: "",
        email: "",
        message: "",
      });
      setInputErrors({});
    },
  });
  const {
    isLoading: emailLoading,
    isError: emailError,
    error,
    isSuccess,
  } = emailMutation;
  //-----------------------------
  //-----------------------------

  
  return (
    <main className={style.container}>
      <m.h1
        variants={variants}
        animate={isMenuOpen ? "hide" : "showTitle"}
        initial={"hide"}
        transition={{
          type: "spring",
          duration: 0.8,
          delay: isMenuOpen ? 0.2 : 0.6,
        }}
        className={style.titleContainer}
        style={{
          justifyContent: isSmallerThan505 && "center",
          overflow: "hidden",
        }}
      >
        {lang.contact}
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
        initial={"opacityOff"}
        transition={{
          type: "spring",
          duration: 0.8,
          delay: isMenuOpen ? 0.2 : 0.6,
        }}
        className={style.formWrapper}
        style={{
          borderColor: (existError && "#e04242") || (isSuccess && "#49a049"),
        }}
      >
        <h2
          className={style.h2}
          style={{
            margin: isSmallerThan400 && "0",
            color: (existError && "#e04242") || (isSuccess && "#49a049"),
          }}
        >
          <svg
            style={{
              width: isSmallerThan505 && "40px",
              fill: existError
                ? "#e04242"
                : isSuccess
                ? "#49a049"
                : "var(--fill)",
            }}
            clip-rule="evenodd"
            fill-rule="evenodd"
            height="30mm"
            image-rendering="optimizeQuality"
            shape-rendering="geometricPrecision"
            text-rendering="geometricPrecision"
            viewBox="0 0 3000 3000"
            width="30mm"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M1500 0c828 0 1500 672 1500 1500s-672 1500-1500 1500S0 2328 0 1500 672 0 1500 0zm751 902l-1456-4 728 578zm-900 735l-636-500v950h1573v-930l-590 482c-200 163-140 160-347-2zM723 716h1569c127 0 230 104 230 230v1100c0 127-104 230-230 230H723c-127 0-230-104-230-230V946c0-127 104-230 230-230z" />
          </svg>
          {lang.hello}
          <span className={style.letterStyled}>!</span>
        </h2>

        <form className={style.form} onSubmit={(e) => handleSubmit(e)}>
          {inputs.map((e, i) => (
            <Fragment key={i}>
              <m.label
                variants={variants}
                animate={isMenuOpen ? "hideInputLabel" : "showInputLabel"}
                initial={"hideInputLabel"}
                transition={{
                  type: "spring",
                  duration: 0.8,
                  delay: isMenuOpen ? 0.2 : 0.8 + i * 0.1,
                }}
              >
                {e.inputTitle}
              </m.label>
              <m.input
                variants={variants}
                animate={isMenuOpen ? "hide" : "showInput"}
                initial={"hide"}
                transition={{
                  type: "spring",
                  duration: 0.8,
                  delay: isMenuOpen ? 0.2 : 0.8 + i * 0.2,
                }}
                type="text"
                name={e.inputName}
                value={inputValues[e.inputName]}
                onMouseEnter={() => dispatch(hoverCursor(true))}
                onMouseLeave={() => dispatch(hoverCursor(false))}
                onChange={(e) => handleInputChange(e)}
                placeholder={e.inputPlaceHolder}
                autocomplete="off"
              />
              {e.inputErr && (
                <m.p
                  variants={variants}
                  animate={isMenuOpen ? "hideInputLabel" : "showInputLabel"}
                  initial={"hideInputLabel"}
                  transition={{
                    type: "spring",
                    duration: 0.8,
                    delay: isMenuOpen ? 0.2 : 0.8 + i * 0.2,
                  }}
                  className={style.error}
                >
                  {e.inputErr}
                </m.p>
              )}
            </Fragment>
          ))}
          <button
            className={style.buttonSend}
            type="submit"
            style={{
              background: (existError && "#e04242") || (isSuccess && "#49a049"),
              pointerEvents: isSuccess && "none",
            }}
            onMouseEnter={() => dispatch(hoverCursor(true))}
            onMouseLeave={() => dispatch(hoverCursor(false))}
          >
            {emailLoading
              ? lang.loading
              : emailError
              ? lang.error
              : existError
              ? lang.exist_error
              : isSuccess
              ? lang.send_it
              : lang.send}
          </button>
        </form>
      </m.div>

      <m.div
        variants={variants}
        animate={isMenuOpen ? "opacityOff" : "opacityOn"}
        initial={"opacityOff"}
        transition={{
          type: "spring",
          duration: 0.8,
          delay: isMenuOpen ? 0.2 : 0.6,
        }}
        className={style.otherMethodsWrapper}
      >
        <h2 className={style.h2}>
          <img
            onClick={() => setIsClicked(!isClicked)}
            onMouseEnter={() => dispatch(hoverCursor(true))}
            onMouseLeave={() => dispatch(hoverCursor(false))}
            style={{
              transform: isClicked && "rotate(180deg)",
              animation: isClicked && "ClickMe 1s ease infinite",
            }}
            src={
              theme === "dark"
                ? "/svg/icons/arrow.svg"
                : "/svg/icons/arrowLight.svg"
            }
            alt=""
          />
          {lang.or}
          <span className={style.letterStyled}>&nbsp;:</span>
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
                initial={"hideSMI"}
                transition={{
                  type: "spring",
                  duration: 0.8,
                  delay: isMenuOpen ? 0.2 : 0.4 + i * 0.1,
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
