import { AnimatePresence, motion } from "framer-motion";
import { FaHome, FaUser, FaBars } from "react-icons/fa";
import { MdMessage } from "react-icons/md";
import { BiCog, BiSearch } from "react-icons/bi";
import { NavLink } from "react-router-dom";
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
    name: "Parametres",
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
  const inputAnimation = {
    hidden: {
      width: 0,
      padding: 0,
      opacity: 0,
      transition: {
        duration: 0.2,
      },
    },
    show: {
      width: "85px",
      padding: "5px 15px",
      opacity: 1,
      transition: {
        duration: 0.2,
      },
    },
  };
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
  return (
    <div className="sidebar_container">
      <motion.div
        animate={{
          width: isOpen ? "200px" : "40px",
          transition: {
            duration: 0.5,
            type: "spring",
            damping: 11,
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
            <FaBars onClick={toggle} />
          </div>
        </div>
        <div className="search_dashbar">
          <div className="search_dashbar_icon">
            <BiSearch />
          </div>
          <AnimatePresence>
            {isOpen && (
              <motion.input
                initial="hidden"
                animate="show"
                exit="hidden"
                variants={inputAnimation}
                type="text"
                placeholder="Recherche..."
              />
            )}
          </AnimatePresence>
        </div>
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
