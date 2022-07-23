import "./createProject.scss";
import NavbarColor from "../../components/Navbar/navbarColor";
import FooterColored from "./../../components/Footer/footerColored";

import CreateProjectInformationsForm from "./createProjectInformationsForm";
import CreateProjectTechnologiesForm from "./createProjectTechnologiesForm";
import CreateProjectJobsForm from "./createProjectJobsForm";

// ajout léa
import { useNavigate } from "react-router-dom";
import { useState } from "react";

function CreateProject() {
  //ajout léa
  const navigate = useNavigate();

  const [activeForm, setActiveForm] = useState("informations");

  const handleDisplayInformationsForm = () => {
    setActiveForm("informations");
  };

  const handleDisplayTechnologiesForm = () => {
    setActiveForm("technologies");
  };

  const handleDisplayJobsForm = () => {
    setActiveForm("jobs");
  };

  return (
    <>
      <NavbarColor />
      <div className="create-project container">
        <div className="create-project-container ">
          <div className="create-project-left">
            <div className="create-project-step">
              <h2
                className="create-project-title"
                onClick={handleDisplayInformationsForm}
              >
                Informations
              </h2>
              <p className="create-project-desc p-light">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt.
              </p>
            </div>
            <div
              className="create-project-step"
              onClick={handleDisplayTechnologiesForm}
            >
              <h2 className="create-project-title">Technologies</h2>
              <p className="create-project-desc p-light">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt.
              </p>
            </div>
            <div
              className="create-project-step"
              onClick={handleDisplayJobsForm}
            >
              <h2 className="create-project-title">Profils recherchés</h2>
              <p className="create-project-desc p-light">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt.
              </p>
            </div>
          </div>
          <div className="create-project-right">
            {activeForm === "informations" && <CreateProjectInformationsForm />}
            {activeForm === "technologies" && <CreateProjectTechnologiesForm />}
            {activeForm === "jobs" && <CreateProjectJobsForm />}
          </div>
        </div>
      </div>
      <FooterColored />
    </>
  );
}

export default CreateProject;
