import { Link } from "react-scroll";
import { useMediaQuery } from "react-responsive";
import { HeaderTypes } from "../../types";
import useIcons from "../../hooks/useIcons";
import scss from "./Header.module.scss";

const Header = ({ openMobileNav }: HeaderTypes) => {
  const { Hamburger } = useIcons();
  const isMobileScreen = useMediaQuery({ query: "(max-width: 900px)" });

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
          <button
            className={scss.hamburger}
            type="button"
            onClick={openMobileNav}
          >
            <Hamburger className={scss.icon} />
          </button>
        ) : (
          <>
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
                  >
                    Contact
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
