/* eslint-disable jsx-a11y/anchor-is-valid */
// import PropTypes from 'prop-types';
import React, { useState } from "react";
import ReactTooltip from "react-tooltip";
import { useSelector } from "react-redux";
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
import { useGetOneUserQuery } from "./../../pages/Profiles/userAPISlice";
import { useEffect } from "react";
import Skeleton from "./../Skeletron/skeleton";

function ProjectList() {

  const dispatch = useDispatch();

  const { searchTechnology, searchJob, searchProjectName, searchDate } =
    useSelector((state) => state.searchbar);

  const {
    data: projectsTeams,
    isLoading,
    isSuccess,
  } = useGetAllProjectsQuery();
  const { email } = useSelector((state) => state.auth);
  const { data: user } = useGetOneUserQuery(email);
  console.log(projectsTeams);
  let allProjects = projectsTeams?.projects;
  const { userFavorites, showFavorites } = useSelector((state) => state.app);
  const displayDarkMode = useSelector((state) => state.app.displayDarkMode);

  //! conserver
const findTeamByProject = (projectId) => {
		return projectsTeams?.teams?.filter(
			(team) => team?.project_id === projectId && team?.role === "participants"
		);
	};

  const findJobsByProject = (projectId) => {
    return projectsTeams?.jobByProject?.filter(
      (job) => job?.project_id === projectId
    );
  };

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

  useEffect(() => {
    const retrieveFavorites = JSON.parse(localStorage.getItem(`${user?.id}`));
    if (retrieveFavorites) {
      dispatch(setFavorites(retrieveFavorites));
    }
  }, [dispatch, user?.id]);

  const isFavorite = (projectId) => {
    return userFavorites?.find((fav) => fav === projectId);
  };

  const findFavoritesInfos = () => {
    return allProjects.filter((project) =>
      userFavorites.some((fav) => fav === project.id)
    );
  };

  const findProjectByName = (id) => {
    const foundProject = allProjects?.filter((element) => element.id === id);
    console.log(foundProject);
    return foundProject;
  };

  const findProjectsByTechnologyName = (technology) => {
    const filteredProjects = allProjects?.filter((project) =>
      project?.techno?.includes(technology)
    );
    return filteredProjects;
  };

  const findProjectsByDate = (date) => {
    const filteredProjects = allProjects?.filter(
      (project) => project?.start_date > date
    );
    return filteredProjects;
  };

  const findProjectsByJobName = (id) => {
    const projectHasJobData = projectsTeams?.jobByProject.filter(
      (job) => job?.job_id === parseInt(id)
    );

    const filteredProjects = [];

    projectHasJobData?.forEach((element) => {
      const foundProject = allProjects?.find(
        (projet) => projet.id === element.project_id
      );
      filteredProjects.push(foundProject);
    });

    return filteredProjects;
  };

  const findProject = (technoName, jobId) => {
    if (jobId !== "" && technoName !== "") {
      const projectHasJobData = projectsTeams?.jobByProject.filter(
        (job) => job?.job_id === parseInt(jobId)
      );

      const filteredProjects1 = [];

      projectHasJobData.forEach((element) => {
        const foundProject = allProjects?.find(
          (projet) => projet.id === element.project_id
        );
        filteredProjects1.push(foundProject);
      });

      const filteredProjects2 = filteredProjects1?.filter((project) =>
        project?.techno?.includes(technoName)
      );
      return filteredProjects2;
    } else if (jobId === "") {
      const filteredProjects = allProjects?.filter((project) =>
        project?.techno?.includes(technoName)
      );
      return filteredProjects;
    } else if (technoName === "") {
      const projectHasJobData = projectsTeams?.jobByProject.filter(
        (job) => job?.job_id === parseInt(jobId)
      );

      const filteredProjects = [];

      projectHasJobData.forEach((element) => {
        const foundProject = allProjects?.find(
          (projet) => projet.id === element.project_id
        );
        filteredProjects.push(foundProject);
      });

      return filteredProjects;
    }
  };

  const inputAnimation = {
    hidden: {
      width: 0,
      padding: 0,
      opacity: 0,
      transition: {
        duration: 0.3,
      },
    },
    show: {
      width: "auto",
      padding: "8px 20px",
      opacity: 1,
      transition: {
        duration: 0.3,
      },
    },
  };

  if (showFavorites && userFavorites.length > 0) {
    allProjects = findFavoritesInfos();
  }

  if (searchTechnology !== "" && searchJob === "") {
    allProjects = findProjectsByTechnologyName(searchTechnology);
  }

  if (searchJob !== "" && searchTechnology === "") {
    allProjects = findProjectsByJobName(Number(searchJob));
  }

  if (searchJob !== "" && searchTechnology !== "") {
    allProjects = findProject(searchTechnology, Number(searchJob));
  }

  if (searchProjectName !== "") {
    allProjects = findProjectByName(Number(searchProjectName));
  }

  if (searchDate !== "") {
    allProjects = findProjectsByDate(searchDate);
  }

  return (
    <div className="cards">
      {isLoading && <Skeleton />}
      {isSuccess &&
        allProjects?.map((project, index) => (
          <div className="card" key={project.id}>
            <img src={project?.picture} className="card_img2" alt="" />
            <div className="icone_content">
              <div className="icone_content_btns">
                <span className="icone_button fav">
                  {isFavorite(project?.id) ? (
                    <i
                      className="fas fa-heart"
                      onClick={() =>
                        dispatch(
                          removeFromFavorites({
                            project: project.id,
                            user: user.id,
                          })
                        )
                      }
                    ></i>
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
                  )}
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
                      className={`devicon-${techno}-plain colored icon-techno mini_icon`}
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
                  <Link to={`/projet/${project.id}`}>
                    <span className="card_main_desc_link"> voir plus.</span>
                  </Link>
                </p>

                <div className="card_main_profiles">
                  <span
                    data-tip={findJobsByProject(project?.id).map(
                      (job) => job.job
                    )}
                    className="span-strong"
                  >
                    {findJobsByProject(project?.id).length -
                      	findTeamByProject(project?.id).length}
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
                </div>
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
