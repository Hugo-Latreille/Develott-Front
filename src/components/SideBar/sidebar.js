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
    },
    show: {
      width: "140px",
      padding: "5px 15px",
      opacity: 1,
      transition: {
        duration: 0.5,
      },
    },
  };
  return (
    <div className="sidebar_container">
      <motion.div
        animate={{ width: isOpen ? "200px" : "40px" }}
        className="sidebar"
      >
        <div className="top_section">
          {isOpen && <h1 className="logo_nav">Develott</h1>}
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
              {isOpen && <div className="side_text">{route.name}</div>}
            </NavLink>
          ))}
        </section>
      </motion.div>
      <main>{children}</main>
    </div>
  );
}

export default Sidebar;
