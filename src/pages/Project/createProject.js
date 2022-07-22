import "./createProject.scss";
import NavbarColor from "../../components/Navbar/navbarColor";
import FooterColored from "./../../components/Footer/footerColored";

import CreateProjectInformationsForm from "./createProjectInformationsForm";
import CreateProjectTechnologiesForm from "./createProjectTechnologiesForm";

// ajout léa
import { useNavigate } from "react-router-dom";

function CreateProject() {
  //ajout léa
  const navigate = useNavigate();

  return (
    <>
      <NavbarColor />
      <div className="create-project container">
        <div className="create-project-container ">
          <div className="create-project-left">
            <div className="create-project-step">
              <h2 className="create-project-title">Informations</h2>
              <p className="create-project-desc p-light">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt.
              </p>
            </div>
            <div className="create-project-step">
              <h2 className="create-project-title">Technologies</h2>
              <p className="create-project-desc p-light">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt.
              </p>
            </div>
            <div className="create-project-step">
              <h2 className="create-project-title">Profils recherchés</h2>
              <p className="create-project-desc p-light">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt.
              </p>
            </div>
          </div>
          <div className="create-project-right">
            <CreateProjectTechnologiesForm />
          </div>
        </div>
      </div>
      <FooterColored />
    </>
  );
}

export default CreateProject;
