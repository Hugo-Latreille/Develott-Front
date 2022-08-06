import "./createProject.scss";
// import NavbarColor from "../../components/Navbar/navbarColor";
import FooterColored from "./../../components/Footer/footerColored";
import Sidebar from "../../components/SideBar/sidebar";

import CreateProjectInformationsForm from "./createProjectInformationsForm";
import CreateProjectTechnologiesForm from "./createProjectTechnologiesForm";
import CreateProjectJobsForm from "./createProjectJobsForm";
import { useSelector, useDispatch } from "react-redux";
import { setActiveForm } from "./createProjectSlice";
//React Toastify
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useFindUserByEmailQuery } from "../Login/authAPISlice";
import { useGetAllProjectsQuery } from "../Projects/projectsAPISlice";
import { useEffect } from "react";

function CreateProject() {
	const dispatch = useDispatch();
	const { activeForm } = useSelector((state) => state.createProject);
	const { email } = useSelector((state) => state.auth);
	const { data: userInfos } = useFindUserByEmailQuery(email);
	const { data: projectsTeams } = useGetAllProjectsQuery();

	const isUserAlreadyParticipant = projectsTeams?.teams.some(
		(team) =>
			team?.customer_id === userInfos?.id &&
			(team?.role === "participants" || team?.role === "admin")
	);

	useEffect(() => {
		if (
			isUserAlreadyParticipant &&
			userInfos?.id !== 16 &&
			activeForm === "informations"
		) {
			toast.error("Vous ne pouvez participer qu'à un seul projet");
		}
	}, [isUserAlreadyParticipant]);

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
								<CreateProjectInformationsForm
									isUserAlreadyParticipant={isUserAlreadyParticipant}
								/>
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
			<ToastContainer
				position="top-right"
				autoClose={5000}
				hideProgressBar={false}
				newestOnTop={false}
				closeOnClick
				rtl={false}
				pauseOnFocusLoss
				draggable
				pauseOnHover
			/>
		</Sidebar>
	);
}

export default CreateProject;
