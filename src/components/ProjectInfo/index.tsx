import ToolsBox from "../ToolsBox";
import scss from "./ProjectInfo.module.scss";

interface ProjectInfoProps {
  subtitle: string;
  name: string;
  description: string;
  website: string;
}

const ProjectInfo = ({
  subtitle,
  name,
  description,
  website,
}: ProjectInfoProps) => {
  return (
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
        <ToolsBox name={name} />
      </div>
    </div>
  );
};

export default ProjectInfo;
