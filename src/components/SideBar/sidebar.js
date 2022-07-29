import { AnimatePresence, motion } from "framer-motion";
import ReactTooltip from "react-tooltip";
import { FaHome, FaUser, FaProjectDiagram } from "react-icons/fa";
import { MdMessage, MdConstruction, MdOutlineLogout } from "react-icons/md";
import { NavLink } from "react-router-dom";
import { AiOutlineDashboard } from "react-icons/ai";
import Logo from "../../assets/images/v3-logo-colorize.png";
import Toggle from "../ToggleDarkmode/toggle";
import LogoW from "../../assets/images/v3-logo-white.png";
import "./sidebar.scss";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useUserLogoutMutation } from "../../pages/Login/authAPISlice";
import { logOut } from "../../pages/Login/authSlice";
import { closeSideBar, toggleSideBar } from "../../pages/App/appSlice";

const routes = [
  {
    path: "/",
    name: "Dashboard",
    icon: <AiOutlineDashboard />,
  },
  {
    path: "/",
    name: "Message",
    icon: <MdMessage />,
  },
  {
    path: "/projets",
    name: "Projets",
    icon: <FaProjectDiagram />,
  },
  {
    path: "/projet/create",
    name: "Créer Projet",
    icon: <MdConstruction />,
  },
];

function Sidebar({ children, isVisible }) {
  const [darkMode, setDarkMode] = useState(false);
  const isOpen = useSelector((state) => state.app.sideBarIsOpen);
  const dispatch = useDispatch();
  const [userLogout] = useUserLogoutMutation();

  const handleLogout = async () => {
    await userLogout();
    dispatch(logOut());
  };

  const showAnimation = {
    hidden: {
      width: 0,
      opacity: 0,
      transition: {
        duration: 0.4,
      },
    },
    show: {
      width: "auto",
      opacity: 1,
      transition: {
        duration: 0.3,
      },
    },
  };
  const logoAnimation = {
    hidden: {
      width: "1em",
      opacity: 0,
      transition: {
        duration: 0.3,
      },
    },
    show: {
      width: "2rem",
      opacity: 1,
      transition: {
        duration: 0.2,
      },
    },
  };
  const logAnimation = {
    hidden: {
      width: 0,
      opacity: 0,
      transition: {
        duration: 0.1,
      },
    },
    show: {
      width: "auto",
      rotate: 360,
      scale: 1,
      opacity: 1,
      transition: {
        duration: 0.4,
      },
    },
  };
  const profilAnimation = {
    hidden: {
      width: 0,
      opacity: 0,
      transition: {
        duration: 0.1,
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
      <motion.div
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
              <NavLink to="/">
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
                {/* </AnimatePresence> */}
              </NavLink>
            )}
            <div className="bars">
              {isOpen && (
                // <AnimatePresence initial={false}>
                <motion.img
                  key="bars"
                  whileHover={{ scale: 1.5, rotate: 180 }}
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
                // </AnimatePresence>
              )}

              {/* <AnimatePresence initial={false}> */}
              {!isOpen && (
                <motion.img
                  key="bars_closed"
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
            </div>
          </AnimatePresence>

          {isOpen && <div className="anim"></div>}
        </div>
        <div className="space" onClick={() => dispatch(toggleSideBar())}></div>
        <section className="sidebar_icon">
          {routes.map((route) => (
            <NavLink
              to={route.path}
              key={route.name}
              className="sidebar_navlink"
            >
              <div className="side_icon">{route.icon}</div>
              <AnimatePresence initial={false}>
                {isOpen && (
                  <motion.div
                    key={route.name}
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
          <div
            onClick={() => dispatch(toggleSideBar())}
            className="active_toggle"
          ></div>
          <div className="bottom_container">
            <div className="toggle_pic_container">
              <AnimatePresence initial={false}>
                {!isOpen && (
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
                    onClick={() => setDarkMode(!darkMode)}
                    className={`${
                      darkMode ? "fas fa-moon moon" : "fas fa-sun sun"
                    }`}
                  ></motion.i>
                )}
              </AnimatePresence>
              <AnimatePresence initial={false}>
                {!isOpen && (
                  <NavLink to="/">
                    <motion.img
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
                      src="https://www.pngall.com/wp-content/uploads/12/Avatar-Profile.png"
                      alt="Profil"
                      className="profile_img_close"
                    ></motion.img>
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
                      <MdOutlineLogout onClick={handleLogout} />
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
                    <img
                      className="profile_img"
                      src="https://www.pngall.com/wp-content/uploads/12/Avatar-Profile.png"
                      alt="Profil"
                    />
                    <div className="name_job">
                      <div className="name">Bruce Wayne</div>
                      <div className="job">Lead Dev Front</div>
                    </div>
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
