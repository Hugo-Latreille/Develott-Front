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

import { useSelector, useDispatch } from "react-redux";
import {
	setDisplayEdit,
	setNewUserImg,
	removeData,
	setUserDescription,
	setUserData,
	setData,
} from "./../../pages/Profiles/userProfileSlice";
import {
	useGetOneUserQuery,
	useUpdateUserMutation,
} from "../../pages/Profiles/userAPISlice";
import SearchBarJobsUser from "./../SearchBar/SearchBarJobsUser";
import { useEffect, useState } from "react";
import technologiesJson from "./../../assets/data/technologiesData.json";
import { Link } from "react-router-dom";

function Profil() {
	const dispatch = useDispatch();
	const { email } = useSelector((state) => state.auth);
	const { data: user } = useGetOneUserQuery(email);
	const [updateUser] = useUpdateUserMutation();

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

	const findUserTechnosFromDatabase = user?.techno?.map(
		(techno) => technologiesJson.filter((tech) => tech.name === techno)[0]
	);
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
								{user?.profil_picture ? (
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
								<div className="desc_container_description-user">
									<p className="name_container_user">{`${user?.firstname} ${user?.lastname}`}</p>
									<p className="desc_container_role">
										{user?.job ? (
											user?.job
										) : (
											<div
												className="cursor-pointer"
												onClick={() =>
													dispatch(
														setDisplayEdit({ name: "isEditUserPictureActive" })
													)
												}
											>
												Renseigner mon poste
											</div>
										)}
									</p>
								</div>
							</div>
						)}
						<div className=" desc_container_description-links-informations">
							<div className="desc_container_description-links">
								<p className="desc_container_title user-available">
									<i className="fas fa-circle success"></i> Disponible pour
									débuter un nouveau projet
								</p>
								{isEditUserInfos === false && (
									<>
										<div
											className="project-img-container-edit-btn"
											onClick={() =>
												dispatch(setDisplayEdit({ name: "isEditUserInfos" }))
											}
										>
											Modifier
										</div>
										<div className="desc_container_user-links-dark">
											<p className="desc_container_title">
												<i className="fas fa-map-marker color-secondary"></i>
												{user?.city ? user?.city : "Ville"}
											</p>
											<p className="desc_container_title">
												<i className="fab fa-github color-secondary"></i>
												<a href="#">
													{" "}
													{user?.url_github ? user?.url_github : "GitHub"}
												</a>
											</p>
											<p className="desc_container_title">
												<i className="fab fa-linkedin color-secondary"></i>
												<a href="#">
													{" "}
													{user?.url_linkedin ? user?.url_linkedin : "Linkedin"}
												</a>
											</p>
											<p className="desc_container_title">
												<i className="fas fa-globe color-secondary"></i>
												<a href="#">
													{" "}
													{user?.url_portfolio
														? user?.url_portfolio
														: "Portfolio"}
												</a>
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
								<Link to={`/newpassword/${user?.id}`}>
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
									<SearchBarTechnologiesUserProfile />
									<div className="user-technologies margin-top2">
										<div className="project-technologies-languages">
											<h4>Langages</h4>
											{languagesData?.length === 0 && (
												<p className="form-technologies-empty">vide...</p>
											)}
											{languagesData?.map((techno) => (
												<div
													key={techno.name}
													className="form-technologies-items"
												>
													<p className="margin0">
														<i
															className={`devicon-${techno.name}-plain colored`}
														></i>
														{techno.name}
													</p>
													<i
														className="fal fa-backspace form-technologies-delete"
														onClick={() =>
															dispatch(
																removeData({
																	name: "userTechnologiesData",
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
											{frameworksData?.length === 0 && (
												<p className="form-technologies-empty">vide...</p>
											)}
											{frameworksData?.map((techno) => (
												<div
													key={techno.name}
													className="form-technologies-items"
												>
													<p className="margin0">
														<i
															className={`devicon-${techno.name}-plain colored`}
														></i>
														{techno.name}
													</p>
													<i
														className="fal fa-backspace form-technologies-delete"
														onClick={() =>
															dispatch(
																removeData({
																	name: "userTechnologiesData",
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
											<h4>Database</h4>
											{databasesData?.length === 0 && (
												<p className="form-technologies-empty">vide...</p>
											)}
											{databasesData?.map((techno) => (
												<div
													key={techno.name}
													className="form-technologies-items"
												>
													<p className="margin0">
														<i
															className={`devicon-${techno.name}-plain colored`}
														></i>
														{techno.name}
													</p>
													<i
														className="fal fa-backspace form-technologies-delete"
														onClick={() =>
															dispatch(
																removeData({
																	name: "userTechnologiesData",
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
											{othersData?.length === 0 && (
												<p className="form-technologies-empty">vide...</p>
											)}
											{othersData?.map((techno) => (
												<div
													key={techno.name}
													className="form-technologies-items"
												>
													<p className="margin0">
														<i
															className={`devicon-${techno.name}-plain colored`}
														></i>
														{techno.name}
													</p>
													<i
														className="fal fa-backspace form-technologies-delete"
														onClick={() =>
															dispatch(
																removeData({
																	name: "userTechnologiesData",
																	field: "name",
																	value: techno.name,
																})
															)
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
								</div>
								<div className="user-technologies margin-left2">
									<div className="project-technologies-languages">
										<h4>Langages</h4>
										{languagesData?.length === 0 && (
											<p className="form-technologies-empty">vide...</p>
										)}
										{languagesData?.map((techno) => (
											<span
												key={techno.name}
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
										{frameworksData?.length === 0 && (
											<p className="form-technologies-empty">vide...</p>
										)}
										{frameworksData?.map((techno) => (
											<span
												key={techno.name}
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
									<div className="project-technologies-languages">
										<h4>Database</h4>
										{databasesData?.length === 0 && (
											<p className="form-technologies-empty">vide...</p>
										)}
										{databasesData?.map((techno) => (
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
										{othersData?.length === 0 && (
											<p className="form-technologies-empty">vide...</p>
										)}
										{othersData?.map((techno) => (
											<span
												key={techno?.name}
												className="technologies-icon-container"
											>
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
						<div className="card_project">
							<img
								src="https://img.freepik.com/free-psd/artist-room-decorated-with-website-mockup_23-2148834377.jpg?t=st=1657989378~exp=1657989978~hmac=c9b385a472b91f3ed478c556c5a221c200aca1532704a909e7bcc8c23b110003&w=900"
								className="card_img"
								alt=""
							/>
							<div className="card_main">
								<h3 className="card_main_title-project">Develott</h3>
								<p className="project-list-paragraph-desc">
									Lorem ipsum dolor sit amet, consectetur adipiscing...
								</p>
								<p className="project-list-paragraph">4 co-équipiers</p>
								<p className="project-list-paragraph-grey">Le 30 mai 2022</p>
							</div>
						</div>
						<div className="card_project">
							<img
								src="https://img.freepik.com/free-psd/artist-room-decorated-with-website-mockup_23-2148834377.jpg?t=st=1657989378~exp=1657989978~hmac=c9b385a472b91f3ed478c556c5a221c200aca1532704a909e7bcc8c23b110003&w=900"
								className="card_img"
								alt=""
							/>
							<div className="card_main">
								<h3 className="card_main_title-project">Develott</h3>
								<p className="project-list-paragraph-desc">
									Lorem ipsum dolor sit amet, consectetur adipiscing...
								</p>
								<p className="project-list-paragraph">4 co-équipiers</p>
								<p className="project-list-paragraph-grey">Le 30 mai 2022</p>
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	);
}

export default Profil;
