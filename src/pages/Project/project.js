/* eslint-disable jsx-a11y/img-redundant-alt */
import "./project.scss";
import { AdapterMoment } from "@mui/x-date-pickers/AdapterMoment";
import moment from "moment/min/moment-with-locales";
import FooterColored from "./../../components/Footer/footerColored";
import Sidebar from "../../components/SideBar/sidebar";
import SearchBarTechnologies from "../../components/SearchBar/searchBarTechnologiesProject";
import SearchBarJobsProject from "../../components/SearchBar/searchBarJobsProject";
import { Editor } from "react-draft-wysiwyg";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import { useSelector, useDispatch } from "react-redux";
import {
	setDisplayEditDescription,
	setDisplayAllDescription,
	setDisplayEditTechnologies,
	setDisplayEditJobs,
	removeJobData,
	removeTechnologyData,
} from "./showProjectSlice";
import { useParams } from "react-router-dom";
import { useGetOneProjectQuery } from "../Projects/projectsAPISlice";

function Project() {
	const { projectId } = useParams();

	const { data: project } = useGetOneProjectQuery(projectId);
	console.log(projectId);
	console.log(project);

	const dispatch = useDispatch();
	const {
		displayEditDescriptionForm,
		displayEditTechnologies,
		displayEditJobForm,
		adaptDescriptionContainer,
		technologiesData,
		jobsData,
	} = useSelector((state) => state.showProject);

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
		<>
			<Sidebar>
				<div className="project">
					<div className="project-container ">
						<div className="project-container-left">
							<img
								src="https://img.freepik.com/free-psd/artist-room-decorated-with-website-mockup_23-2148834377.jpg?t=st=1657989378~exp=1657989978~hmac=c9b385a472b91f3ed478c556c5a221c200aca1532704a909e7bcc8c23b110003&w=900"
								className="project-img"
								alt="Projet image"
							/>
							<div className="project-user">
								<img
									className="slider-avatar"
									src="https://www.pngall.com/wp-content/uploads/12/Avatar-Profile.png"
									alt="User profile image"
								/>
								<p className="project-user-name">Uller Mr</p>
								<div className="project-user-links">
									<p>
										<i className="fab fa-github"></i>
									</p>
									<p>
										<i className="fab fa-linkedin"></i>
									</p>
									<p>
										<i className="fas fa-laptop-code"></i>
									</p>
								</div>
							</div>
							<div className="project-jobs">
								{displayEditJobForm === false && (
									<>
										<div className="project-description-container">
											<h3 className="project-jobs-title">
												Profil(s) recherché(s)
											</h3>
											<span onClick={() => dispatch(setDisplayEditJobs())}>
												<i className="fas fa-edit"></i>
											</span>
										</div>
										<div className="project-jobs-container">
											{jobsData.map((job) => (
												<p>
													<i className="fas fa-check-circle success"></i>{" "}
													{job.name}
												</p>
											))}
										</div>
									</>
								)}
								{displayEditJobForm === true && (
									<div className="project-jobs-container">
										<SearchBarJobsProject className="searchbar-project-container-searchbar" />
										{jobsData.map((job) => (
											<div className="project-jobs-container-job">
												<p>
													<i className="fas fa-check-circle success"></i>
													{job.name}
												</p>
												<span onClick={() => dispatch(removeJobData(job.id))}>
													<i className="far fa-backspace cursor-pointer"></i>
												</span>
											</div>
										))}
										<span>
											<button
												className="main-button-colored"
												onClick={() => dispatch(setDisplayEditJobs())}
											>
												Valider
											</button>
										</span>
									</div>
								)}
							</div>
							<div className="project-dates">
								<h3 className="project-jobs-title">Dates du projet</h3>
								<p>
									<i className="far fa-calendar-check success"></i> Début :{" "}
									{moment(project?.start_date).locale("fr").format("LL")}
								</p>
								<p>
									<i className="far fa-calendar-check success"></i> Fin :{" "}
									{moment(project?.end_date).locale("fr").format("LL")}
								</p>
								<p>
									<i className="far fa-calendar-exclamation warning"></i> Durée
									:
									{moment(project?.end_date)
										.locale("fr")
										.diff(
											moment(project?.start_date).locale("fr"),
											"weeks"
										)}{" "}
									semaines
								</p>
							</div>
						</div>
						<div className="project-container-right">
							<div className="project-header">
								<div className="project-header-left">
									<h1 className="project-header-title">{project?.name}</h1>
									<p className="project-header-short-desc">{project?.exerpt}</p>
								</div>
								<div className="project-header-right">
									<button className="main-button-bg-white">
										{" "}
										Postuler <i className="far fa-rocket"></i>
									</button>
								</div>
							</div>
							<div
								className="project-description"
								style={
									adaptDescriptionContainer === true
										? { minHeight: "39vh", overflowY: "scroll" }
										: {}
								}
							>
								{displayEditDescriptionForm === false && (
									<>
										<div className="project-description-container">
											<h2 className="project-description-title">
												Description du projet
											</h2>
											<span
												onClick={() => dispatch(setDisplayEditDescription())}
											>
												<i className="fas fa-edit"></i>
											</span>
										</div>
										<p className="project-description-desc">
											{project?.description}
										</p>
										{adaptDescriptionContainer === false && (
											<span
												className="project-description-see-more"
												onClick={() => dispatch(setDisplayAllDescription())}
											>
												Voir plus...
											</span>
										)}
										{adaptDescriptionContainer === true && (
											<span
												className="project-description-see-more"
												onClick={() => dispatch(setDisplayAllDescription())}
											>
												Voir Moins...
											</span>
										)}
									</>
								)}
								{displayEditDescriptionForm === true && (
									<div className="project-texte-editor">
										<Editor
											wrapperClassName="wrapper-class"
											editorClassName="editor-class"
											toolbarClassName="toolbar-class"
											toolbar={{
												options: [
													"inline",
													"blockType",
													"fontSize",
													"list",
													"textAlign",
													"colorPicker",
													"link",
													"emoji",
													"history",
												],
												inline: { inDropdown: true },
												list: { inDropdown: true },
												textAlign: { inDropdown: true },
												link: { inDropdown: false },
												image: { component: undefined },
												blockType: {
													inDropdown: true,
													options: ["Normal", "Blockquote", "Code"],
													className: undefined,
													component: undefined,
													dropdownClassName: undefined,
												},
											}}
										/>
										<button
											type="button"
											className="main-button-colored create-project-button"
											onClick={() => dispatch(setDisplayEditDescription())}
										>
											Valider
										</button>
									</div>
								)}
							</div>
							<div
								className="project-technologies"
								style={
									adaptDescriptionContainer === true
										? { minHeight: "20vh", overflowY: "scroll" }
										: {}
								}
							>
								{displayEditTechnologies === false && (
									<>
										<div className="project-technologies-languages">
											<h4>Langages</h4>
											{languagesData.length === 0 && (
												<span className="form-technologies-empty">vide...</span>
											)}
											{languagesData.map((techno) => (
												<span className="technologies-icon-container">
													<i
														className={`devicon-${techno.name}-plain`}
														style={{ backgroundColor: `${techno.color}` }}
													></i>
													{techno.name}
												</span>
											))}
										</div>
										<div className="project-technologies-frameworks">
											<h4>Frameworks</h4>
											{frameworksData.length === 0 && (
												<span className="form-technologies-empty">vide...</span>
											)}
											{frameworksData.map((techno) => (
												<span className="technologies-icon-container">
													<i
														className={`devicon-${techno.name}-plain`}
														style={{ backgroundColor: `${techno.color}` }}
													></i>
													{techno.name}
												</span>
											))}
										</div>
										<div className="project-technologies-database">
											<h4>Base de donnée</h4>
											{databasesData.length === 0 && (
												<span className="form-technologies-empty">vide...</span>
											)}
											{databasesData.map((techno) => (
												<span className="technologies-icon-container">
													<i
														className={`devicon-${techno.name}-plain`}
														style={{ backgroundColor: `${techno.color}` }}
													></i>
													{techno.name}
												</span>
											))}
										</div>
										<div className="project-technologies-others">
											<h4>Autres</h4>
											{othersData.length === 0 && (
												<span className="form-technologies-empty">vide...</span>
											)}
											{othersData.map((techno) => (
												<span className="technologies-icon-container">
													<i
														className={`devicon-${techno.name}-plain`}
														style={{ backgroundColor: `${techno.color}` }}
													></i>
													{techno.name}
												</span>
											))}
										</div>
										<div className="project-technologies-edit">
											<span
												onClick={() => dispatch(setDisplayEditTechnologies())}
											>
												<i className="fas fa-edit"></i>
											</span>
										</div>
									</>
								)}
								{displayEditTechnologies === true && (
									<>
										<div className="width-100 margin-bottom1">
											<SearchBarTechnologies />
										</div>
										<div className="project-technologies-languages">
											<h4>Langages</h4>
											{languagesData.length === 0 && (
												<span className="form-technologies-empty">vide...</span>
											)}
											{languagesData.map((techno) => (
												<div
													key={techno.name}
													className="form-technologies-items"
												>
													<p className="margin0">
														<i
															className={`devicon-${techno.name}-plain colored`}
														></i>{" "}
														{techno.name}
													</p>
													<i
														className="fal fa-backspace form-technologies-delete"
														onClick={() =>
															dispatch(removeTechnologyData(techno.name))
														}
													></i>
												</div>
											))}
										</div>
										<div className="project-technologies-frameworks">
											<h4>Frameworks</h4>
											{frameworksData.length === 0 && (
												<span className="form-technologies-empty">vide...</span>
											)}
											{frameworksData.map((techno) => (
												<div
													key={techno.name}
													className="form-technologies-items"
												>
													<p className="margin0">
														<i
															className={`devicon-${techno.name}-plain colored`}
														></i>{" "}
														{techno.name}
													</p>
													<i
														className="fal fa-backspace form-technologies-delete"
														onClick={() =>
															dispatch(removeTechnologyData(techno.name))
														}
													></i>
												</div>
											))}
										</div>
										<div className="project-technologies-database">
											<h4>Base de donnée</h4>
											{databasesData.length === 0 && (
												<span className="form-technologies-empty">vide...</span>
											)}
											{databasesData.map((techno) => (
												<div
													key={techno.name}
													className="form-technologies-items"
												>
													<p className="margin0">
														<i
															className={`devicon-${techno.name}-plain colored`}
														></i>{" "}
														{techno.name}
													</p>
													<i
														className="fal fa-backspace form-technologies-delete"
														onClick={() =>
															dispatch(removeTechnologyData(techno.name))
														}
													></i>
												</div>
											))}
										</div>
										<div className="project-technologies-others">
											<h4>Autres</h4>
											{othersData.length === 0 && (
												<span className="form-technologies-empty">vide...</span>
											)}
											{othersData.map((techno) => (
												<div
													key={techno.name}
													className="form-technologies-items"
												>
													<p className="margin0">
														<i
															className={`devicon-${techno.name}-plain colored`}
														></i>{" "}
														{techno.name}
													</p>
													<i
														className="fal fa-backspace form-technologies-delete"
														onClick={() =>
															dispatch(removeTechnologyData(techno.name))
														}
													></i>
												</div>
											))}
										</div>
										<div className="project-technologies-edit">
											<span>
												<i
													onClick={() => dispatch(setDisplayEditTechnologies())}
													className="fas fa-edit"
												></i>
											</span>
										</div>
									</>
								)}
							</div>
						</div>
					</div>
				</div>
				<FooterColored />
			</Sidebar>
		</>
	);
}

export default Project;
