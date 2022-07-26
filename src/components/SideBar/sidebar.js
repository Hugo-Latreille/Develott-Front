import { AnimatePresence, motion } from "framer-motion";
import { FaHome, FaUser } from "react-icons/fa";
import { MdMessage } from "react-icons/md";
import { BiCog } from "react-icons/bi";
import { NavLink } from "react-router-dom";
import Logo from "../../assets/images/v3-logo-colorize.png";
import LogoW from "../../assets/images/v3-logo-white.png";
import "./sidebar.scss";
import { useState } from "react";

const routes = [
  {
    path: "/",
    name: "Accueil",
    icon: <FaHome />,
  },
  {
    path: "/",
    name: "Message",
    icon: <MdMessage />,
  },
  {
    path: "/",
    name: "parametres",
    icon: <BiCog />,
  },
  {
    path: "/",
    name: "Profil",
    icon: <FaUser />,
  },
];

function Sidebar({ children }) {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);
  const showAnimation = {
    hidden: {
      width: 0,
      opacity: 0,
      transition: {
        duration: 0.5,
      },
    },
    show: {
      width: "auto",
      opacity: 1,
      transition: {
        duration: 0.2,
      },
    },
  };
  const logoAnimation = {
    hidden: {
      width: "1rem",
      opacity: 0,
      transition: {
        duration: 0.5,
      },
    },
    show: {
      width: "1.5rem",
      opacity: 1,
      transition: {
        duration: 0.5,
      },
    },
  };
  return (
    <div className="sidebar_container">
      <motion.div
        animate={{
          width: isOpen ? "155px" : "40px",
          transition: {
            duration: 0.5,
            type: "spring",
            damping: 12,
          },
        }}
        className="sidebar"
      >
        <div className="top_section">
          {isOpen && (
            <motion.h1
              initial="hidden"
              animate="show"
              exit="hidden"
              variants={showAnimation}
              className="logo_nav"
            >
              Develott
            </motion.h1>
          )}
          <div className="bars">
            {isOpen && (
              <AnimatePresence>
                <motion.img
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
                  src={Logo}
                  alt="logo"
                  onClick={toggle}
                />
              </AnimatePresence>
            )}

            {!isOpen && (
              <AnimatePresence>
                <motion.img
                  whileHover={{ scale: 1.3, rotate: 180 }}
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
                  onClick={toggle}
                />
              </AnimatePresence>
            )}
          </div>
          {isOpen && <div className="anim">anim</div>}
        </div>
        <div className="space"></div>
        <section className="sidebar_icon">
          {routes.map((route) => (
            <NavLink
              to={route.path}
              key={route.name}
              className="sidebar_navlink"
            >
              <div className="side_icon">{route.icon}</div>
              <AnimatePresence>
                {isOpen && (
                  <motion.div
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
        </section>
      </motion.div>
      <main className="side_main">{children}</main>
    </div>
  );
}

export default Sidebar;
