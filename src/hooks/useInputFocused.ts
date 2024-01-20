import { useState, CSSProperties } from "react";
import { InputNames } from "../types";

const useInputFocused = () => {
  const [nameFocused, setNameFocused] = useState<true | undefined>(undefined);
  const [emailFocused, setEmailFocused] = useState<true | undefined>(undefined);
  const [messageFocused, setMessageFocused] = useState<true | undefined>(
    undefined
  );
  const [nameError, setNameError] = useState("");
  const [emailError, setEmailError] = useState("");
  const [messageError, setMessageError] = useState("");

  const labelStyles: CSSProperties = {
    color: "var(--cl-sec)",
    transform: "translate(-5px, -35px)",
  };

  const handleFocus = (type: InputNames) => {
    switch (type) {
      case "name":
        setNameFocused(true);
        break;
      case "email":
        setEmailFocused(true);
        break;
      case "message":
        setMessageFocused(true);
        break;
      default:
        return;
    }
  };

  const handleBlur = (type: InputNames, value: string) => {
    switch (type) {
      case "name":
        if (!value) setNameFocused(undefined);

        !value.trim().match(/[a-zA-Z ]/g)
          ? setNameError("Name can only consist of letters and spaces")
          : setNameError("");
        break;

      case "email":
        if (!value) setEmailFocused(undefined);

        !value.trim().match(/^[\w.-]+@[a-zA-Z\d.-]+\.[a-zA-Z]{2,}$/g)
          ? setEmailError("Invalid email address provided")
          : setEmailError("");
        break;

      case "message":
        if (!value) setMessageFocused(undefined);

        value.trim().replace(/\s+/g, " ").split(" ").length < 5
          ? setMessageError("Use at least 5 words")
          : setMessageError("");
        break;

      default:
        return;
    }
  };

  return {
    nameFocused,
    emailFocused,
    messageFocused,
    nameError,
    emailError,
    messageError,
    handleFocus,
    handleBlur,
    labelStyles,
  };
};

export default useInputFocused;
