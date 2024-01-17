import { TypeAnimation } from "react-type-animation";
import { Link } from "react-scroll";
import useIcons from "../../hooks/useIcons";
import scss from "./Home.module.scss";

const Home = () => {
  const { GreaterThan } = useIcons();

  return (
    <div className={`container ${scss.wrapper}`} id="home">
      <section className={scss.titleBox}>
        <TypeAnimation
          className={scss.title}
          sequence={[
            "Hello! I'm Beniamin, front-end developer",
            1000,
            "Hello! I'm Beniamin, web developer",
            1000,
            "Hello! I'm Beniamin, full-stack developer",
            1000,
            "Ehh, whatever",
            1000,
          ]}
          wrapper="h1"
          speed={20}
          repeat={Infinity}
        />
        <p className={scss.text}>
          Passionate developer with a creative mindset. Transforming ideas into
          user-friendly websites. Committed to innovation, clean code, and
          user-centric design. I&apos;m all about making your online experience
          smooth and enjoyable. Let&apos;s bring your vision to life!
        </p>
        <Link
          to="aboutme"
          style={{ maxWidth: 190, marginTop: 20 }}
          smooth={true}
          duration={500}
          offset={-150}
        >
          <button className={scss.btn} type="button">
            More about me <GreaterThan className={scss.icon} />
          </button>
        </Link>
      </section>
      <img
        className={scss.profileImg}
        src="/assets/images/profile.jpg"
        alt="My profile picture"
        loading="lazy"
      />
    </div>
  );
};

export default Home;
