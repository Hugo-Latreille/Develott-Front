import "./createProjectTechnologiesForm.scss";

import InputProject from "../../components/Input/ProjectInput";
import SearchBarProjects from "./../../components/SearchBar/searchBarTechnologies";

import { useState } from "react";

function CreateProjectTechnologiesForm() {
  const [technologiesData, setTechnologiesData] = useState([]);

  const handleEditTechnologiesData = (item) => {
    console.log("coucou");
    setTechnologiesData([...technologiesData, item]);
  };

  const languagesData = technologiesData.filter((technology) =>
    technology.tags.includes("language")
  );

  const frameworksData = technologiesData.filter((technology) =>
    technology.tags.includes("framework")
  );

  const othersData = technologiesData.filter(
    (technology) =>
      !technology.tags.includes("framework") &&
      !technology.tags.includes("language")
  );

  return (
    <div className="form-technologies">
      <SearchBarProjects
        technologiesArray={technologiesData}
        handleTechnologies={handleEditTechnologiesData}
        className="navbar-searchbar"
      />
      <span className="form-technologies-disclaimer">
        Veuillez renseigner les technologies souhaitées pour mener à bien votre
        projet via le champs ci-dessus. Une fois toutes les technologies
        ajoutées, veuillez passer à l'étape suivante.{" "}
      </span>
      <div className="form-technologies-container form-technologies-container-70">
        <div className="form-technologies-container-content">
          <h3 className="form-technologies-title">Languages</h3>
          {languagesData.length === 0 && (
            <span className="form-technologies-empty">vide...</span>
          )}
          {languagesData.map((techno) => (
            <div className="form-technologies-items">
              <p>
                <i className={`devicon-${techno.name}-plain colored`}></i>{" "}
                {techno.name}
              </p>
              <i className="fal fa-backspace form-technologies-delete"></i>
            </div>
          ))}
        </div>
        <div className="form-technologies-container-content">
          <h3 className="form-technologies-title">Frameworks</h3>
          {frameworksData.length === 0 && (
            <span className="form-technologies-empty">vide...</span>
          )}
          {frameworksData.map((techno) => (
            <div className="form-technologies-items">
              <p>
                <i className={`devicon-${techno.name}-plain colored`}></i>{" "}
                {techno.name}
              </p>
              <i className="fal fa-backspace form-technologies-delete"></i>
            </div>
          ))}
        </div>
        <div className="form-technologies-container-content">
          <h3 className="form-technologies-title">Divers</h3>
          {othersData.length === 0 && (
            <span className="form-technologies-empty">vide...</span>
          )}
          {othersData.map((techno) => (
            <div className="form-technologies-items">
              <p>
                <i className={`devicon-${techno.name}-plain colored`}></i>{" "}
                {techno.name}
              </p>
              <i className="fal fa-backspace form-technologies-delete"></i>
            </div>
          ))}
        </div>
      </div>
      <button
        type="submit"
        className="main-button-colored create-project-button"
      >
        Valider
      </button>
    </div>
  );
}

export default CreateProjectTechnologiesForm;
