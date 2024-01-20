import { Link } from "react-scroll";
import { useMediaQuery } from "react-responsive";
import useIcons from "../../hooks/useIcons";
import scss from "./Header.module.scss";

const Header = () => {
  const { Home, Works, Knowledge, Phone, Hamburger } = useIcons();
  const isMobileScreen = useMediaQuery({ query: "(max-width: 850px)" });

  return (
    <header className={scss.header}>
      <div className={`container ${scss.wrapper}`}>
        <button
          type="button"
          className={scss.logoBtn}
          onClick={() => location.reload()}
        >
          <img
            className={scss.logoImg}
            src="/assets/images/logo-big.jpg"
            alt="Logo"
            loading="lazy"
          />
          <p className={scss.logoText}>Benfolio</p>
        </button>
        {isMobileScreen ? (
          <button className={scss.hamburger} type="button">
            <Hamburger className={scss.icon} />
          </button>
        ) : (
          <>
            <nav className={scss.nav}>
              <ul className={scss.navList}>
                <li className={scss.navItem}>
                  <Link
                    to="home"
                    className={scss.navLink}
                    activeClass={scss.active}
                    spy={true}
                    smooth={true}
                    duration={800}
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
                    duration={800}
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
                    duration={800}
                  >
                    <Knowledge className={scss.icon} />
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
                  >
                    <Phone className={scss.icon} />
                  </Link>
                </li>
              </ul>
            </nav>
            <a
              href="https://github.com/benbrzezinski"
              target="_blank"
              rel="noopener noreferrer nofollow"
            >
              <button className={scss.btn} type="button">
                GitHub Profile
              </button>
            </a>
          </>
        )}
      </div>
    </header>
  );
};

export default Header;
