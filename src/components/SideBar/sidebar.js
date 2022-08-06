import { AnimatePresence, motion } from "framer-motion";
import ReactTooltip from "react-tooltip";
import { FaProjectDiagram, FaPlusSquare } from "react-icons/fa";
import { BiGame } from "react-icons/bi";
import { MdMessage, MdOutlineLogout } from "react-icons/md";
import { NavLink } from "react-router-dom";
import { AiOutlineDashboard } from "react-icons/ai";
import Toggle from "../ToggleDarkmode/toggle";
import LogoW from "../../assets/images/v3-logo-white.png";
import "./sidebar.scss";
import "intro.js/introjs.css";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useUserLogoutMutation } from "../../pages/Login/authAPISlice";
import { logOut } from "../../pages/Login/authSlice";
import { toggleSideBar } from "../../pages/App/appSlice";
import { setDisplayDarkMode } from "../../pages/App/appSlice";
import { useGetOneUserQuery } from "../../pages/Profiles/userAPISlice";
import { toggleOpenIntro } from "./sidebarSlice";

import { Steps } from "intro.js-react";
import { useGetAllProjectsQuery } from "../../pages/Projects/projectsAPISlice";


let routes = [
	{
		path: "/dashboard",
		name: "Dashboard",
		icon: <AiOutlineDashboard />,
		tooltip: "Dashboard",
	},
	{
		path: "/projets",
		name: "Projets",
		icon: <FaProjectDiagram />,
		tooltip: "Les Projets",
	},
	{
		path: "/projet/create",
		name: "Créer Projet",
		icon: <FaPlusSquare />,
		tooltip: "Créer un projet",
	},
	{
		path: "/game",
		name: "Detente",
		icon: <BiGame />,
		tooltip: "Detente",
	},
];

function Sidebar({ children, isVisible }) {
	const introIsOpen = useSelector((state) => state.sidebarintro.introIsOpen);
	const isOpen = useSelector((state) => state.app.sideBarIsOpen);
	const displayDarkMode = useSelector((state) => state.app.displayDarkMode);
	const dispatch = useDispatch();
	const [userLogout] = useUserLogoutMutation();
	const { email } = useSelector((state) => state.auth);
	const { data: user } = useGetOneUserQuery(email);
	const { data: projectsTeams } = useGetAllProjectsQuery();
	const [initialStep, setInitialStep] = useState(0);

	const showDashboard = projectsTeams?.teams?.find(
		(team) =>
			team.customer_id === user?.id &&
			(team.role === "admin" || team.role === "participants")
	);

	if (!showDashboard) {
		routes = routes.filter((route) => route.name !== "Dashboard");
	}

	const onExit = () => {
		dispatch(toggleOpenIntro());
	};
	const steps = [
		{
			element: "#intromain",
			intro:
				"Bienvenue sur Develott ! Nous sommes heureux de te connaitre. Suis moi, je vais t'expliquer comment ça marche...",
			position: "center",
		},
		{
			element: "#sideok",
			intro:
				"Ici c'est votre Sidebar elle est cool hein ? Elle deviendra vite votre meilleure amie. Tu y retrouveras tous les liens utiles. Utilise notre logo pour l'ouvrir ou la fermer.",
			position: "right",
		},
		{
			element: "#step-0",
			intro:
				"Voici le Dashboard, quand tu auras rejoint un projet il te permettra de retrouver toutes les infos utiles à la bonne réalisation de votre application (qui va revolutionner le monde, on croise les doigts !)",
			position: "right",
		},
		{
			element: "#step-1",
			intro:
				"Ici, tu retouveras tous les projets proposés par notre IMMENSE communauté. Y'a le choix, choisis le bien et postule (qui ne tente rien..)",
			position: "right",
		},
		{
			element: "#step-2",
			intro:
				"Là c'est la création de projet. Tu as des idées, l'âme d'un artiste ou l'envie de progresser ? Crée ton projet, choisis ton équipe et fais de tes réves une réalité (on croit en toi !)",
			position: "right",
		},
		{
			element: "#step-3",
			intro:
				"Ah ! Besoin de décompresser ? ou juste d'attendre que ton équipe soit connectée ? Detend toi avec notre jeu Snake fait maison",
			position: "right",
		},
		{
			element: "#profil",
			intro:
				"Ici tu retrouveras ton profil, tu peux ajouter ou modifier ta photo de profil, ta description et tes liens personnels. C'est ta petite bulle à toi !",
			position: "right",
		},
		{
			element: "#navbar",
			intro:
				"On à bientôt fini...  Utilise cette barre de recherche pour trouver des projets en fonction de plusieurs critéres (Technologies / Metier / Date) ou par titre de projet. Hésite pas à ajouter tes projets préférés en Favoris pour les retrouver facilement... C'est tout pour moi ! Bienvenue dans l'équipe de Develott",
			position: "center",
		},
	];


  const handleLogout = async () => {
    await userLogout();
    dispatch(logOut());
  };

  const showAnimation = {
    hidden: {
      width: 0,
      opacity: 0,
      transition: {
        duration: 0.2,
      },
    },
    show: {
      width: "auto",
      opacity: 1,
      transition: {
        duration: 0.4,
      },
    },
  };
  const logoAnimation = {
    hidden: {
      width: "2.5em",
      opacity: 1,
      transition: {
        duration: 0.3,
      },
    },
    show: {
      width: "2.5rem",
      opacity: 1,
      transition: {
        duration: 0.4,
      },
    },
  };
  const logAnimation = {
    hidden: {
      width: 0,
      opacity: 0,
      transition: {
        duration: 0,
      },
    },
    show: {
      width: "auto",
      rotate: 360,
      scale: 1,
      opacity: 1,
      transition: {
        duration: 0.3,
      },
    },
  };
  const profilAnimation = {
    hidden: {
      width: 0,
      opacity: 0,
      transition: {
        duration: 0,
      },
    },
    show: {
      width: "auto",
      rotate: 360,
      opacity: 1,
      transition: {
        duration: 0.4,
      },
    },
  };
  return (
    <div className="sidebar_container">
      <Steps
        enabled={introIsOpen}
        steps={steps}
        initialStep={initialStep}
        onComplete={onExit}
        onExit={() => ""}
      />
      <motion.div
        id="sideok"
        key="main_side"
        initial={{ width: isOpen ? "250px" : "54px" }}
        animate={{
          width: isOpen ? "250px" : "54px",
          transition: {
            duration: 0.5,
            type: "spring",
            damping: 12,
          },
        }}
        className="sidebar"
      >
        <div className="top_section">
          <AnimatePresence initial={false}>
            {isOpen && (
              <NavLink to="/projets">
                <motion.p
                  key="top_section"
                  initial="hidden"
                  animate="show"
                  exit="hidden"
                  variants={showAnimation}
                  className="logo_nav"
                >
                  Develott
                </motion.p>
              </NavLink>
            )}
          </AnimatePresence>
          <div className="bars">
            {isOpen && (
              <motion.img
                key="bars"
                whileHover={{ scale: 1.4, rotate: 180 }}
                whileTap={{
                  scale: 0.8,
                  rotate: -90,
                  borderRadius: "100%",
                }}
                initial="hidden"
                animate="show"
                exit="hidden"
                variants={logoAnimation}
                className="bars_logo"
                src={LogoW}
                alt="logo"
                onClick={() => dispatch(toggleSideBar())}
              />
            )}
            {!isOpen && (
              <motion.img
                key="bars_closed"
                whileHover={{ scale: 1.2, rotate: 180 }}
                whileTap={{
                  scale: 0.8,
                  rotate: -90,
                  borderRadius: "100%",
                }}
                initial="hidden"
                animate="show"
                exit="hidden"
                variants={logoAnimation}
                className="bars_logo"
                src={LogoW}
                alt="logo"
                onClick={() => dispatch(toggleSideBar())}
              />
            )}
          </div>

          {isOpen && <div className="anim"></div>}
        </div>
        <div className="space" onClick={() => dispatch(toggleSideBar())}></div>
        <section className="sidebar_icon">
          {routes.map((route, id) => (
            <NavLink
              to={route.path}
              key={route.name}
              id={`step-${id}`}
              className={({ isActive }) =>
                isActive ? "sidebar_navlink activesidebar" : "sidebar_navlink"
              }
            >
              <div
                className="side_icon"
                data-tip={!isOpen ? route.tooltip : ""}
              >
                {route.icon}
              </div>
              <AnimatePresence initial={false}>
                {isOpen && (
                  <motion.div
                    key="side_icon"
                    initial="hidden"
                    animate="show"
                    exit="hidden"
                    variants={showAnimation}
                    className="side_text"
                  >
                    {route.name}
                  </motion.div>
                )}
              </AnimatePresence>
            </NavLink>
          ))}
          <motion.div
            key="toggle_side"
            initial={{ width: isOpen ? "250px" : "54px" }}
            animate={{
              width: isOpen ? "250px" : "54px",
              transition: {
                duration: 0.5,
                type: "spring",
                damping: 12,
              },
            }}
            onClick={() => dispatch(toggleSideBar())}
            className="active_toggle"
          ></motion.div>

          <div className="bottom_container">
            <div className="toggle_pic_container">
              <AnimatePresence initial={false}>
                {!isOpen && (
                  <>
                    <motion.i
                      key="toggle_container_closed"
                      initial="hidden"
                      animate="show"
                      exit="hidden"
                      transition={{
                        type: "spring",
                        stiffness: 260,
                        damping: 20,
                      }}
                      variants={logAnimation}
                      onClick={() => dispatch(setDisplayDarkMode())}
                      className={`${
                        displayDarkMode ? "fas fa-moon moon" : "fas fa-sun sun"
                      }`}
                      data-tip="DarkMode"
                    ></motion.i>
                  </>
                )}
                {isOpen && (
                  <motion.div
                    key="toggle_container_open"
                    initial="hidden"
                    animate="show"
                    exit="hidden"
                    transition={{
                      type: "spring",
                      stiffness: 260,
                      damping: 20,
                    }}
                    variants={profilAnimation}
                    className="toggle_dark"
                  >
                    <Toggle />
                    <div className="side_text_darkmode">Dark Mode</div>
                  </motion.div>
                )}
              </AnimatePresence>
              <AnimatePresence initial={false}>
                {!isOpen && (
                  <NavLink to={`/profil/${user?.id}`}>
                    <motion.img
                      id="profil"
                      key="pic_container_close"
                      initial="hidden"
                      animate="show"
                      exit="hidden"
                      transition={{
                        type: "spring",
                        stiffness: 260,
                        damping: 20,
                      }}
                      variants={logAnimation}
                      src={
                        user?.profil_picture
                          ? user?.profil_picture
                          : require("./../../assets/images/user-avatar.png")
                      }
                      alt="Profil"
                      className="profile_img_close"
                      data-tip="Profil"
                    ></motion.img>
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
                  </NavLink>
                )}
              </AnimatePresence>
            </div>

            <div className="profile">
              <AnimatePresence initial={false}>
                {!isOpen && (
                  <motion.div
                    key="profile_closed"
                    initial="hidden"
                    animate="show"
                    exit="hidden"
                    transition={{
                      type: "spring",
                      stiffness: 260,
                      damping: 20,
                    }}
                    variants={logAnimation}
                  >
                    <NavLink to="/" className="logo_unlog">
                      <MdOutlineLogout
                        onClick={handleLogout}
                        data-tip="Se déconnecter"
                      />
                    </NavLink>
                  </motion.div>
                )}
              </AnimatePresence>
              <AnimatePresence initial={false}>
                {isOpen && (
                  <motion.div
                    key="profile"
                    initial="hidden"
                    animate="show"
                    exit="hidden"
                    transition={{
                      type: "spring",
                      stiffness: 260,
                      damping: 20,
                    }}
                    variants={profilAnimation}
                    className="profile_details"
                  >
                    <NavLink to={`/profil/${user?.id}`}>
                      {user?.profil_picture ? (
                        <>
                          <img
                            className="profile_img"
                            src={user?.profil_picture}
                            alt="Profil"
                          />
                        </>
                      ) : (
                        <>
                          <img
                            className="profile_img"
                            src={require("./../../assets/images/user-avatar.png")}
                            alt=""
                          />
                        </>
                      )}
                    </NavLink>
                    <NavLink to={`/profil/${user?.id}`}>
                      <div className="name_job">
                        <div className="name">{`${user?.firstname} ${user?.lastname}`}</div>
                        <div className="job">{user?.job}</div>
                      </div>
                    </NavLink>
                  </motion.div>
                )}
              </AnimatePresence>
              {isOpen && (
                <NavLink
                  to="/"
                  className="logo_unlog_big"
                  onClick={handleLogout}
                >
                  <MdOutlineLogout />
                </NavLink>
              )}
            </div>
          </div>
        </section>
      </motion.div>
      <main className="side_main">{children}</main>
    </div>
  );
}

export default Sidebar;
