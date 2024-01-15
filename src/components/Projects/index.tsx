import { useMediaQuery } from "react-responsive";
import PostsCarousel from "../PostsCarousel";
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
    Expo,
    ReactNative,
    Firebase,
  } = useIcons();
  const isMobileScreen = useMediaQuery({ query: "(max-width: 768px)" });

  return (
    <div className="container" id="projects">
      {projects.map(
        (
          { id, subtitle, name, description, screenshots, website, code },
          i
        ) => (
          <div
            className={scss.project}
            key={id}
            data-aos={
              isMobileScreen
                ? "fade-up"
                : i % 2 === 0
                ? "fade-up-right"
                : "fade-up-left"
            }
          >
            <div className={scss.projectInfoWrapper}>
              <div className={scss.infoBox}>
                <p className={scss.subtitle}>{subtitle}</p>
                <h2 className={scss.name}>{name}</h2>
                <p className={scss.description}>{description}</p>
              </div>
              <div style={{ display: "flex", justifyContent: "center" }}>
                <div className={scss.toolsBox}>
                  {name === "Darling Delights" && (
                    <>
                      <a
                        href="https://vitejs.dev"
                        target="_blank"
                        rel="noopener noreferrer nofollow"
                      >
                        <Vite className={scss.icon} />
                      </a>
                      <a
                        href="https://www.typescriptlang.org"
                        target="_blank"
                        rel="noopener noreferrer nofollow"
                      >
                        <Typescript className={scss.icon} />
                      </a>
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
                      <a
                        href="https://sass-lang.com"
                        target="_blank"
                        rel="noopener noreferrer nofollow"
                      >
                        <Sass className={scss.icon} />
                      </a>
                    </>
                  )}
                  {name === "Wallet" && (
                    <>
                      <a
                        href="https://vitejs.dev"
                        target="_blank"
                        rel="noopener noreferrer nofollow"
                      >
                        <Vite className={scss.icon} />
                      </a>
                      <a
                        href="https://developer.mozilla.org/en-US/docs/Web/JavaScript"
                        target="_blank"
                        rel="noopener noreferrer nofollow"
                      >
                        <Javascript className={scss.icon} />
                      </a>
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
                  )}
                  {name === "Ice Cream" ||
                  name === "Filmoteka" ||
                  name === "WebStudio" ? (
                    <>
                      <a
                        href="https://developer.mozilla.org/en-US/docs/Web/JavaScript"
                        target="_blank"
                        rel="noopener noreferrer nofollow"
                      >
                        <Javascript className={scss.icon} />
                      </a>
                      <a
                        href="https://developer.mozilla.org/en-US/docs/Web/HTML"
                        target="_blank"
                        rel="noopener noreferrer nofollow"
                      >
                        <HTML className={scss.icon} />
                      </a>
                      <a
                        href="https://sass-lang.com"
                        target="_blank"
                        rel="noopener noreferrer nofollow"
                      >
                        <Sass className={scss.icon} />
                      </a>
                    </>
                  ) : null}
                  {name === "Posts" && (
                    <>
                      <a
                        href="https://expo.dev"
                        target="_blank"
                        rel="noopener noreferrer nofollow"
                      >
                        <Expo className={scss.icon} />
                      </a>
                      <a
                        href="https://www.typescriptlang.org"
                        target="_blank"
                        rel="noopener noreferrer nofollow"
                      >
                        <Typescript className={scss.icon} />
                      </a>
                      <a
                        href="https://reactnative.dev"
                        target="_blank"
                        rel="noopener noreferrer nofollow"
                      >
                        <ReactNative className={scss.icon} />
                      </a>
                      <a
                        href="https://redux-toolkit.js.org"
                        target="_blank"
                        rel="noopener noreferrer nofollow"
                      >
                        <Redux className={scss.icon} />
                      </a>
                      <a
                        href="https://firebase.google.com"
                        target="_blank"
                        rel="noopener noreferrer nofollow"
                      >
                        <Firebase className={scss.icon} />
                      </a>
                    </>
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
              {name === "Posts" ? (
                <PostsCarousel />
              ) : (
                <a
                  href={website}
                  target="_blank"
                  rel="noopener noreferrer nofollow"
                >
                  <img
                    className={scss.screenshot}
                    src={screenshots[0]}
                    alt={subtitle}
                    loading="lazy"
                  />
                </a>
              )}
              <div className={scss.linkBox}>
                {name !== "Posts" && (
                  <a
                    href={website}
                    target="_blank"
                    rel="noopener noreferrer nofollow"
                  >
                    <Website className={scss.icon} />
                  </a>
                )}
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
