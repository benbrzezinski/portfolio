import { useEffect, useState, useRef } from "react";
import { TypeAnimation } from "react-type-animation";
import useIcons from "../../hooks/useIcons";
import scss from "./Home.module.scss";

const Home = () => {
  const [titleHeight, setTitleHeight] = useState(0);
  const { GreaterThan } = useIcons();
  const titleRef = useRef<HTMLHeadingElement>(null);

  useEffect(() => {
    if (titleRef.current) setTitleHeight(titleRef.current.offsetHeight);
  }, [titleRef]);

  return (
    <div className={`container ${scss.wrapper}`} id="home">
      <section className={scss.titleBox}>
        <div
          style={{
            minHeight: titleHeight * 2,
            display: "flex",
            alignItems: "flex-end",
          }}
        >
          <TypeAnimation
            className={scss.title}
            ref={titleRef}
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
        </div>
        <p className={scss.text}>
          Passionate developer with a creative mindset. Transforming ideas into
          user-friendly websites. Committed to innovation, clean code, and
          user-centric design. I&apos;m all about making your online experience
          smooth and enjoyable. Let&apos;s bring your vision to life!
        </p>
        <a
          href="https://drive.google.com/file/d/1PhvJFyAow8jolTCGI4EfvHOJ7GH12PQt/view?usp=drive_link"
          target="_blank"
          rel="noopener noreferrer nofollow"
          style={{ maxWidth: 204, marginTop: 20 }}
        >
          <button className={scss.btn} type="button">
            More about me <GreaterThan className={scss.icon} />
          </button>
        </a>
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
