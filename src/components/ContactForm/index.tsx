import { ChangeEventHandler, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { nanoid } from "nanoid";
import useInputFocused from "../../hooks/useInputFocused";
import scss from "./ContactForm.module.scss";

const ContactForm = () => {
  const ID = useRef({
    toast: nanoid(),
    name: nanoid(),
    email: nanoid(),
    message: nanoid(),
  });
  const [values, setValues] = useState({
    name: "",
    email: "",
    message: "",
  });
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
  const navigate = useNavigate();

  const canBeSent = nameError || emailError || messageError ? true : false;

  const handleChange: ChangeEventHandler<
    HTMLInputElement | HTMLTextAreaElement
  > = e => {
    const { name, value } = e.currentTarget;
    setValues(v => ({ ...v, [name]: value }));
  };

  return (
    <div className={`container ${scss.wrapper}`} id="contact">
      <h2 className={scss.title} data-aos="fade-up">
        Contact
      </h2>
      <form
        name="contact"
        method="post"
        action="/success"
        data-aos="zoom-in-up"
        className={scss.contactForm}
        onSubmit={() => navigate("/success")}
      >
        <input type="hidden" name="form-name" value="contact" />
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
            name="name"
            id={ID.current.name}
            className={scss.input}
            value={values.name}
            onChange={handleChange}
            onFocus={() => handleFocus("name")}
            onBlur={() => handleBlur("name", values.name)}
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
            name="email"
            id={ID.current.email}
            className={scss.input}
            value={values.email}
            onChange={handleChange}
            onFocus={() => handleFocus("email")}
            onBlur={() => handleBlur("email", values.email)}
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
        <button type="submit" className={scss.btn} disabled={canBeSent}>
          Send
        </button>
      </form>
    </div>
  );
};

export default ContactForm;
