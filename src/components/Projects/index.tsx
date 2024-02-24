import { useState, useRef } from "react";
import { useMediaQuery } from "react-responsive";
import { toast } from "react-toastify";
import { nanoid } from "nanoid";
import PostsCarousel from "../PostsCarousel";
import useIcons from "../../hooks/useIcons";
import projects from "../../data/projects";
import scss from "./Projects.module.scss";

const Projects = () => {
  const ID = useRef({
    toast_success: nanoid(),
    toast_error: nanoid(),
  });
  const [detailsOpen, setDetailsOpen] = useState(false);
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
    NotificationImportant,
    Copy,
  } = useIcons();
  const emailRef = useRef<HTMLParagraphElement | null>(null);
  const passwordRef = useRef<HTMLParagraphElement | null>(null);
  const isMobileScreen = useMediaQuery({ query: "(max-width: 768px)" });

  const closeDetails = () => {
    setDetailsOpen(false);
    document.removeEventListener("click", closeDetails);
  };

  const openDetails = () => {
    setDetailsOpen(true);
    setTimeout(() => {
      document.addEventListener("click", closeDetails);
    }, 0);
  };

  const copyToClipboard = () => {
    if (emailRef.current && passwordRef.current) {
      const email = emailRef.current.innerText.split(" ")[1];
      const password = passwordRef.current.innerText.split(" ")[1];

      navigator.clipboard
        .writeText(`${email} ${password}`)
        .then(() =>
          toast.success("Login details copied", {
            toastId: ID.current.toast_success,
          })
        )
        .catch(() =>
          toast.error("Failed to copy login details", {
            toastId: ID.current.toast_error,
          })
        );
    }
  };

  return (
    <div className={`container ${scss.wrapper}`} id="projects">
      <h2 className={scss.title} data-aos="fade-up">
        Projects
      </h2>
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
                <a
                  href={website}
                  target="_blank"
                  rel="noopener noreferrer nofollow"
                  className={scss.name}
                >
                  {name}
                </a>
                <p className={scss.description}>{description}</p>
              </div>
              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                }}
              >
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
            </div>
            <div className={scss.detailsBox}>
              {name === "Wallet" && (
                <>
                  <button
                    className={
                      detailsOpen
                        ? `${scss.notifyBtn} ${scss.left}`
                        : scss.notifyBtn
                    }
                    type="button"
                    title="Login Details"
                    onClick={openDetails}
                  >
                    <NotificationImportant className={scss.notify} />
                  </button>
                  <ul
                    className={
                      detailsOpen ? scss.details : `${scss.details} ${scss.up}`
                    }
                    style={{ padding: isMobileScreen ? 15 : 20 }}
                  >
                    <li>
                      <h3 className={scss.detailsTitle}>
                        To login, you can use these details
                      </h3>
                    </li>
                    <li>
                      <p className={scss.detailsText} ref={emailRef}>
                        Email: benek9311@wp.pl
                      </p>
                    </li>
                    <li>
                      <p className={scss.detailsText} ref={passwordRef}>
                        Password: Ben100
                      </p>
                    </li>
                    <li
                      style={{
                        position: "absolute",
                        bottom: isMobileScreen ? 15 : 20,
                        right: isMobileScreen ? 15 : 20,
                        cursor: "pointer",
                      }}
                      title="Copy"
                      onClick={copyToClipboard}
                    >
                      <Copy className={scss.icon} />
                    </li>
                  </ul>
                </>
              )}
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
                    title="Website"
                  >
                    <Website className={scss.icon} />
                  </a>
                )}
                <a
                  href={code}
                  target="_blank"
                  rel="noopener noreferrer nofollow"
                  title="Code"
                >
                  <Code className={scss.icon} />
                </a>
                {name === "Wallet" && (
                  <a
                    href="https://github.com/benbrzezinski/Goit-Wallet-DB"
                    target="_blank"
                    rel="noopener noreferrer nofollow"
                    title="Database"
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
