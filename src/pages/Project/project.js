/* eslint-disable react/jsx-no-comment-textnodes */
/* eslint-disable jsx-a11y/img-redundant-alt */
import "./project.scss";
//? Date picker MUI
import { AdapterMoment } from "@mui/x-date-pickers/AdapterMoment";
import { LocalizationProvider } from "@mui/x-date-pickers";
import moment from "moment/min/moment-with-locales";
import { DatePicker } from "@mui/x-date-pickers";
import TextField from "@mui/material/TextField";
import "moment/locale/fr";
//? WYSIWYG editor
import { Editor } from "react-draft-wysiwyg";
import { EditorState, convertToRaw, ContentState } from "draft-js";
import draftToHtml from "draftjs-to-html";
import htmlToDraft from "html-to-draftjs";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";

import FooterColored from "./../../components/Footer/footerColored";
import Sidebar from "../../components/SideBar/sidebar";
import SearchBarTechnologies from "../../components/SearchBar/searchBarTechnologiesProject";
import SearchBarJobsProject from "../../components/SearchBar/searchBarJobsProject";
import { useSelector, useDispatch } from "react-redux";
import { setDisplayEdit, changeDate } from "./projectSlice";
import { useParams } from "react-router-dom";
import {
	useDeleteProjectJobMutation,
	useDeleteProjectTechnoMutation,
	useGetOneProjectQuery,
	useUpdateProjectMutation,
} from "../Projects/projectsAPISlice";
import { useEffect, useState } from "react";
import technologiesJson from "./../../assets/data/technologiesData.json";

import { Link, useLocation, Outlet } from "react-router-dom";
import { toggleTeamCreationModalOpen } from "./../TeamCreation/teamCreationSlice";

import DisplayShowMoreDescription from "../../utils/displayShowMoreDescription";

function Project() {
	const { projectId } = useParams();
	const { data: projectWithTeam, refetch } = useGetOneProjectQuery(projectId);
	const [updateProject] = useUpdateProjectMutation();
	const [deleteJobProject] = useDeleteProjectJobMutation();
	const [deleteTechnoProject] = useDeleteProjectTechnoMutation();

	console.log(projectWithTeam);

	const project = projectWithTeam?.project;
	const projectJobs = projectWithTeam?.jobByProject;
	const projectTeam = projectWithTeam?.teams;

	const dispatch = useDispatch();
	const location = useLocation();

	const {
		displayEditDescriptionForm,
		displayEditTechnologies,
		displayEditJobForm,
		displayEditDates,
		displayImgEdit,
		adaptDescriptionContainer,
		startDate,
		endDate,
		description,
		projectTitle,
		projectExcerpt,
	} = useSelector((state) => state.project);

	const findProjectTechnosFromDatabase = project?.techno?.map(
		(techno) => technologiesJson.filter((tech) => tech.name === techno)[0]
	);
	const displayProductOwner = projectTeam
		?.filter((team) => team.role === "admin")
		.map((po) => `${po.firstname} ${po.lastname}`)[0];

	const languagesData = findProjectTechnosFromDatabase?.filter((technology) =>
		technology.tags.includes("language")
	);
	const frameworksData = findProjectTechnosFromDatabase?.filter((technology) =>
		technology.tags.includes("framework")
	);
	const databasesData = findProjectTechnosFromDatabase?.filter((technology) =>
		technology.tags.includes("database")
	);
	const othersData = findProjectTechnosFromDatabase?.filter(
		(technology) =>
			!technology.tags.includes("framework") &&
			!technology.tags.includes("language") &&
			!technology.tags.includes("database")
	);

	const showCloudinaryWidget = () => {
		let widget = window.cloudinary.createUploadWidget(
			{
				cloudName: `develott`,
				uploadPreset: `develott`,
				sources: ["local", "url"],
				showAdvancedOptions: true,
				cropping: true,
				multiple: false,
				defaultSource: "local",
				styles: {
					palette: {
						window: "#FFFFFF",
						windowBorder: "#90A0B3",
						tabIcon: "#9B72F1",
						menuIcons: "#5A616A",
						textDark: "#000000",
						textLight: "#FFFFFF",
						link: "#9B72F1",
						action: "#FF620C",
						inactiveTabIcon: "#7288E4",
						error: "#F44235",
						inProgress: "#0078FF",
						complete: "#20B832",
						sourceBg: "#E4EBF1",
					},
					fonts: {
						default: null,
						"'Fira Sans', sans-serif": {
							url: "https://fonts.googleapis.com/css?family=Fira+Sans",
							active: true,
						},
					},
				},
			},
			(error, result) => {
				if (!error && result && result.event === "success") {
					console.log(result.info.url);
					const newImg = result.info.url;
					updateProject({ id: projectId, picture_project: newImg });
					refetch();
				}
			}
		);
		widget.open();
	};

	const [editorState, setEditorState] = useState(EditorState.createEmpty());

	useEffect(() => {
		if (project?.description) {
			const html = project?.description;
			const contentBlock = htmlToDraft(html);
			const contentState = ContentState.createFromBlockArray(
				contentBlock.contentBlocks
			);
			setEditorState(EditorState.createWithContent(contentState));
		}
	}, [description, project?.description, projectWithTeam]);

	const handleEditorChange = (editorState) => {
		setEditorState(editorState);
	};

	const handleDescriptionSubmit = async (e) => {
		e.preventDefault();
		const newDescription = draftToHtml(
			convertToRaw(editorState.getCurrentContent())
		);
		dispatch(
			changeDate({
				name: "description",
				value: newDescription,
			})
		);
		refetch();
		await updateProject({
			id: projectId,
			exerpt: projectExcerpt,
			description: newDescription,
			name: projectTitle,
		});
		dispatch(
			setDisplayEdit({
				name: "displayEditDescriptionForm",
			})
		);
	};

	//TODO : logique conditionnalité
	// si user.id !== po.id alors on n'affiche pas les modifs

	return (
		<>
			<Sidebar>
				<div className="project">
					<div className="project-container ">
						<div className="project-container-left">
							{!displayImgEdit && (
								<div className="project-img-container">
									<img
										src={project?.picture}
										className="project-img"
										alt="Projet image"
									/>
									<span
										className="project-img-container-edit-btn"
										onClick={() =>
											dispatch(setDisplayEdit({ name: "displayImgEdit" }))
										}
									>
										Modifier
									</span>
								</div>
							)}
							{displayImgEdit && (
								<div className="project-edit-img-container">
									<button
										className="project-edit-img-input"
										onClick={() => showCloudinaryWidget()}
									>
										Uploader une nouvelle image
									</button>

									<p
										className="secondary-button-colored validation-edit-btn"
										onClick={() => {
											dispatch(setDisplayEdit({ name: "displayImgEdit" }));
										}}
									>
										<i className="fas fa-edit"></i> Enregistrer
									</p>
								</div>
							)}

							<div className="project-user">
								<img
									className="slider-avatar"
									src="https://www.pngall.com/wp-content/uploads/12/Avatar-Profile.png"
									alt="User profile image"
								/>
								<p className="project-user-name">{displayProductOwner}</p>

								{/* //TODO connecter les liens RS */}

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
											<span
												className="edit-btn-main"
												onClick={() =>
													dispatch(
														setDisplayEdit({ name: "displayEditJobForm" })
													)
												}
											>
												Modifier
											</span>
										</div>
										<div className="project-jobs-container">
											{projectJobs?.map((job) => (
												<p key={job.id_project_has_job}>
													<i className="fas fa-check-circle success"></i>{" "}
													{job.job}
												</p>
											))}
										</div>
									</>
								)}
								{displayEditJobForm === true && (
									<div className="project-jobs-container">
										<div className="jobs-searchbar-container">
											<SearchBarJobsProject projectId={projectId} />
										</div>
										{projectJobs?.map((job) => (
											<div
												key={job.id_project_has_job}
												className="project-jobs-container-job"
											>
												<p>
													<i className="fas fa-check-circle success"></i>
													{job.job}
												</p>
												<span
													onClick={() =>
														deleteJobProject({
															id: projectId,
															id_project_has_job: job.id_project_has_job,
														})
													}
												>
													<i className="far fa-backspace cursor-pointer"></i>
												</span>
											</div>
										))}
										<span>
											<p
												className="secondary-button-colored validation-edit-btn"
												onClick={() =>
													dispatch(
														setDisplayEdit({ name: "displayEditJobForm" })
													)
												}
											>
												Valider
											</p>
										</span>
									</div>
								)}
							</div>
							{!displayEditDates && (
								<div className="project-dates">
									<div className="project-jobs-title-container">
										<h3 className="project-jobs-title">Dates du projet</h3>
										<p
											className="edit-btn-main"
											onClick={() =>
												dispatch(setDisplayEdit({ name: "displayEditDates" }))
											}
										>
											Modifier
										</p>
									</div>
									<p>
										<i className="far fa-calendar-check success"></i> Début :
										{moment(project?.start_date).locale("fr").format("LL")}
									</p>
									<p>
										<i className="far fa-calendar-exclamation warning"></i>
										Durée :
										{moment(project?.end_date)
											.locale("fr")
											.diff(
												moment(project?.start_date).locale("fr"),
												"weeks"
											)}{" "}
										semaines
									</p>
								</div>
							)}
							{displayEditDates && (
								<div className="project-dates">
									<div className="project-dates-inputs">
										<LocalizationProvider
											dateAdapter={AdapterMoment}
											adapterLocale="fr"
										>
											<DatePicker
												label="Date de début"
												value={startDate}
												className="date-picker-color"
												onChange={(newValue) => {
													dispatch(
														changeDate({
															name: "startDate",
															value: newValue._d,
														})
													);
													updateProject({
														id: projectId,
														start_date: newValue._d,
													});
												}}
												renderInput={(params) => <TextField {...params} />}
											/>
										</LocalizationProvider>
									</div>
									<div className="project-dates-inputs">
										<LocalizationProvider
											dateAdapter={AdapterMoment}
											adapterLocale="fr"
										>
											<DatePicker
												label="Date de fin"
												value={endDate}
												onChange={(newValue) => {
													dispatch(
														changeDate({
															name: "endDate",
															value: newValue._d,
														})
													);
													updateProject({
														id: projectId,
														end_date: newValue._d,
													});
												}}
												renderInput={(params) => <TextField {...params} />}
											/>
										</LocalizationProvider>
									</div>
									<p
										className="secondary-button-colored validation-edit-btn"
										onClick={() =>
											dispatch(setDisplayEdit({ name: "displayEditDates" }))
										}
									>
										Valider
									</p>
								</div>
							)}
						</div>
						<div className="project-container-right">
							<div className="project-header">
								<div className="project-header-left">
									<h1 className="project-header-title">{project?.project}</h1>
									<p className="project-header-short-desc">
										{project?.excerpt}
									</p>
								</div>
								<div className="project-header-right">
									<Link
										to={`/postuler`}
										// to={`/projet/${projectId}/postuler`}
										state={{ background: location }}
										onClick={() => dispatch(toggleTeamCreationModalOpen())}
										className="main-button-bg-white"
									>
										Postuler <i className="far fa-rocket"></i>
									</Link>
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
												className="edit-btn-main"
												onClick={() =>
													dispatch(
														setDisplayEdit({
															name: "displayEditDescriptionForm",
														})
													)
												}
											>
												Modifier
											</span>
										</div>
										{adaptDescriptionContainer === false && (
											<p
												className="project-description-desc"
												dangerouslySetInnerHTML={{
													__html: DisplayShowMoreDescription(
														project?.description
													),
												}}
											/>
										)}
										{adaptDescriptionContainer === true && (
											<p
												className="project-description-desc"
												dangerouslySetInnerHTML={{
													__html: project?.description,
												}}
											/>
										)}

										{adaptDescriptionContainer === false && (
											<span
												className="project-description-see-more"
												onClick={() =>
													dispatch(
														setDisplayEdit({
															name: "adaptDescriptionContainer",
														})
													)
												}
											>
												Voir plus...
											</span>
										)}
										{adaptDescriptionContainer === true && (
											<span
												className="project-description-see-more"
												onClick={() =>
													dispatch(
														setDisplayEdit({
															name: "adaptDescriptionContainer",
														})
													)
												}
											>
												Voir Moins...
											</span>
										)}
									</>
								)}
								{displayEditDescriptionForm === true && (
									<>
										<form
											className="project-texte-editor"
											onSubmit={handleDescriptionSubmit}
										>
											<h3>Modifier le titre du projet :</h3>
											<input
												className="dashboard-edit-input"
												type="text"
												placeholder="Titre du projet"
												value={projectTitle}
												onChange={(e) =>
													dispatch(
														changeDate({
															name: "projectTitle",
															value: e.target.value,
														})
													)
												}
											/>
											<h3>Modifier la description courte du projet :</h3>
											<input
												className="dashboard-edit-input"
												type="text"
												placeholder="Titre du projet"
												value={projectExcerpt}
												onChange={(e) =>
													dispatch(
														changeDate({
															name: "projectExcerpt",
															value: e.target.value,
														})
													)
												}
											/>
											<h3>Modifier la description du projet :</h3>
											<Editor
												editorState={editorState}
												onEditorStateChange={handleEditorChange}
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
												type="submit"
												className="main-button-colored create-project-button"
											>
												Valider
											</button>
										</form>
									</>
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
											{languagesData?.length === 0 && (
												<span className="form-technologies-empty">vide...</span>
											)}
											{languagesData?.map((techno, index) => (
												<span
													key={index}
													className="technologies-icon-container2"
												>
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
											{frameworksData?.length === 0 && (
												<span className="form-technologies-empty">vide...</span>
											)}
											{frameworksData?.map((techno, index) => (
												<span
													key={index}
													className="technologies-icon-container2"
												>
													<i
														className={`devicon-${techno.name}-plain`}
														style={{ backgroundColor: `${techno.color}` }}
													></i>
													{techno.name}
												</span>
											))}
										</div>
										<div className="project-technologies-database">
											<h4>Database</h4>
											{databasesData?.length === 0 && (
												<span className="form-technologies-empty">vide...</span>
											)}
											{databasesData?.map((techno, index) => (
												<span
													key={index}
													className="technologies-icon-container2"
												>
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
											{othersData?.length === 0 && (
												<span className="form-technologies-empty">vide...</span>
											)}
											{othersData?.map((techno, index) => (
												<span
													key={index}
													className="technologies-icon-container2"
												>
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
												className="edit-btn-main"
												onClick={() =>
													dispatch(
														setDisplayEdit({
															name: "displayEditTechnologies",
														})
													)
												}
											>
												<i className="fas fa-edit"></i>
											</span>
										</div>
									</>
								)}
								{displayEditTechnologies === true && (
									<>
										<div className="width-100 searchbar-project-page">
											<SearchBarTechnologies
												technos={project?.techno}
												projectId={projectId}
											/>
											<div className="project-technologies-edit">
												<span
													className="secondary-button-colored validation-edit-btn"
													onClick={() =>
														dispatch(
															setDisplayEdit({
																name: "displayEditTechnologies",
															})
														)
													}
												>
													Enregistrer
												</span>
											</div>
										</div>
										<div className="project-technologies-languages">
											<h4>Langages</h4>
											{languagesData?.length === 0 && (
												<span className="form-technologies-empty">vide...</span>
											)}
											{languagesData?.map((techno, index) => (
												<div key={index} className="form-technologies-items">
													<p className="margin0">
														<i
															className={`devicon-${techno.name}-plain colored`}
														></i>{" "}
														{techno.name}
													</p>
													<i
														className="fal fa-backspace form-technologies-delete"
														onClick={() =>
															deleteTechnoProject({
																id: projectId,
																techno: techno.name,
															})
														}
													></i>
												</div>
											))}
										</div>
										<div className="project-technologies-frameworks">
											<h4>Frameworks</h4>
											{frameworksData?.length === 0 && (
												<span className="form-technologies-empty">vide...</span>
											)}
											{frameworksData?.map((techno, index) => (
												<div key={index} className="form-technologies-items">
													<p className="margin0">
														<i
															className={`devicon-${techno.name}-plain colored`}
														></i>{" "}
														{techno.name}
													</p>
													<i
														className="fal fa-backspace form-technologies-delete"
														onClick={() =>
															deleteTechnoProject({
																id: projectId,
																techno: techno.name,
															})
														}
													></i>
												</div>
											))}
										</div>
										<div className="project-technologies-database">
											<h4>Base de donnée</h4>
											{databasesData?.length === 0 && (
												<span className="form-technologies-empty">vide...</span>
											)}
											{databasesData?.map((techno, index) => (
												<div key={index} className="form-technologies-items">
													<p className="margin0">
														<i
															className={`devicon-${techno.name}-plain colored`}
														></i>{" "}
														{techno.name}
													</p>
													<i
														className="fal fa-backspace form-technologies-delete"
														onClick={() =>
															deleteTechnoProject({
																id: projectId,
																techno: techno.name,
															})
														}
													></i>
												</div>
											))}
										</div>
										<div className="project-technologies-others">
											<h4>Autres</h4>
											{othersData?.length === 0 && (
												<span className="form-technologies-empty">vide...</span>
											)}
											{othersData?.map((techno, index) => (
												<div key={index} className="form-technologies-items">
													<p className="margin0">
														<i
															className={`devicon-${techno.name}-plain colored`}
														></i>{" "}
														{techno.name}
													</p>
													<i
														className="fal fa-backspace form-technologies-delete"
														onClick={() =>
															deleteTechnoProject({
																id: projectId,
																techno: techno.name,
															})
														}
													></i>
												</div>
											))}
										</div>
									</>
								)}
							</div>
						</div>
					</div>
				</div>
				<FooterColored />
			</Sidebar>
			<Outlet />
		</>
	);
}

export default Project;
