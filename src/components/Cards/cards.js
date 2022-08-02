/* eslint-disable jsx-a11y/anchor-is-valid */
// import PropTypes from 'prop-types';
import React, { useState } from "react";
import "./cards.scss";
import { Link } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import { useGetAllProjectsQuery } from "./../../pages/Projects/projectsAPISlice";
import moment from "moment/min/moment-with-locales";
import mockAvatar from "./../../assets/images/user-avatar.png";
import { useDispatch } from "react-redux";
import {
	addToFavorites,
	setFavorites,
	removeFromFavorites,
} from "./../../pages/App/appSlice";
import { useSelector } from "react-redux";
import { useGetOneUserQuery } from "./../../pages/Profiles/userAPISlice";
import { useEffect } from "react";

function ProjectList() {
	const { data: projectsTeams, isSuccess } = useGetAllProjectsQuery();
	const { email } = useSelector((state) => state.auth);
	const { data: user } = useGetOneUserQuery(email);
	console.log(projectsTeams);
	const allProjects = projectsTeams?.projects;
	const dispatch = useDispatch();

	//! conserver
	// const findTeamByProject = (projectId) => {
	// 	return projectsTeams?.teams?.filter(
	// 		(team) => team?.project_id === projectId
	// 	);
	// };
	const findProductOwnerOfProject = (projectId) => {
		return projectsTeams?.teams?.filter(
			(team) => team?.project_id === projectId && team?.role === "admin"
		)[0];
	};

	//! conserver ? @Léa
	// const handleToggleJobs = () => {
	// 	setToggleJobs(!toggleJobs);
	// };

	const [selected, setSelected] = useState(false);
	const handleToggleTechnos = (index) => {
		setSelected((prevState) => ({
			...prevState,
			[index]: !prevState[index],
		}));
	};

	// const [favorite, setFavorite] = useState(false);
	// const handleFavorites = (index) => {
	// 	setFavorite((prevState) => ({
	// 		...prevState,
	// 		[index]: !prevState[index],
	// 	}));
	// };

	useEffect(() => {
		const retrieveFavorites = JSON.parse(localStorage.getItem(`${user?.id}`));
		dispatch(setFavorites(retrieveFavorites));
	}, [dispatch, user?.id]);

	const { userFavorites } = useSelector((state) => state.app);

	const inputAnimation = {
		hidden: {
			width: 0,
			padding: 0,
			opacity: 0,
			transition: {
				duration: 0.4,
			},
		},
		show: {
			width: "auto",
			padding: "8px 20px",
			opacity: 1,
			transition: {
				duration: 0.4,
			},
		},
	};

	return (
		<div className="cards">
			{isSuccess &&
				allProjects.map((project, index) => (
					<div className="card" key={project.id}>
						<img src={project?.picture} className="card_img2" alt="" />
						<div className="icone_content">
							<div className="icone_content_btns">
								<span className="icone_button">
									{userFavorites?.map((fav) =>
										fav === project?.id ? (
											<i key={fav} className="fas fa-heart"></i>
										) : (
											<i
												className="fal fa-heart"
												onClick={() =>
													dispatch(
														addToFavorites({
															project: project.id,
															user: user.id,
														})
													)
												}
											></i>
										)
									)}

									{/* {favorite && favorite[index] ? (
										<i
											className="fas fa-heart"
											onClick={() => handleFavorites(index)}
										></i>
									) : (
										<i
											className="fal fa-heart"
											onClick={() => handleFavorites(index)}
										></i>
									)} */}
								</span>
							</div>
						</div>
						<div className="card_technologies_container">
							<div
								className="icone_button"
								onClick={() => {
									handleToggleTechnos(index);
								}}
							>
								<img
									src={require("./../../assets/images/v3-logo-colorize.png")}
									alt=""
								/>
							</div>
						</div>
						<AnimatePresence>
							{selected && selected[index] && (
								<motion.div
									key={project?.id}
									initial="hidden"
									animate="show"
									exit="hidden"
									variants={inputAnimation}
									className="card_technologies_container_icons"
								>
									{project?.techno?.map((techno) => (
										<i
											className={`devicon-${techno}-plain colored icon-techno`}
											key={techno}
										></i>
									))}
									<i className="fal fa-chevron-right icon-next"></i>{" "}
								</motion.div>
							)}
						</AnimatePresence>
						<div className="card_main">
							<div>
								<Link to={`/projet/${project.id}`}>
									<h2 className="card_main_title">{project.project}</h2>
								</Link>
							</div>
							<div>
								<p className="card_main_desc">
									{project?.excerpt}
									<a className="card_main_desc_link" href="#">
										voir plus.
									</a>
								</p>
								<p className="card_main_profiles">
									<span
										title="Développeur Front-End, DevOps, UX Designer"
										className="span-strong"
									>
										4
									</span>
									Co-équipier(s) recherché(s)
								</p>
								<div className="card_desc">
									<div className="card_desc_user">
										{project?.c_profil_picture &&
										project?.c_profil_picture.length > 1 ? (
											<img
												className="card_desc_user_avatar"
												src={project?.c_profil_picture}
												alt=""
											/>
										) : (
											<img
												className="card_desc_user_avatar"
												src={mockAvatar}
												alt=""
											/>
										)}

										<span className="card_desc_user_name">
											{`${findProductOwnerOfProject(project?.id)?.firstname} ${
												findProductOwnerOfProject(project?.id)?.lastname
											}`}
										</span>
									</div>
									<span className="card_desc_user_date">
										{moment(project?.start_date).locale("fr").format("LL")}
									</span>
								</div>
							</div>
						</div>
					</div>
				))}
		</div>
	);
}

export default ProjectList;
