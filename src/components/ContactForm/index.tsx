import { ChangeEventHandler, FormEventHandler, useState, useRef } from "react";
import { sendForm } from "@emailjs/browser";
import { toast } from "react-toastify";
import { nanoid } from "nanoid";
import useAuth from "../../hooks/useAuth";
import useInputFocused from "../../hooks/useInputFocused";
import useIcons from "../../hooks/useIcons";
import scss from "./ContactForm.module.scss";

const ContactForm = () => {
  const ID = useRef({
    name: nanoid(),
    email: nanoid(),
    message: nanoid(),
    toast_res_error: nanoid(),
    toast_unexpected_error: nanoid(),
  });
  const [values, setValues] = useState({
    user_name: "",
    user_email: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);
  const {
    nameFocused,
    emailFocused,
    messageFocused,
    nameError,
    emailError,
    messageError,
    handleBlur,
    handleFocus,
    labelStyles,
  } = useInputFocused();
  const { toggleIsUserAllowed } = useAuth();
  const { Loader } = useIcons();
  const formRef = useRef<HTMLFormElement>(null);

  const canBeSent = nameError || emailError || messageError ? true : false;

  const handleChange: ChangeEventHandler<
    HTMLInputElement | HTMLTextAreaElement
  > = e => {
    const { name, value } = e.currentTarget;
    setValues(v => ({ ...v, [name]: value }));
  };

  const sendEmail: FormEventHandler<HTMLFormElement> = e => {
    e.preventDefault();
    setLoading(true);

    void (async () => {
      try {
        if (formRef.current) {
          const res = await sendForm(
            "service_n4rgv7r",
            "template_sn9ae24",
            formRef.current,
            "mvBFayLSbELUYNofS"
          );

          if (res.status === 200) {
            toggleIsUserAllowed();
          } else {
            toast.error("Something went wrong, please try again later", {
              toastId: ID.current.toast_res_error,
            });
          }
        }
      } catch {
        toast.error("An unexpected error occurred, please try again later", {
          toastId: ID.current.toast_unexpected_error,
        });
      } finally {
        setLoading(false);
      }
    })();
  };

  return (
    <div className={`container ${scss.wrapper}`} id="contact">
      <h2 className={scss.title} data-aos="fade-up">
        Contact
      </h2>
      <form
        className={scss.contactForm}
        ref={formRef}
        data-aos="zoom-in-up"
        onSubmit={sendEmail}
      >
        <p className={scss.text}>
          Feel free to reach out to me for any questions or opportunities
        </p>
        <div className={scss.box}>
          <label
            htmlFor={ID.current.name}
            className={scss.label}
            style={nameFocused && labelStyles}
          >
            Your Name
          </label>
          <input
            type="text"
            name="user_name"
            id={ID.current.name}
            className={scss.input}
            value={values.user_name}
            onChange={handleChange}
            onFocus={() => handleFocus("name")}
            onBlur={() => handleBlur("name", values.user_name)}
            required
          />
          {nameError && <p className={scss.error}>{nameError}</p>}
        </div>
        <div className={scss.box}>
          <label
            htmlFor={ID.current.email}
            className={scss.label}
            style={emailFocused && labelStyles}
          >
            Your Email
          </label>
          <input
            type="email"
            name="user_email"
            id={ID.current.email}
            className={scss.input}
            value={values.user_email}
            onChange={handleChange}
            onFocus={() => handleFocus("email")}
            onBlur={() => handleBlur("email", values.user_email)}
            required
          />
          {emailError && <p className={scss.error}>{emailError}</p>}
        </div>
        <div className={scss.box}>
          <label
            htmlFor={ID.current.message}
            className={scss.label}
            style={messageFocused && labelStyles}
          >
            Message
          </label>
          <textarea
            name="message"
            id={ID.current.message}
            className={scss.input}
            value={values.message}
            onChange={handleChange}
            onFocus={() => handleFocus("message")}
            onBlur={() => handleBlur("message", values.message)}
            cols={50}
            rows={5}
            required
          ></textarea>
          {messageError && <p className={scss.error}>{messageError}</p>}
        </div>
        <button
          type="submit"
          className={scss.btn}
          style={{ pointerEvents: canBeSent ? "none" : "all" }}
        >
          {loading ? <Loader className={scss.loader} /> : "Send"}
        </button>
      </form>
    </div>
  );
};

export default ContactForm;
