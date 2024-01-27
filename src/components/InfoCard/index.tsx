import { Link } from "react-router-dom";
import useIcons from "../../hooks/useIcons";
import scss from "./InfoCard.module.scss";

const InfoCard = () => {
  const { ArrowLeft } = useIcons();

  return (
    <section className={scss.card}>
      <h1 className={scss.title}>Thank You!</h1>
      <p className={scss.text}>Your message has been successfully sent</p>
      <Link to="/" className={scss.link}>
        <ArrowLeft className={scss.arrow} />
        Back to main page
      </Link>
    </section>
  );
};

export default InfoCard;
