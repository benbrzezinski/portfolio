import scss from "./Footer.module.scss";

const Footer = () => {
  return (
    <footer className={`container ${scss.wrapper}`}>
      <div className={scss.box}>Footer</div>
    </footer>
  );
};

export default Footer;
