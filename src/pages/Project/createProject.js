import "./createProject.scss";
import NavbarColor from "../../components/Navbar/navbarColor";
import FooterColored from "./../../components/Footer/footerColored";
import Sidebar from "../../components/SideBar/sidebar";

import CreateProjectInformationsForm from "./createProjectInformationsForm";
import CreateProjectTechnologiesForm from "./createProjectTechnologiesForm";
import CreateProjectJobsForm from "./createProjectJobsForm";

// ajout léa
// import { useNavigate } from "react-router-dom";

import { useSelector, useDispatch } from "react-redux";
import { setActiveForm } from "./createProjectSlice";

function CreateProject() {
  const activeForm = useSelector((state) => state.createProject.activeForm);
  const dispatch = useDispatch();

  // const navigate = useNavigate();

  return (
    <Sidebar>
      <div className="project-create">
        {/* <NavbarColor /> */}
        <div className="create-project">
          <div className="create-project-container ">
            <div className="create-project-left">
              <div
                className={
                  activeForm === "informations"
                    ? "create-project-step step-active"
                    : "create-project-step"
                }
              >
                <h2
                  className="create-project-title"
                  onClick={() => dispatch(setActiveForm("informations"))}
                >
                  Informations
                </h2>
                <p className="create-project-desc p-light">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt.
                </p>
              </div>
              <div
                className={
                  activeForm === "technologies"
                    ? "create-project-step step-active"
                    : "create-project-step"
                }
                onClick={() => dispatch(setActiveForm("technologies"))}
              >
                <h2 className="create-project-title">Technologies</h2>
                <p className="create-project-desc p-light">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt.
                </p>
              </div>
              <div
                className={
                  activeForm === "jobs"
                    ? "create-project-step step-active"
                    : "create-project-step"
                }
                onClick={() => dispatch(setActiveForm("jobs"))}
              >
                <h2 className="create-project-title">Profils recherchés</h2>
                <p className="create-project-desc p-light">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt.
                </p>
              </div>
            </div>
            <div className="create-project-right">
              {activeForm === "informations" && (
                <CreateProjectInformationsForm />
              )}
              {activeForm === "technologies" && (
                <CreateProjectTechnologiesForm />
              )}
              {activeForm === "jobs" && <CreateProjectJobsForm />}
            </div>
          </div>
        </div>
      </div>
      <FooterColored />
    </Sidebar>
  );
}

export default CreateProject;
