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

	const { data: allProjects, isLoading, isSuccess } = useGetAllProjectsQuery();

	console.log(allProjects);

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
						<img
							src="https://img.freepik.com/free-psd/artist-room-decorated-with-website-mockup_23-2148834377.jpg?t=st=1657989378~exp=1657989978~hmac=c9b385a472b91f3ed478c556c5a221c200aca1532704a909e7bcc8c23b110003&w=900"
							className="card_img"
							alt=""
						/>
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
							<Link to={`/projet/${project.id}`}>
								<h1 className="card_main_title">{project.name}</h1>
							</Link>
							<p className="card_main_desc">
								{project.exerpt}}{" "}
								<a className="card_main_desc_link" href="#">
									voir plus.
								</a>
							</p>
							<p className="card_main_profiles">
								<span
									title="Developpeur Front-End, DevOps, UX Designer"
									className="span-strong"
								>
									4{" "}
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
									<span className="card_desc_user_name">John D'oeuf</span>
								</div>
								<span className="card_desc_user_date">
									{moment(project.createdAt).locale("fr").format("LLLL")}
								</span>
							</div>
						</div>
					</div>
				))}
		</div>
	);
}

export default ProjectList;
