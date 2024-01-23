import { Link } from "react-scroll";
import useIcons from "../../hooks/useIcons";
import scss from "./Footer.module.scss";

const Footer = () => {
  const { GitHub, LinkedIn, Facebook } = useIcons();

  return (
    <footer className={`container ${scss.wrapper}`}>
      <div className={scss.box}>
        <h2 className={scss.name}>Beniamin Brzeziński</h2>
        <nav>
          <ul className={scss.navList}>
            <li className={scss.navItem}>
              <Link
                to="home"
                className={scss.navLink}
                smooth={true}
                duration={800}
              >
                Home
              </Link>
            </li>
            <li className={scss.navItem}>
              <Link
                to="projects"
                className={scss.navLink}
                smooth={true}
                duration={800}
              >
                Projects
              </Link>
            </li>
            <li className={scss.navItem}>
              <Link
                to="aboutme"
                className={scss.navLink}
                smooth={true}
                duration={800}
              >
                Skills
              </Link>
            </li>
            <li className={scss.navItem}>
              <Link
                to="contact"
                className={scss.navLink}
                smooth={true}
                duration={800}
              >
                Contact
              </Link>
            </li>
          </ul>
        </nav>
        <ul className={scss.socialMediaList}>
          <li>
            <a
              className={scss.socialMediaLink}
              href="https://www.facebook.com/beniamin.brzezinski"
              target="_blank"
              rel="noopener noreferrer nofollow"
            >
              <Facebook className={scss.icon} />
            </a>
          </li>
          <li>
            <a
              className={scss.socialMediaLink}
              href="https://github.com/benbrzezinski"
              target="_blank"
              rel="noopener noreferrer nofollow"
            >
              <GitHub className={scss.icon} />
            </a>
          </li>
          <li>
            <a
              className={scss.socialMediaLink}
              href="http://www.linkedin.com/in/beniamin-brzezi%C5%84ski-66930221b/"
              target="_blank"
              rel="noopener noreferrer nofollow"
            >
              <LinkedIn className={scss.icon} />
            </a>
          </li>
        </ul>
        <p className={scss.copyright}>
          © 2024 Beniamin Brzeziński. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
