import "./createProject.scss";
import NavbarColor from "../../components/Navbar/navbarColor";
import FooterColored from "./../../components/Footer/footerColored";

import CreateProjectInformationsForm from "./createProjectInformationsForm";
// import InputProject from "../../components/Input/ProjectInput";

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
            <h2 className="create-project-title">Informations</h2>
            <p className="p-light">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt.
            </p>
          </div>
          <div className="create-project-right">
            <CreateProjectInformationsForm />
          </div>
        </div>
      </div>
      <FooterColored />
    </>
  );
}

export default CreateProject;
