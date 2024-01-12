import useIcons from "../../hooks/useIcons";
import projects from "../../data/projects";
import scss from "./Projects.module.scss";

const Projects = () => {
  const {
    Website,
    Code,
    Vite,
    Typescript,
    React,
    Redux,
    Javascript,
    Sass,
    HTML,
    CSS,
    NodeJs,
    Express,
    Mongodb,
    Mongoose,
    Swagger,
    Database,
  } = useIcons();

  return (
    <div className="container" id="projects">
      {projects.map(
        ({ id, subtitle, name, description, screenshot, website, code }, i) => (
          <div
            className={scss.project}
            key={id}
            data-aos={i % 2 === 0 ? "fade-down-right" : "fade-down-left"}
          >
            <div className={scss.projectInfoWrapper}>
              <div className={scss.infoBox}>
                <p className={scss.subtitle}>{subtitle}</p>
                <h2 className={scss.name}>{name}</h2>
                <p className={scss.description}>{description}</p>
              </div>
              <div style={{ display: "flex", justifyContent: "center" }}>
                <div className={scss.toolsBox}>
                  {name !== "Ice Cream" && (
                    <a
                      href="https://vitejs.dev"
                      target="_blank"
                      rel="noopener noreferrer nofollow"
                    >
                      <Vite className={scss.icon} />
                    </a>
                  )}
                  {name === "Darling Delights" ? (
                    <a
                      href="https://www.typescriptlang.org"
                      target="_blank"
                      rel="noopener noreferrer nofollow"
                    >
                      <Typescript className={scss.icon} />
                    </a>
                  ) : (
                    <a
                      href="https://developer.mozilla.org/en-US/docs/Web/JavaScript"
                      target="_blank"
                      rel="noopener noreferrer nofollow"
                    >
                      <Javascript className={scss.icon} />
                    </a>
                  )}
                  {name !== "Ice Cream" && (
                    <>
                      <a
                        href="https://react.dev"
                        target="_blank"
                        rel="noopener noreferrer nofollow"
                      >
                        <React className={scss.icon} />
                      </a>
                      <a
                        href="https://redux-toolkit.js.org"
                        target="_blank"
                        rel="noopener noreferrer nofollow"
                      >
                        <Redux className={scss.icon} />
                      </a>
                    </>
                  )}
                  {name === "Ice Cream" && (
                    <a
                      href="https://developer.mozilla.org/en-US/docs/Web/HTML"
                      target="_blank"
                      rel="noopener noreferrer nofollow"
                    >
                      <HTML className={scss.icon} />
                    </a>
                  )}
                  {name === "Wallet" ? (
                    <>
                      <a
                        href="https://developer.mozilla.org/en-US/docs/Web/CSS"
                        target="_blank"
                        rel="noopener noreferrer nofollow"
                      >
                        <CSS className={scss.icon} />
                      </a>
                      <a
                        href="https://nodejs.org/en"
                        target="_blank"
                        rel="noopener noreferrer nofollow"
                      >
                        <NodeJs className={scss.icon} />
                      </a>
                      <a
                        href="https://expressjs.com"
                        target="_blank"
                        rel="noopener noreferrer nofollow"
                      >
                        <Express className={scss.icon} />
                      </a>
                      <a
                        href="https://www.mongodb.com/atlas/database"
                        target="_blank"
                        rel="noopener noreferrer nofollow"
                      >
                        <Mongodb className={scss.icon} />
                      </a>
                      <a
                        href="https://mongoosejs.com"
                        target="_blank"
                        rel="noopener noreferrer nofollow"
                      >
                        <Mongoose className={scss.icon} />
                      </a>
                      <a
                        href="https://swagger.io"
                        target="_blank"
                        rel="noopener noreferrer nofollow"
                      >
                        <Swagger className={scss.icon} />
                      </a>
                    </>
                  ) : (
                    <a
                      href="https://sass-lang.com"
                      target="_blank"
                      rel="noopener noreferrer nofollow"
                    >
                      <Sass className={scss.icon} />
                    </a>
                  )}
                </div>
              </div>
              {name === "Wallet" && (
                <ul>
                  <li>
                    <h3>To login, you can use these details:</h3>
                  </li>
                  <li>
                    <p>Email: benek9311@wp.pl</p>
                  </li>
                  <li>
                    <p>Password: Ben100</p>
                  </li>
                </ul>
              )}
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
                {name === "Wallet" && (
                  <a
                    href="https://github.com/benbrzezinski/Goit-Wallet-DB"
                    target="_blank"
                    rel="noopener noreferrer nofollow"
                  >
                    <Database className={scss.icon} />
                  </a>
                )}
              </div>
            </div>
          </div>
        )
      )}
    </div>
  );
};

export default Projects;
