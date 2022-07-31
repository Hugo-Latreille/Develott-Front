/* eslint-disable jsx-a11y/anchor-is-valid */
// import PropTypes from 'prop-types';
import React, { useState } from "react";
import "./cards.scss";
import { Link } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import { useGetAllProjectsQuery } from "./../../pages/Projects/projectsAPISlice";
import moment from "moment/min/moment-with-locales";
function ProjectList() {
	const [toggleJobs, setToggleJobs] = useState(false);
	const [toggleTechnos, setToggleTechnos] = useState(false);

	const { data: projectsTeams, isSuccess } = useGetAllProjectsQuery();

	console.log(projectsTeams);

	const allProjects = projectsTeams?.projects;

	const findTeamByProject = (projectId) => {
		return projectsTeams?.teams?.filter(
			(team) => team?.project_id === projectId
		);
	};
	const findProductOwnerOfProject = (projectId) => {
		return projectsTeams?.teams?.filter(
			(team) => team?.project_id === projectId && team?.role === "admin"
		)[0];
	};

	const handleToggleJobs = () => {
		setToggleJobs(!toggleJobs);
	};

	const handleToggleTechnos = () => {
		setToggleTechnos(!toggleTechnos);
		setToggleJobs(!toggleJobs);
	};

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
				allProjects.map((project) => (
					<div className="card" key={project.id}>
						<img src={project?.picture} className="card_img2" alt="" />
						<div className="icone_content">
							<div className="icone_content_btns">
								<span className="icone_button">
									<i className="fal fa-heart"></i>
								</span>
							</div>
						</div>
						<div className="card_technologies_container">
							<div className="icone_button" onClick={handleToggleTechnos}>
								<img
									src={require("./../../assets/images/v3-logo-colorize.png")}
									alt=""
								/>
							</div>
						</div>
						<AnimatePresence>
							{toggleTechnos && (
								<motion.div
									initial="hidden"
									animate="show"
									exit="hidden"
									variants={inputAnimation}
									className="card_technologies_container_icons"
								>
									<i className="devicon-javascript-plain colored icon-techno"></i>
									<i className="devicon-nodejs-plain colored"></i>
									<i className="devicon-postgresql-plain colored"></i>
									<i className="devicon-react-original colored"></i>
									<i className="devicon-postgresql-plain colored"></i>
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
										title="Developpeur Front-End, DevOps, UX Designer"
										className="span-strong"
									>
										4
									</span>
									Co-équipier(s) recherché(s)
								</p>
								<div className="card_desc">
									<div className="card_desc_user">
										<img
											className="card_desc_user_avatar"
											src="https://www.pngall.com/wp-content/uploads/12/Avatar-Profile.png"
											alt=""
										/>
										<span className="card_desc_user_name">
											{`${findProductOwnerOfProject(project?.id)?.firstname} ${
												findProductOwnerOfProject(project?.id)?.lastname
											}`}
										</span>
									</div>
									<span className="card_desc_user_date">
										{moment(project?.start_date).locale("fr").format("LLLL")}
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
