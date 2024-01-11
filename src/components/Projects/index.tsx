import useIcons from "../../hooks/useIcons";
import projects from "../../data/projects";
import scss from "./Projects.module.scss";

const Projects = () => {
  const { Website, Code, Vite, React, Typescript } = useIcons();

  return (
    <div className="container" id="projects">
      {projects.map(
        ({ id, subtitle, name, description, screenshot, website, code }) => (
          <div className={scss.project} key={id}>
            <div className={scss.projectInfoWrapper}>
              <div className={scss.infoBox}>
                <p className={scss.subtitle}>{subtitle}</p>
                <h2 className={scss.name}>{name}</h2>
                <p className={scss.description}>{description}</p>
              </div>
              <div className={scss.toolsBox}>
                <a
                  href="https://vitejs.dev"
                  target="_blank"
                  rel="noopener noreferrer nofollow"
                >
                  <Vite className={scss.icon} />
                </a>
                <a
                  href="https://react.dev"
                  target="_blank"
                  rel="noopener noreferrer nofollow"
                >
                  <React className={scss.icon} />
                </a>
                <a
                  href="https://www.typescriptlang.org"
                  target="_blank"
                  rel="noopener noreferrer nofollow"
                >
                  <Typescript className={scss.icon} />
                </a>
              </div>
            </div>
            <div className={scss.detailsBox}>
              <a
                href={website}
                target="_blank"
                rel="noopener noreferrer nofollow"
              >
                <img
                  className={scss.screenshot}
                  src={screenshot}
                  alt={subtitle}
                  loading="lazy"
                />
              </a>
              <div className={scss.linkBox}>
                <a
                  href={website}
                  target="_blank"
                  rel="noopener noreferrer nofollow"
                >
                  <Website className={scss.icon} />
                </a>
                <a
                  href={code}
                  target="_blank"
                  rel="noopener noreferrer nofollow"
                >
                  <Code className={scss.icon} />
                </a>
              </div>
            </div>
          </div>
        )
      )}
    </div>
  );
};

export default Projects;
