import { useDispatch } from "react-redux";
import { setIsUserAllowed } from "../../redux/authSlice";
import useIcons from "../../hooks/useIcons";
import scss from "./InfoCard.module.scss";

const InfoCard = () => {
  const { ArrowLeft } = useIcons();
  const dispatch = useDispatch();

  const goBack = () => {
    dispatch(setIsUserAllowed());
  };

  return (
    <section className={scss.card}>
      <h1 className={scss.title}>Thank You!</h1>
      <p className={scss.text}>Your message has been successfully sent</p>
      <button type="button" className={scss.goBackBtn} onClick={goBack}>
        <ArrowLeft className={scss.arrow} />
        Back to main page
      </button>
    </section>
  );
};

export default InfoCard;
