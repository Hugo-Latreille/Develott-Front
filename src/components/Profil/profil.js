/* eslint-disable jsx-a11y/anchor-is-valid */
import "./profil.scss";
import "../Cards/cards.scss";
import SearchBarTechnologiesUserProfile from "../SearchBar/searchBarTechnologiesUserProfile";
import DisplayShowMoreDescription from "../../utils/displayShowMoreDescription";

//? WYSIWYG editor
import { Editor } from "react-draft-wysiwyg";
import { EditorState, convertToRaw, ContentState } from "draft-js";
import draftToHtml from "draftjs-to-html";
import htmlToDraft from "html-to-draftjs";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
// import sanitizeHtml from "sanitize-html";
import moment from "moment/min/moment-with-locales";
import { useSelector, useDispatch } from "react-redux";
import {
	setDisplayEdit,
	setUserDescription,
	setUserData,
} from "./../../pages/Profiles/userProfileSlice";
import {
	useDeleteUserTechnoMutation,
	useUpdateUserMutation,
} from "../../pages/Profiles/userAPISlice";
import SearchBarJobsUser from "./../SearchBar/SearchBarJobsUser";
import { useEffect, useState } from "react";
import technologiesJson from "./../../assets/data/technologiesData.json";
import { Link, useParams } from "react-router-dom";
import { useLocation } from "react-router-dom";
import { useFindUserByIdQuery } from "../../pages/Login/authAPISlice";
import { useGetAllProjectsQuery } from "../../pages/Projects/projectsAPISlice";

function Profil() {
	const dispatch = useDispatch();
	const { profilId } = useParams();
	const location = useLocation();
	const { email } = useSelector((state) => state.auth);
	const { data: user } = useFindUserByIdQuery(profilId);
	const { data: projectsTeams } = useGetAllProjectsQuery();
	const [updateUser] = useUpdateUserMutation();
	const [deleteUserTechno] = useDeleteUserTechnoMutation();

	const findMyProjectsId = projectsTeams?.teams?.filter(
		(team) => team.customer_id === user?.id
	);
	const findMyProjects = () => {
		return findMyProjectsId?.map((projectRole) => {
			const myProject = projectsTeams?.projects.filter(
				(project) => project.id === projectRole.project_id
			)[0];
			const myRole = projectRole;
			const projectTeam = projectsTeams?.teams?.filter(
				(team) => team?.project_id === myProject.id
			);
			const projectJobs = projectsTeams?.jobByProject?.filter(
				(job) => job?.project_id === myProject.id
			);
			return { myProject, myRole, projectTeam, projectJobs };
		});
	};
	console.log(findMyProjects());

	console.log(user);
	const {
		isEditDescriptionActive,
		isEditTechnologiesActive,
		isEditUserPictureActive,
		isEditUserInfos,
		displayAllDescription,
		userCity,
		userGitHub,
		userLinkedin,
		userPortfolio,
	} = useSelector((state) => state.userProfile);

	const findUserTechnosFromDatabase = user?.techno?.map(
		(techno) => technologiesJson.filter((tech) => tech.name === techno)[0]
	);

	const [editorState, setEditorState] = useState(EditorState.createEmpty());
	useEffect(() => {
		if (user?.description) {
			const html = user?.description;
			const contentBlock = htmlToDraft(html);
			const contentState = ContentState.createFromBlockArray(
				contentBlock.contentBlocks
			);
			setEditorState(EditorState.createWithContent(contentState));
		}
	}, [user?.description]);

	const handleEditorChange = (editorState) => {
		setEditorState(editorState);
	};

	const handleDescriptionSubmit = async (e) => {
		e.preventDefault();
		const newDescription = draftToHtml(
			convertToRaw(editorState.getCurrentContent())
		);
		dispatch(setUserDescription(newDescription));
		// refetch();
		await updateUser({ id: user?.id, description: newDescription });
		dispatch(
			setDisplayEdit({
				name: "isEditDescriptionActive",
			})
		);
	};

	const languagesData = findUserTechnosFromDatabase?.filter((technology) =>
		technology?.tags.includes("language")
	);

	const frameworksData = findUserTechnosFromDatabase?.filter((technology) =>
		technology?.tags.includes("framework")
	);

	const databasesData = findUserTechnosFromDatabase?.filter((technology) =>
		technology?.tags.includes("database")
	);

	const othersData = findUserTechnosFromDatabase?.filter(
		(technology) =>
			!technology?.tags.includes("framework") &&
			!technology?.tags.includes("language") &&
			!technology?.tags.includes("database")
	);

	const showCloudinaryWidget = () => {
		let widget = window.cloudinary.createUploadWidget(
			{
				cloudName: `develott`,
				uploadPreset: `develottProfil`,
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
					updateUser({ id: user?.id, profil_picture: newImg });
					dispatch(setDisplayEdit({ name: "isEditUserPictureActive" }));
				}
			}
		);
		widget.open();
	};

	const handleUserInfoSubmit = (e) => {
		e.preventDefault();
		updateUser({
			id: user?.id,
			city: userCity,
			url_github: userGitHub,
			url_linkedin: userLinkedin,
			url_portfolio: userPortfolio,
		});

		dispatch(setDisplayEdit({ name: "isEditUserInfos" }));
	};

	const isMyProfile = user?.email === email;
	// const isMyProfile = true;

	return (
		<>
			<div className="profil ">
				<div className="profil_desc">
					<div className="desc_container_description">
						{isEditUserPictureActive ? (
							<div className=" desc_container_description-username">
								<div
									className="project-img-container-edit-btn"
									onClick={() =>
										dispatch(
											setDisplayEdit({ name: "isEditUserPictureActive" })
										)
									}
								>
									Enregistrer
								</div>
								<button
									className="project-edit-img-input margin-top2"
									onClick={() => showCloudinaryWidget()}
								>
									Uploader une image de profil
								</button>
								<div className="desc_container_description-user">
									<p className="margin-top2">Modifier le poste actuel :</p>
									<p className="desc_container_role-edition">{user?.job}</p>
									<div className="jobs-searchbar-container margin-top-4">
										<SearchBarJobsUser userId={user?.id} />
									</div>
								</div>
							</div>
						) : (
							<div className=" desc_container_description-username">
								{user?.profil_picture && user?.profil_picture.length > 1 ? (
									<img
										className="name_container_avatar"
										src={user?.profil_picture}
										alt=""
									/>
								) : (
									<img
										className="name_container_avatar"
										src={require("./../../assets/images/user-avatar.png")}
										alt=""
									/>
								)}
								{isMyProfile && (
									<div
										className="project-img-container-edit-btn"
										onClick={() =>
											dispatch(
												setDisplayEdit({ name: "isEditUserPictureActive" })
											)
										}
									>
										Modifier
									</div>
								)}

								<div className="desc_container_description-user">
									<div className="name_container_user">{`${user?.firstname} ${user?.lastname}`}</div>
									<div className="desc_container_role">
										{user?.job ? (
											user?.job
										) : (
											<p
												className="cursor-pointer"
												onClick={() =>
													dispatch(
														setDisplayEdit({ name: "isEditUserPictureActive" })
													)
												}
											>
												Renseigner mon poste
											</p>
										)}
									</div>
								</div>
							</div>
						)}
						<div className=" desc_container_description-links-informations">
							<div className="desc_container_description-links">
								{user?.is_active ? (
									<p className="desc_container_title user-available">
										<i className="fas fa-circle warning"></i> Participe à un
										projet
									</p>
								) : (
									<p className="desc_container_title user-available">
										<i className="fas fa-circle success"></i> Disponible pour
										débuter un nouveau projet
									</p>
								)}

								{isEditUserInfos === false && (
									<>
										{isMyProfile && (
											<div
												className="project-img-container-edit-btn"
												onClick={() =>
													dispatch(setDisplayEdit({ name: "isEditUserInfos" }))
												}
											>
												Modifier
											</div>
										)}

										<div className="desc_container_user-links-dark">
											<p className="desc_container_title">
												<i className="fas fa-map-marker color-secondary"></i>
												{user?.city ? user?.city : "Ville"}
											</p>
											<p className="desc_container_title">
												<i className="fab fa-github color-secondary"></i>
												{user?.url_github ? (
													<a href={user?.url_github} target="_blank">
														Profile Github
													</a>
												) : (
													"GitHub"
												)}
											</p>
											<p className="desc_container_title">
												<i className="fab fa-linkedin color-secondary"></i>
												<a href="#">
													{user?.url_linkedin ? (
														<a href={user?.url_linkedin} target="_blank">
															Profile Linkedin
														</a>
													) : (
														"Linkedin"
													)}
												</a>
											</p>
											<p className="desc_container_title">
												<i className="fas fa-globe color-secondary"></i>
												{user?.url_portfolio ? (
													<a href={user?.url_portfolio} target="_blank">
														{user?.url_portfolio}
													</a>
												) : (
													"Portfolio"
												)}
											</p>
										</div>
									</>
								)}
								{isEditUserInfos === true && (
									<>
										<form onSubmit={handleUserInfoSubmit}>
											<button
												type="submit"
												className="project-img-container-edit-btn"
												style={{ border: "none" }}
											>
												Enregistrer
											</button>
											<div className="desc_container_title user-info-input-edition">
												<i className="fas fa-map-marker color-secondary"></i>
												<input
													value={userCity}
													onChange={(e) =>
														dispatch(
															setUserData({
																name: "userCity",
																value: e.target.value,
															})
														)
													}
													type="text"
													placeholder="Ville ..."
													className="dashboard-edit-input"
												/>
											</div>
											<div className="desc_container_title user-info-input-edition">
												<i className="fab fa-github color-secondary"></i>
												<input
													value={userGitHub}
													onChange={(e) =>
														dispatch(
															setUserData({
																name: "userGitHub",
																value: e.target.value,
															})
														)
													}
													type="text"
													placeholder="Lien profil Github..."
													className="dashboard-edit-input"
												/>
											</div>
											<div className="desc_container_title user-info-input-edition">
												<i className="fab fa-linkedin color-secondary"></i>
												<input
													value={userLinkedin}
													onChange={(e) =>
														dispatch(
															setUserData({
																name: "userLinkedin",
																value: e.target.value,
															})
														)
													}
													type="text"
													placeholder="Lien profil Linkedin..."
													className="dashboard-edit-input"
												/>
											</div>
											<div className="desc_container_title user-info-input-edition">
												<i className="fas fa-globe color-secondary"></i>
												<input
													value={userPortfolio}
													onChange={(e) =>
														dispatch(
															setUserData({
																name: "userPortfolio",
																value: e.target.value,
															})
														)
													}
													type="text"
													placeholder="Lien vers Portfolio..."
													className="dashboard-edit-input"
												/>
											</div>
										</form>
									</>
								)}
							</div>

							<p className="desc_container_title user-password">
								<Link
									to={`/changePassword/${user?.id}`}
									state={{ background: location }}
									// onClick={() => dispatch(toggleTeamCreationModalOpen())}
								>
									<i className="fal fa-key"></i> Mot de Passe
								</Link>
							</p>
						</div>
					</div>
				</div>
				<div className="profil-middle">
					<div className="profil_technos">
						<div
							className="desc_container "
							style={
								displayAllDescription === true
									? { height: "57vh", overflowY: "scroll" }
									: {}
							}
						>
							{isEditDescriptionActive === true && (
								<form
									className="padding-on-edition"
									onSubmit={handleDescriptionSubmit}
								>
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
							)}
							{isEditDescriptionActive === false && (
								<>
									<div className="profile-edition-btns-container">
										<h4 className="desc_container_main">
											{user?.firstname} en quelques mots...
										</h4>
										{isMyProfile && (
											<div
												className="edit-btn-main"
												onClick={() =>
													dispatch(
														setDisplayEdit({ name: "isEditDescriptionActive" })
													)
												}
											>
												Modifier
											</div>
										)}
									</div>

									{displayAllDescription === false && (
										<div
											className="user-description-texte"
											dangerouslySetInnerHTML={{
												__html: DisplayShowMoreDescription(user?.description),
											}}
										/>
									)}
									{displayAllDescription === true && (
										<div
											className="user-description-texte"
											dangerouslySetInnerHTML={{
												__html: user?.description,
											}}
										/>
									)}

									<div className="user-description-texte">
										{displayAllDescription === false && (
											<div
												className="user_desc_link"
												onClick={() =>
													dispatch(
														setDisplayEdit({ name: "displayAllDescription" })
													)
												}
											>
												voir plus...
											</div>
										)}
										{displayAllDescription === true && (
											<div
												className="user_desc_link"
												onClick={() =>
													dispatch(
														setDisplayEdit({ name: "displayAllDescription" })
													)
												}
											>
												voir moins.
											</div>
										)}
									</div>
								</>
							)}
						</div>
						{isEditTechnologiesActive === true && (
							<div className="desc_container_technos">
								<div className="desc_container_technos padding-on-edition">
									<SearchBarTechnologiesUserProfile
										technos={user?.techno}
										userId={user?.id}
									/>
									<div className="user-technologies margin-top2">
										<div className="project-technologies-languages">
											<h4>Langages</h4>
											{languagesData?.length === 0 && (
												<p className="form-technologies-empty">vide...</p>
											)}
											{languagesData?.map((techno, index) => (
												<div key={index} className="form-technologies-items">
													<p className="margin0">
														<i
															className={`devicon-${techno?.name}-plain colored`}
														></i>
														{techno?.name}
													</p>
													<i
														className="fal fa-backspace form-technologies-delete"
														onClick={() =>
															deleteUserTechno({
																id: user?.id,
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
												<p className="form-technologies-empty">vide...</p>
											)}
											{frameworksData?.map((techno, index) => (
												<div key={index} className="form-technologies-items">
													<p className="margin0">
														<i
															className={`devicon-${techno?.name}-plain colored`}
														></i>
														{techno?.name}
													</p>
													<i
														className="fal fa-backspace form-technologies-delete"
														onClick={() =>
															deleteUserTechno({
																id: user?.id,
																techno: techno.name,
															})
														}
													></i>
												</div>
											))}
										</div>
										<div className="project-technologies-frameworks">
											<h4>Database</h4>
											{databasesData?.length === 0 && (
												<p className="form-technologies-empty">vide...</p>
											)}
											{databasesData?.map((techno, index) => (
												<div key={index} className="form-technologies-items">
													<p className="margin0">
														<i
															className={`devicon-${techno?.name}-plain colored`}
														></i>
														{techno?.name}
													</p>
													<i
														className="fal fa-backspace form-technologies-delete"
														onClick={() =>
															deleteUserTechno({
																id: user?.id,
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
												<p className="form-technologies-empty">vide...</p>
											)}
											{othersData?.map((techno, index) => (
												<div key={index} className="form-technologies-items">
													<p className="margin0">
														<i
															className={`devicon-${techno?.name}-plain colored`}
														></i>
														{techno?.name}
													</p>
													<i
														className="fal fa-backspace form-technologies-delete"
														onClick={() =>
															deleteUserTechno({
																id: user?.id,
																techno: techno.name,
															})
														}
													></i>
												</div>
											))}
										</div>
									</div>
								</div>
								<button
									type="button"
									className="main-button-colored create-project-button"
									onClick={() =>
										dispatch(
											setDisplayEdit({ name: "isEditTechnologiesActive" })
										)
									}
								>
									Valider
								</button>
							</div>
						)}
						{isEditTechnologiesActive === false && (
							<div
								className="desc_container_technos min-height-technos-container"
								style={
									displayAllDescription === true
										? { height: "29vh", overflowY: "scroll" }
										: {}
								}
							>
								<div className="profile-edition-btns-container">
									<h4 className="desc_container_main">Compétences</h4>
									{isMyProfile && (
										<div
											className="edit-btn-main"
											onClick={() =>
												dispatch(
													setDisplayEdit({ name: "isEditTechnologiesActive" })
												)
											}
										>
											Modifier
										</div>
									)}
								</div>
								<div className="user-technologies margin-left2">
									<div className="project-technologies-languages">
										<h4>Langages</h4>
										{languagesData?.length === 0 && (
											<p className="form-technologies-empty">vide...</p>
										)}
										{languagesData?.map((techno, index) => (
											<span key={index} className="technologies-icon-container">
												<i
													className={`devicon-${techno?.name}-plain`}
													style={{ backgroundColor: `${techno?.color}` }}
												></i>
												{techno?.name}
											</span>
										))}
									</div>

									<div className="project-technologies-frameworks">
										<h4>Frameworks</h4>
										{frameworksData?.length === 0 && (
											<p className="form-technologies-empty">vide...</p>
										)}
										{frameworksData?.map((techno, index) => (
											<span key={index} className="technologies-icon-container">
												<i
													className={`devicon-${techno?.name}-plain`}
													style={{ backgroundColor: `${techno?.color}` }}
												></i>
												{techno?.name}
											</span>
										))}
									</div>
									<div className="project-technologies-languages">
										<h4>Database</h4>
										{databasesData?.length === 0 && (
											<p className="form-technologies-empty">vide...</p>
										)}
										{databasesData?.map((techno, index) => (
											<span key={index} className="technologies-icon-container">
												<i
													className={`devicon-${techno?.name}-plain`}
													style={{ backgroundColor: `${techno?.color}` }}
												></i>
												{techno?.name}
											</span>
										))}
									</div>
									<div className="project-technologies-others">
										<h4>Autres</h4>
										{othersData?.length === 0 && (
											<p className="form-technologies-empty">vide...</p>
										)}
										{othersData?.map((techno, index) => (
											<span key={index} className="technologies-icon-container">
												<i
													className={`devicon-${techno?.name}-plain`}
													style={{ backgroundColor: `${techno?.color}` }}
												></i>
												{techno?.name}
											</span>
										))}
									</div>
								</div>
							</div>
						)}
					</div>
				</div>
				<div className="profil_projets">
					<div className="desc_container_project">
						<h4 className="desc_container_main">Projet(s)</h4>
						{findMyProjects()?.map((project) => (
							<div key={project.myProject.id} className="card_project">
								<img
									src={project.myProject?.picture}
									className="card_img"
									alt=""
								/>
								<div className="card_main margin05">
									<h3 className="card_main_title-project">
										{project.myProject?.project}
									</h3>
									<p className="project-list-paragraph-desc">
										{project.myProject?.excerpt}
									</p>
									<div className="project-list-container">
										<p className="project-list-paragraph">{`${
											project.projectJobs.length -
											(project.projectTeam.length - 1)
										} co-équipiers`}</p>
										<div className="project-list-paragraph-grey">
											{moment(project.myProject?.start_date)
												.locale("fr")
												.format("LL")}
										</div>
									</div>
								</div>
								{project.myRole.role === "candidates" && (
									<div className="card_project_role card_project_role-candidat">
										Candidat
									</div>
								)}
								{project.myRole.role === "admin" && (
									<div className="card_project_role card_project_role-admin">
										Admin
									</div>
								)}
								{project.myRole.role === "participants" && (
									<div>participant</div>
								)}
							</div>
						))}
					</div>
				</div>
			</div>
		</>
	);
}

export default Profil;
