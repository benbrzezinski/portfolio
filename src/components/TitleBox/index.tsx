import { useEffect, useState, useRef } from "react";
import { TypeAnimation } from "react-type-animation";
import useIcons from "../../hooks/useIcons";
import scss from "./TitleBox.module.scss";

const TitleBox = () => {
  const [titleHeight, setTitleHeight] = useState(0);
  const { ArrowRight } = useIcons();
  const titleRef = useRef<HTMLHeadingElement>(null);

  useEffect(() => {
    if (titleRef.current) setTitleHeight(titleRef.current.offsetHeight);
  }, [titleRef]);

  return (
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
        client-focused design. I&apos;m all about making your online experience
        smooth and enjoyable. Let&apos;s bring your vision to life!
      </p>
      <a
        href="https://www.canva.com/design/DAFrOkd0qlM/gIQ8ItPfZxXGk-3j9fQZ4Q/view?utm_content=DAFrOkd0qlM&utm_campaign=designshare&utm_medium=link&utm_source=editor"
        target="_blank"
        rel="noopener noreferrer nofollow"
        style={{ maxWidth: 204, marginTop: 20 }}
      >
        <button className={scss.btn} type="button">
          More about me <ArrowRight className={scss.icon} />
        </button>
      </a>
    </section>
  );
};

export default TitleBox;
