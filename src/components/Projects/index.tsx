import { useMediaQuery } from "react-responsive";
import ProjectInfo from "../ProjectInfo";
import DetailsBox from "../DetailsBox";
import projects from "../../data/projects";
import scss from "./Projects.module.scss";

const Projects = () => {
  const isMobileScreen = useMediaQuery({ query: "(max-width: 768px)" });

  return (
    <div style={{ overflowX: "clip" }}>
      <div className={`container ${scss.wrapper}`} id="projects">
        <h2 className={scss.title} data-aos="fade-up">
          Projects
        </h2>
        {projects.map(
          (
            { id, subtitle, name, description, screenshots, website, code },
            i,
          ) => (
            <div
              className={scss.project}
              key={id}
              data-aos={i % 2 === 0 ? "fade-up-right" : "fade-up-left"}
            >
              <ProjectInfo
                subtitle={subtitle}
                name={name}
                description={description}
                website={website}
              />
              <DetailsBox
                name={name}
                subtitle={subtitle}
                screenshots={screenshots}
                website={website}
                code={code}
                isMobileScreen={isMobileScreen}
              />
            </div>
          ),
        )}
      </div>
    </div>
  );
};

export default Projects;
