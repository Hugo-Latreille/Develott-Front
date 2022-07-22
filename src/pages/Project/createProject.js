import "./createProject.scss";
import NavbarColor from "../../components/Navbar/navbarColor";
import FooterColored from "./../../components/Footer/footerColored";

import InputProject from "../../components/Input/ProjectInput";

// ajout léa
import { useNavigate } from "react-router-dom";

function CreateProject() {
  //ajout léa
  const navigate = useNavigate();

  return (
    <>
      <NavbarColor />
      <div className="create-project">
        <form className="form-informations container">
          <div className="form-informations-container ">
            <div className="form-left">
              <h2 className="form-title">Informations</h2>
              <p className="p-light">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt.
              </p>
            </div>
            <div className="form-right">
              <InputProject name="email" label="Nom du projet" />
              <InputProject name="email" label="Description courte" />
              <div className="form-right-container">
                <InputProject
                  name="email"
                  label="Lancement du projet"
                  className="form-right-container-left"
                />
                <InputProject
                  name="email"
                  label="Date de fin du projet"
                  className="form-right-container-right"
                />
              </div>
            </div>
          </div>
        </form>
      </div>
      <FooterColored />
    </>
  );
}

export default CreateProject;
