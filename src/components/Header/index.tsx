import { Link } from "react-scroll";
import useIcons from "../../hooks/useIcons";
import scss from "./Header.module.scss";

const Header = () => {
  const { Home, Works, Person, Phone } = useIcons();

  return (
    <header className={scss.header}>
      <nav className={scss.nav}>
        <ul className={scss.navList}>
          <li className={scss.navItem}>
            <Link
              to="home"
              className={scss.navLink}
              activeClass={scss.active}
              spy={true}
              smooth={true}
              duration={500}
              offset={-100}
            >
              <Home className={scss.icon} />
            </Link>
          </li>
          <li className={scss.navItem}>
            <Link
              to="projects"
              className={scss.navLink}
              activeClass={scss.active}
              spy={true}
              smooth={true}
              duration={500}
              offset={-100}
            >
              <Works className={scss.icon} />
            </Link>
          </li>
          <li className={scss.navItem}>
            <Link
              to="aboutme"
              className={scss.navLink}
              activeClass={scss.active}
              spy={true}
              smooth={true}
              duration={500}
              offset={-100}
            >
              <Person className={scss.icon} />
            </Link>
          </li>
          <li className={scss.navItem}>
            <Link
              to="contact"
              className={scss.navLink}
              activeClass={scss.active}
              spy={true}
              smooth={true}
              duration={500}
              offset={-100}
            >
              <Phone className={scss.icon} />
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
