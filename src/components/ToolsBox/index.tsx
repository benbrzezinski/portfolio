import useIcons from "../../hooks/useIcons";
import scss from "./ToolsBox.module.scss";

interface ToolsBoxProps {
  name: string;
}

const ToolsBox = ({ name }: ToolsBoxProps) => {
  const {
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
    Expo,
    ReactNative,
    Firebase,
    NextJs,
    Vitest,
    TailwindCSS,
  } = useIcons();

  return (
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
      {name === "Love Matcher" && (
        <>
          <a
            href="https://nextjs.org"
            target="_blank"
            rel="noopener noreferrer nofollow"
          >
            <NextJs className={scss.icon} />
          </a>
          <a
            href="https://www.typescriptlang.org"
            target="_blank"
            rel="noopener noreferrer nofollow"
          >
            <Typescript className={scss.icon} />
          </a>
          <a
            href="https://vitest.dev"
            target="_blank"
            rel="noopener noreferrer nofollow"
          >
            <Vitest className={scss.icon} />
          </a>
          <a
            href="https://tailwindcss.com"
            target="_blank"
            rel="noopener noreferrer nofollow"
          >
            <TailwindCSS className={scss.icon} />
          </a>
        </>
      )}
      {name === "Ice Cream" || name === "Filmoteka" || name === "WebStudio" ? (
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
  );
};

export default ToolsBox;
