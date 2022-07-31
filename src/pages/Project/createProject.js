import "./createProject.scss";
// import NavbarColor from "../../components/Navbar/navbarColor";
import FooterColored from "./../../components/Footer/footerColored";
import Sidebar from "../../components/SideBar/sidebar";

import CreateProjectInformationsForm from "./createProjectInformationsForm";
import CreateProjectTechnologiesForm from "./createProjectTechnologiesForm";
import CreateProjectJobsForm from "./createProjectJobsForm";
import { useSelector, useDispatch } from "react-redux";
import { emptyForm, setActiveForm } from "./createProjectSlice";
import { usePostProjectMutation } from "../Projects/projectsAPISlice";
import { useNavigate } from "react-router-dom";

function CreateProject() {
	const dispatch = useDispatch();
	const navigate = useNavigate();
	const {
		activeForm,
		picture_project,
		name,
		exerpt,
		description,
		start_date,
		end_date,
		technologiesData,
		jobsData,
	} = useSelector((state) => state.createProject);
	const [postProject] = usePostProjectMutation();

	const postNewProject = (e) => {
		e.preventDefault();
		postProject({
			name,
			exerpt,
			description,
			picture_project,
			start_date,
			end_date,
		});
		dispatch(emptyForm());
		// navigate("/projets", { replace: true });
	};

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
							<form onSubmit={postNewProject}>
								{activeForm === "informations" && (
									<CreateProjectInformationsForm />
								)}
								{activeForm === "technologies" && (
									<CreateProjectTechnologiesForm />
								)}
								{activeForm === "jobs" && <CreateProjectJobsForm />}
							</form>
						</div>
					</div>
				</div>
			</div>
			<FooterColored />
		</Sidebar>
	);
}

export default CreateProject;
