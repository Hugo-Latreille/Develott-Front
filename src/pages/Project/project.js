/* eslint-disable jsx-a11y/img-redundant-alt */
import "./project.scss";
//? Date picker MUI
import { AdapterMoment } from "@mui/x-date-pickers/AdapterMoment";
import { LocalizationProvider } from "@mui/x-date-pickers";
import moment from "moment/min/moment-with-locales";
import { DatePicker } from "@mui/x-date-pickers";
import TextField from "@mui/material/TextField";
import "moment/locale/fr";

import FooterColored from "./../../components/Footer/footerColored";
import Sidebar from "../../components/SideBar/sidebar";
import SearchBarTechnologies from "../../components/SearchBar/searchBarTechnologiesProject";
import SearchBarJobsProject from "../../components/SearchBar/searchBarJobsProject";
import { Editor } from "react-draft-wysiwyg";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import { useSelector, useDispatch } from "react-redux";
import {
	setDisplayEdit,
	removeData,
	changeDate,
	setNewImg,
} from "./projectSlice";
import { useParams } from "react-router-dom";
import { useGetOneProjectQuery } from "../Projects/projectsAPISlice";

function Project() {
	const { projectId } = useParams();

	const { data: project } = useGetOneProjectQuery(projectId);

	console.log(project);

	const dispatch = useDispatch();
	const {
		displayEditDescriptionForm,
		displayEditTechnologies,
		displayEditJobForm,
		displayEditDates,
		displayImgEdit,
		adaptDescriptionContainer,
		technologiesData,
		jobsData,
		startDate,
		endDate,
		projectImg,
	} = useSelector((state) => state.project);

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
					dispatch(setNewImg(newImg));
				}
			}
		);
		widget.open();
	};

	return (
		<>
			<Sidebar>
				<div className="project">
					<div className="project-container ">
						<div className="project-container-left">
							{!displayImgEdit && (
								<>
									<img
										src={projectImg}
										className="project-img"
										alt="Projet image"
									/>
									<span
										onClick={() =>
											dispatch(setDisplayEdit({ name: "displayImgEdit" }))
										}
									>
										<i className="fas fa-edit"></i>
									</span>
								</>
							)}
							{displayImgEdit && (
								<>
									<button onClick={() => showCloudinaryWidget()}>
										Uploader une nouvelle image
									</button>

									<span
										onClick={() =>
											dispatch(setDisplayEdit({ name: "displayImgEdit" }))
										}
									>
										<i className="fas fa-edit"></i>
									</span>
								</>
							)}

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
											<span
												onClick={() =>
													dispatch(
														setDisplayEdit({ name: "displayEditJobForm" })
													)
												}
											>
												<i className="fas fa-edit"></i>
											</span>
										</div>
										<div className="project-jobs-container">
											{jobsData.map((job) => (
												<p key={job.id}>
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
										{jobsData.map((job, index) => (
											<div key={index} className="project-jobs-container-job">
												<p>
													<i className="fas fa-check-circle success"></i>
													{job.name}
												</p>
												<span
													onClick={() =>
														dispatch(
															removeData({
																name: "jobsData",
																field: "id",
																value: job.id,
															})
														)
													}
												>
													<i className="far fa-backspace cursor-pointer"></i>
												</span>
											</div>
										))}
										<span>
											<button
												className="main-button-colored"
												onClick={() =>
													dispatch(
														setDisplayEdit({ name: "displayEditJobForm" })
													)
												}
											>
												Valider
											</button>
										</span>
									</div>
								)}
							</div>
							{!displayEditDates && (
								<div className="project-dates">
									<h3 className="project-jobs-title">Dates du projet</h3>
									<span
										onClick={() =>
											dispatch(setDisplayEdit({ name: "displayEditDates" }))
										}
									>
										<i className="fas fa-edit"></i>
									</span>
									<p>
										<i className="far fa-calendar-check success"></i> Début :{" "}
										{moment(startDate).locale("fr").format("LL")}
									</p>
									<p>
										<i className="far fa-calendar-check success"></i> Fin :{" "}
										{moment(endDate).locale("fr").format("LL")}
									</p>
									<p>
										<i className="far fa-calendar-exclamation warning"></i>{" "}
										Durée :
										{moment(endDate)
											.locale("fr")
											.diff(moment(startDate).locale("fr"), "weeks")}{" "}
										semaines
									</p>
								</div>
							)}
							{displayEditDates && (
								<div className="project-dates">
									<h3 className="project-jobs-title">Dates du projet</h3>
									<span
										onClick={() =>
											dispatch(setDisplayEdit({ name: "displayEditDates" }))
										}
									>
										<i className="fas fa-edit"></i>
									</span>

									<p>
										<i className="far fa-calendar-check success"></i> Début :{" "}
										<LocalizationProvider
											dateAdapter={AdapterMoment}
											locale="fr"
										>
											<DatePicker
												label="Date de début"
												value={startDate}
												onChange={(newValue) => {
													dispatch(
														changeDate({
															name: "startDate",
															value: newValue._d,
														})
													);
												}}
												renderInput={(params) => <TextField {...params} />}
											/>
										</LocalizationProvider>
									</p>
									<p>
										<i className="far fa-calendar-check success"></i> Fin :{" "}
										<LocalizationProvider
											dateAdapter={AdapterMoment}
											locale="fr"
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
												}}
												renderInput={(params) => <TextField {...params} />}
											/>
										</LocalizationProvider>
									</p>
									<p>
										<i className="far fa-calendar-exclamation warning"></i>{" "}
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
												// onClick={() => dispatch(setDisplayEditDescription())}
												onClick={() =>
													dispatch(
														setDisplayEdit({
															name: "displayEditDescriptionForm",
														})
													)
												}
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
											onClick={() =>
												dispatch(
													setDisplayEdit({
														name: "displayEditDescriptionForm",
													})
												)
											}
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
											{languagesData.map((techno, index) => (
												<span
													key={index}
													className="technologies-icon-container"
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
											{frameworksData.length === 0 && (
												<span className="form-technologies-empty">vide...</span>
											)}
											{frameworksData.map((techno, index) => (
												<span
													key={index}
													className="technologies-icon-container"
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
											<h4>Base de donnée</h4>
											{databasesData.length === 0 && (
												<span className="form-technologies-empty">vide...</span>
											)}
											{databasesData.map((techno, index) => (
												<span
													key={index}
													className="technologies-icon-container"
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
											{othersData.length === 0 && (
												<span className="form-technologies-empty">vide...</span>
											)}
											{othersData.map((techno, index) => (
												<span
													key={index}
													className="technologies-icon-container"
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
										<div className="width-100 margin-bottom1">
											<SearchBarTechnologies />
										</div>
										<div className="project-technologies-languages">
											<h4>Langages</h4>
											{languagesData.length === 0 && (
												<span className="form-technologies-empty">vide...</span>
											)}
											{languagesData.map((techno, index) => (
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
															dispatch(
																removeData({
																	name: "technologiesData",
																	field: "name",
																	value: techno.name,
																})
															)
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
											{frameworksData.map((techno, index) => (
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
															dispatch(
																removeData({
																	name: "technologiesData",
																	field: "name",
																	value: techno.name,
																})
															)
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
											{databasesData.map((techno, index) => (
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
															dispatch(
																removeData({
																	name: "technologiesData",
																	field: "name",
																	value: techno.name,
																})
															)
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
											{othersData.map((techno, index) => (
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
															dispatch(
																removeData({
																	name: "technologiesData",
																	field: "name",
																	value: techno.name,
																})
															)
														}
													></i>
												</div>
											))}
										</div>
										<div className="project-technologies-edit">
											<span>
												<i
													onClick={() =>
														dispatch(
															setDisplayEdit({
																name: "displayEditTechnologies",
															})
														)
													}
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
