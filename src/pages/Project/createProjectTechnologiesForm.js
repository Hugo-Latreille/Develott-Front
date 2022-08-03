import "./createProjectTechnologiesForm.scss";
import SearchBarProjects from "./../../components/SearchBar/searchBarTechnologies";
import { useSelector, useDispatch } from "react-redux";
import { removeTechnologyData, setActiveForm } from "./createProjectSlice";
import { useDeleteProjectTechnoMutation } from "../Projects/projectsAPISlice";

function CreateProjectTechnologiesForm() {
  const { projectId, technologiesData } = useSelector(
    (state) => state.createProject
  );
  const [deleteTechnoProject] = useDeleteProjectTechnoMutation();
  const dispatch = useDispatch();

  const languagesData = technologiesData.filter((technology) =>
    technology.tags.includes("language")
  );
  const frameworksData = technologiesData.filter((technology) =>
    technology.tags.includes("framework")
  );
  const databasesData = technologiesData.filter((technology) =>
    technology.tags.includes("database")
  );
  const othersData = technologiesData.filter(
    (technology) =>
      !technology.tags.includes("framework") &&
      !technology.tags.includes("language") &&
      !technology.tags.includes("database")
  );

  return (
    <div className="form-technologies">
      <SearchBarProjects className="navbar-searchbar" />
      <span className="form-technologies-disclaimer">
        Veuillez renseigner les technologies souhaitées pour mener à bien votre
        projet via le champs ci-dessus. Une fois toutes les technologies
        ajoutées, veuillez passer à l'étape suivante.{" "}
      </span>
      <div className="form-technologies-container form-technologies-container-70">
        <div className="form-technologies-container-content">
          <h3 className="form-technologies-title">Languages</h3>
          {languagesData.length === 0 && (
            <p className="form-technologies-empty">vide...</p>
          )}
          {languagesData.map((techno) => (
            <div key={techno.name} className="form-technologies-items">
              <span className="technologies-icon-container width-80">
                <i
                  className={`devicon-${techno.name}-plain`}
                  style={{ backgroundColor: `${techno.color}` }}
                ></i>
                {techno.name}
                <i
                  className="fal fa-backspace form-technologies-delete"
                  onClick={() => {
                    deleteTechnoProject({
                      id: projectId,
                      techno: techno.name,
                    });
                    dispatch(removeTechnologyData(techno.name));
                  }}
                  style={{ color: "black" }}
                ></i>
              </span>
            </div>
          ))}
        </div>
        <div className="form-technologies-container-content">
          <h3 className="form-technologies-title">Frameworks</h3>
          {frameworksData.length === 0 && (
            <p className="form-technologies-empty">vide...</p>
          )}
          {frameworksData.map((techno) => (
            <div key={techno.name} className="form-technologies-items">
              <span className="technologies-icon-container width-80">
                <i
                  className={`devicon-${techno.name}-plain`}
                  style={{ backgroundColor: `${techno.color}` }}
                ></i>
                {techno.name}
                <i
                  className="fal fa-backspace form-technologies-delete"
                  onClick={() => {
                    deleteTechnoProject({
                      id: projectId,
                      techno: techno.name,
                    });
                    dispatch(removeTechnologyData(techno.name));
                  }}
                  style={{ color: "black" }}
                ></i>
              </span>
            </div>
          ))}
        </div>
        <div className="form-technologies-container-content">
          <h3 className="form-technologies-title">Base de donnée</h3>
          {databasesData.length === 0 && (
            <p className="form-technologies-empty">vide...</p>
          )}
          {databasesData.map((techno) => (
            <div key={techno.name} className="form-technologies-items">
              <span className="technologies-icon-container width-80">
                <i
                  className={`devicon-${techno.name}-plain`}
                  style={{ backgroundColor: `${techno.color}` }}
                ></i>
                {techno.name}
                <i
                  className="fal fa-backspace form-technologies-delete"
                  onClick={() => {
                    deleteTechnoProject({
                      id: projectId,
                      techno: techno.name,
                    });
                    dispatch(removeTechnologyData(techno.name));
                  }}
                  style={{ color: "black" }}
                ></i>
              </span>
            </div>
          ))}
        </div>
        <div className="form-technologies-container-content">
          <h3 className="form-technologies-title">Divers</h3>
          {othersData.length === 0 && (
            <p className="form-technologies-empty">vide...</p>
          )}
          {othersData.map((techno) => (
            <div key={techno.name} className="form-technologies-items">
              <span className="technologies-icon-container width-80">
                <i
                  class={`devicon-${techno.name}-plain`}
                  style={{ backgroundColor: `${techno.color}` }}
                ></i>
                {techno.name}
                <i
                  className="fal fa-backspace form-technologies-delete"
                  onClick={() => {
                    deleteTechnoProject({
                      id: projectId,
                      techno: techno.name,
                    });
                    dispatch(removeTechnologyData(techno.name));
                  }}
                  style={{ color: "black" }}
                ></i>
              </span>
            </div>
          ))}
        </div>
      </div>
      <button
        type="button"
        className="main-button-colored create-project-button"
        onClick={() => dispatch(setActiveForm("jobs"))}
      >
        Valider
      </button>
    </div>
  );
}

export default CreateProjectTechnologiesForm;
