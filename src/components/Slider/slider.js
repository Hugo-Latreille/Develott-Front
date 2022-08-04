/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState } from "react"; // Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { Link } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import ReactTooltip from "react-tooltip";
import moment from "moment/min/moment-with-locales";
import { toggleLoggingModalOpen } from "../../pages/Login/authSlice";
// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import "swiper/css/navigation";

import "./slider.scss";

// import required modules
import { Navigation, Pagination } from "swiper";
import { useGetAllProjectsQuery } from "./../../pages/Projects/projectsAPISlice";
import { useSelector, useDispatch } from "react-redux";
import mockAvatar from "./../../assets/images/user-avatar.png";

function Slider() {
	const dispatch = useDispatch();
	const displayDarkMode = useSelector((state) => state.app.displayDarkMode);
	const { data: projectsTeams, isSuccess } = useGetAllProjectsQuery();
	const allProjects = projectsTeams?.projects;

	const findProductOwnerOfProject = (projectId) => {
		return projectsTeams?.teams?.filter(
			(team) => team?.project_id === projectId && team?.role === "admin"
		)[0];
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

	const [selected, setSelected] = useState(false);
	const handleToggleTechnos = (index) => {
		setSelected((prevState) => ({
			...prevState,
			[index]: !prevState[index],
		}));
	};

	const scrollToTop = () => {
		window.scrollTo({
			top: 0,
			behavior: "smooth",
		});
	};

	return (
		<div data-tip data-for="slide" className="slider-container">
			<ReactTooltip
				id="slide"
				place="top"
				effect="solid"
				border
				textColor="dark"
				backgroundColor="#FFFFFF"
				borderColor="#74C9FE"
				className="tooltips_side"
			>
				Attraper et glisser pour faire défiler les projets !
			</ReactTooltip>
			<div className="container">
				{/* ***************************************PARAMETRES EFFET************************************ */}
				<Swiper
					breakpoints={{
						// when window width is >= 640px
						300: {
							width: 300,
							slidesPerView: 1,
						},
						// when window width is >= 768px
						760: {
							width: 760,
							slidesPerView: 2,
						},
						// when window width is >= 768px
						900: {
							width: 900,
							slidesPerView: 3,
						},
					}}
					spaceBetween={30}
					freeMode={true}
					grabCursor={true}
					pagination={{
						clickable: true,
					}}
					modules={[Pagination, Navigation]}
					className="swiperhome"
				>
					{/* ***************************************PARAMETRES EFFET************************************ */}
					{isSuccess &&
						allProjects.map((project, index) => (
							<SwiperSlide key={index}>
								<div className="slide_home">
									<img
										src={project?.picture}
										className="slide-img"
										alt="projectPicture"
									/>
									<div className="img-content">
										<div className="img-content-btns">
											<div className="icone_content_btns"></div>
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
									<div className="slider-main-content">
										<Link
											className="slider-main-content-title"
											onClick={scrollToTop()}
											to={`/connexion`}
										>
											<h3
												onClick={() => dispatch(toggleLoggingModalOpen())}
												className="slider-title"
											>
												{project.project}
											</h3>
										</Link>
										<div>
											<p className="slider-desc">
												{project?.excerpt}
												<Link
													onClick={() => {
														scrollToTop();
														dispatch(toggleLoggingModalOpen());
													}}
													to="/connexion"
												>
													{" "}
													voir plus.
												</Link>
											</p>
											{/* <div className="card_main_profiles">
                        <span
                          title="Développeur Front-End, DevOps, UX Designer"
                          className="span-strong"
                        >
                          4
                        </span>
                        {!displayDarkMode && (
                          <ReactTooltip
                            className="tooltips_cards"
                            place="right"
                            effect="solid"
                            border
                            textColor="#272727"
                            backgroundColor="#FFFFFF"
                            borderColor="#272727"
                          />
                        )}
                        {displayDarkMode && (
                          <ReactTooltip
                            className="tooltips_cards"
                            place="right"
                            type="light"
                            effect="solid"
                            border
                            textColor="#FFFFFF"
                            borderColor="#FFFFFF"
                            backgroundColor="#231661"
                          />
                        )}
                        Co-équipier(s) recherché(s)
                      </div> */}
											<div className="slider-content-container">
												<div className="slider-user-container">
													{project?.c_profil_picture &&
													project?.c_profil_picture.length > 1 ? (
														<img
															className="slider-avatar"
															src={project?.c_profil_picture}
															alt=""
														/>
													) : (
														<img
															className="slider-avatar"
															src={mockAvatar}
															alt=""
														/>
													)}
													<span className="slider-user-name">{`${
														findProductOwnerOfProject(project?.id)?.firstname
													} ${
														findProductOwnerOfProject(project?.id)?.lastname
													}`}</span>
												</div>
												<span className="slider-date">
													{moment(project?.start_date)
														.locale("fr")
														.format("LL")}
												</span>
											</div>
										</div>
									</div>
								</div>
							</SwiperSlide>
						))}
				</Swiper>
			</div>
		</div>
	);
}

export default Slider;
