import { useMediaQuery } from "react-responsive";
import { nanoid } from "nanoid";
import skills from "../../data/skills";
import scss from "./Skills.module.scss";

const Skills = () => {
  const isMobileScreen = useMediaQuery({ query: "(max-width: 768px)" });

  return (
    <div className={`container ${scss.wrapper}`} id="aboutme">
      <h2 className={scss.title} data-aos="fade-up">
        Skills
      </h2>
      <section className={scss.card} data-aos="flip-left">
        <h2 className={scss.subtitle}>Frontend Development</h2>
        <ul className={scss.skills}>
          {skills.frontend.map(({ icon, text }) => (
            <li key={nanoid()}>
              <figure className={scss.figure}>
                <img
                  src={`/assets/svgs/${icon}.svg`}
                  width={50}
                  height={50}
                  alt={`${text} icon`}
                />
                <figcaption>{text}</figcaption>
              </figure>
            </li>
          ))}
        </ul>
      </section>
      <section className={scss.card} data-aos="flip-right">
        <h2 className={scss.subtitle}>Backend Development</h2>
        <ul className={scss.skills}>
          {skills.backend.map(({ icon, text }) => (
            <li key={nanoid()}>
              <figure className={scss.figure}>
                <img
                  src={`/assets/svgs/${icon}.svg`}
                  width={50}
                  height={50}
                  alt={`${text} icon`}
                />
                <figcaption>{text}</figcaption>
              </figure>
            </li>
          ))}
        </ul>
      </section>
      {!isMobileScreen && <div className={scss.circle}></div>}
      <section
        className={scss.card}
        data-aos={isMobileScreen ? "flip-left" : ""}
      >
        <h2 className={scss.subtitle}>Mobile Development</h2>
        <ul className={scss.skills}>
          {skills.mobile.map(({ icon, text }) => (
            <li key={nanoid()}>
              <figure className={scss.figure}>
                <img
                  src={`/assets/svgs/${icon}.svg`}
                  width={50}
                  height={50}
                  alt={`${text} icon`}
                />
                <figcaption>{text}</figcaption>
              </figure>
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
};

export default Skills;
