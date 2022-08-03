import { AnimatePresence, motion } from "framer-motion";
import ReactTooltip from "react-tooltip";
import { FaProjectDiagram, FaPlusSquare } from "react-icons/fa";
import { MdMessage, MdOutlineLogout } from "react-icons/md";
import { NavLink } from "react-router-dom";
import { AiOutlineDashboard } from "react-icons/ai";
import Toggle from "../ToggleDarkmode/toggle";
import LogoW from "../../assets/images/v3-logo-white.png";
import "./sidebar.scss";
// import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useUserLogoutMutation } from "../../pages/Login/authAPISlice";
import { logOut } from "../../pages/Login/authSlice";
import { toggleSideBar } from "../../pages/App/appSlice";
import { setDisplayDarkMode } from "../../pages/App/appSlice";
import { useGetOneUserQuery } from "../../pages/Profiles/userAPISlice";

const routes = [
  {
    path: "/dashboard",
    name: "Dashboard",
    icon: <AiOutlineDashboard />,
    tooltip: "Dashboard",
  },
  {
    path: "/message",
    name: "Message",
    icon: <MdMessage />,
    tooltip: "Messagerie",
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
];

function Sidebar({ children, isVisible }) {
  const isOpen = useSelector((state) => state.app.sideBarIsOpen);
  const displayDarkMode = useSelector((state) => state.app.displayDarkMode);
  const dispatch = useDispatch();
  const [userLogout] = useUserLogoutMutation();
  const { email } = useSelector((state) => state.auth);
  const { data: user } = useGetOneUserQuery(email);

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
      <motion.div
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
          {routes.map((route) => (
            <NavLink
              to={route.path}
              key={route.name}
              className="sidebar_navlink"
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
          <div
            onClick={() => dispatch(toggleSideBar())}
            className="active_toggle"
          ></div>
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
                    <ReactTooltip
                      className="tooltips_side"
                      place="right"
                      type="light"
                      effect="solid"
                      arrowColor="white"
                    />
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
