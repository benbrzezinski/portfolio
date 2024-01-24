import { Link } from "react-scroll";
import { MobileNavTypes } from "../../types";
import useIcons from "../../hooks/useIcons";
import scss from "./MobileNav.module.scss";

const MobileNav = ({ isMobileNavOpen, closeMobileNav }: MobileNavTypes) => {
  const { Close, GitHub, LinkedIn } = useIcons();

  return (
    <div
      className={
        isMobileNavOpen ? `${scss.wrapper} ${scss.visible}` : scss.wrapper
      }
    >
      <button className={scss.btn} type="button" onClick={closeMobileNav}>
        <Close className={scss.icon} />
      </button>
      <nav>
        <ul className={scss.navList}>
          <li className={scss.navItem}>
            <Link
              to="home"
              className={scss.navLink}
              activeClass={scss.active}
              spy={true}
              smooth={true}
              duration={800}
              spyThrottle={300}
              onClick={closeMobileNav}
            >
              Home
            </Link>
          </li>
          <li className={scss.navItem}>
            <Link
              to="projects"
              className={scss.navLink}
              activeClass={scss.active}
              spy={true}
              smooth={true}
              duration={800}
              spyThrottle={300}
              onClick={closeMobileNav}
            >
              Projects
            </Link>
          </li>
          <li className={scss.navItem}>
            <Link
              to="aboutme"
              className={scss.navLink}
              activeClass={scss.active}
              spy={true}
              smooth={true}
              duration={800}
              spyThrottle={300}
              onClick={closeMobileNav}
            >
              Skills
            </Link>
          </li>
          <li className={scss.navItem}>
            <Link
              to="contact"
              className={scss.navLink}
              activeClass={scss.active}
              spy={true}
              smooth={true}
              duration={800}
              spyThrottle={300}
              onClick={closeMobileNav}
            >
              Contact
            </Link>
          </li>
        </ul>
      </nav>
      <a
        className={`${scss.btn} ${scss.github}`}
        href="https://github.com/benbrzezinski"
        target="_blank"
        rel="noopener noreferrer nofollow"
      >
        <GitHub className={scss.icon} />
      </a>
      <a
        className={`${scss.btn} ${scss.linkedin}`}
        href="http://www.linkedin.com/in/beniamin-brzezi%C5%84ski-66930221b/"
        target="_blank"
        rel="noopener noreferrer nofollow"
      >
        <LinkedIn className={scss.icon} />
      </a>
    </div>
  );
};

export default MobileNav;
