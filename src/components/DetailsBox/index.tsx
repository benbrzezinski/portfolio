import { useState, useRef } from "react";
import { toast } from "react-toastify";
import { nanoid } from "nanoid";
import PostsCarousel from "../PostsCarousel";
import useIcons from "../../hooks/useIcons";
import scss from "./DetailsBox.module.scss";

interface DetailsBoxProps {
  name: string;
  subtitle: string;
  screenshots: string[];
  website: string;
  code: string;
  isMobileScreen: boolean;
}

const DetailsBox = ({
  name,
  subtitle,
  screenshots,
  website,
  code,
  isMobileScreen,
}: DetailsBoxProps) => {
  const ID = useRef({
    toast_success: nanoid(),
    toast_error: nanoid(),
  });
  const [detailsOpen, setDetailsOpen] = useState(false);
  const emailRef = useRef<HTMLParagraphElement | null>(null);
  const passwordRef = useRef<HTMLParagraphElement | null>(null);
  const { Website, Code, Database, NotificationImportant, Copy } = useIcons();

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
    <div className={scss.detailsBox}>
      {name === "Wallet" && (
        <>
          <button
            className={
              detailsOpen ? `${scss.notifyBtn} ${scss.left}` : scss.notifyBtn
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
        <a href={website} target="_blank" rel="noopener noreferrer nofollow">
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
  );
};

export default DetailsBox;
