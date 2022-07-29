/* eslint-disable jsx-a11y/anchor-is-valid */
// import PropTypes from 'prop-types';
// import React, { useState } from "react";
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

import { useSelector, useDispatch } from "react-redux";
import {
	setDisplayEdit,
	setNewUserImg,
	removeData,
	setUserDescription,
} from "./../../pages/Profiles/userProfileSlice";
import { useGetOneUserQuery } from "../../pages/Profiles/userAPISlice";
import SearchBarJobsUser from "./../SearchBar/SearchBarJobsUser";
import { useState } from "react";
import { useEffect } from "react";

function Profil() {
	const dispatch = useDispatch();

	const {
		isEditDescriptionActive,
		isEditTechnologiesActive,
		isEditUserPictureActive,
		userTechnologiesData,
		displayAllDescription,
		userJobData,
		userImg,
		userDescription,
	} = useSelector((state) => state.userProfile);

	// const [editorState, setEditorState] = useState(EditorState.createEmpty());
	const html = "<p>Hey this <strong>editor</strong> rocks 😀</p>";
	const contentBlock = htmlToDraft(html);
	const contentState = ContentState.createFromBlockArray(
		contentBlock.contentBlocks
	);
	const [editorState, setEditorState] = useState(
		EditorState.createWithContent(contentState)
	);
	const handleEditorChange = (editorState) => {
		setEditorState(editorState);
	};

	const handleDescriptionSubmit = (e) => {
		e.preventDefault();
		console.log(editorState);
		dispatch(
			setUserDescription(
				draftToHtml(convertToRaw(editorState.getCurrentContent()))
			)
		);

		dispatch(setDisplayEdit({ name: "isEditDescriptionActive" }));
	};

	const email = useSelector((state) => state.auth.email);
	const { data: user } = useGetOneUserQuery(email);
	console.log(user);

	const languagesData = userTechnologiesData.filter((technology) =>
		technology.tags.includes("language")
	);

	const frameworksData = userTechnologiesData.filter((technology) =>
		technology.tags.includes("framework")
	);

	const othersData = userTechnologiesData.filter(
		(technology) =>
			!technology.tags.includes("framework") &&
			!technology.tags.includes("language")
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
					dispatch(setNewUserImg(newImg));
				}
			}
		);
		widget.open();
	};

	return (
		<>
			<div className="profil ">
				<div className="profil_desc">
					<div className="desc_container_description">
						{isEditUserPictureActive ? (
							<div className=" desc_container_description-username">
								<button onClick={() => showCloudinaryWidget()}>
									Uploader une nouvelle image
								</button>
								<div className="desc_container_description-user">
									<p className="name_container_user">{`${user?.firstname} ${user?.lastname}`}</p>
									<SearchBarJobsUser />
								</div>
								<i
									className="fal fa-edit"
									onClick={() =>
										dispatch(
											setDisplayEdit({ name: "isEditUserPictureActive" })
										)
									}
								></i>
							</div>
						) : (
							<div className=" desc_container_description-username">
								<img className="name_container_avatar" src={userImg} alt="" />
								<div className="desc_container_description-user">
									<p className="name_container_user">{`${user?.firstname} ${user?.lastname}`}</p>
									<p className="desc_container_role">{userJobData}</p>
								</div>
								<i
									className="fal fa-edit"
									onClick={() =>
										dispatch(
											setDisplayEdit({ name: "isEditUserPictureActive" })
										)
									}
								></i>
							</div>
						)}
						<div className=" desc_container_description-links-informations">
							<div className="desc_container_description-links">
								<p className="desc_container_title user-available">
									<i className="fas fa-circle success"></i> Disponible pour
									débuter un nouveau projet
								</p>
								<p className="desc_container_title">
									<i className="fas fa-map-marker color-secondary"></i>{" "}
									Montpellier
								</p>
								<p className="desc_container_title">
									<i className="fas fa-envelope color-secondary"></i>{" "}
									batman@batmail.batfr
								</p>
								<p className="desc_container_title">
									<i className="fab fa-github color-secondary"></i>{" "}
									<a href="#"> Superman-Suck</a>{" "}
								</p>
								<p className="desc_container_title">
									<i className="fab fa-linkedin color-secondary"></i>{" "}
									<a href="#"> Bruce Wayne</a>
								</p>
								<p className="desc_container_title">
									<i className="fas fa-globe color-secondary"></i>{" "}
									<a href="#"> brucewayne.com</a>
								</p>
							</div>
							<p className="desc_container_title user-password">
								<i className="fal fa-key"></i> Mot de Passe
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
									<textarea
										disabled
										value={draftToHtml(
											convertToRaw(editorState.getCurrentContent())
										)}
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
											Bruce en quelques mots...
										</h4>
										<i
											className="fal fa-edit"
											onClick={() =>
												dispatch(
													setDisplayEdit({ name: "isEditDescriptionActive" })
												)
											}
										></i>
									</div>
									<p className="user-description-texte">
										{displayAllDescription === false &&
											DisplayShowMoreDescription(user?.description)}
										{displayAllDescription === true && user?.description}
										{displayAllDescription === false && (
											<span
												className="user_desc_link"
												onClick={() =>
													dispatch(
														setDisplayEdit({ name: "displayAllDescription" })
													)
												}
											>
												... voir plus.
											</span>
										)}
										{displayAllDescription === true && (
											<span
												className="user_desc_link"
												onClick={() =>
													dispatch(
														setDisplayEdit({ name: "displayAllDescription" })
													)
												}
											>
												voir moins.
											</span>
										)}
									</p>
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
										? { height: "26vh", overflowY: "scroll" }
										: {}
								}
							>
								<div className="profile-edition-btns-container">
									<h4 className="desc_container_main">Compétences</h4>
									<i
										className="fal fa-edit"
										onClick={() =>
											dispatch(
												setDisplayEdit({ name: "isEditTechnologiesActive" })
											)
										}
									></i>
								</div>
								<div className="user-technologies">
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
								<p className="card_main_desc">
									Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
									do eiusmod...{" "}
									<a className="card_main_desc_link" href="#">
										voir plus.
									</a>
								</p>
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
								<p className="card_main_desc">
									Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
									do eiusmod...{" "}
									<a className="card_main_desc_link" href="#">
										voir plus.
									</a>
								</p>
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	);
}

export default Profil;
