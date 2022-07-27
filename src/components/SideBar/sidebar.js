import { AnimatePresence, motion } from "framer-motion";
import { FaHome, FaUser, FaProjectDiagram } from "react-icons/fa";
import { MdMessage, MdConstruction, MdOutlineLogout } from "react-icons/md";
import { NavLink } from "react-router-dom";
import { AiOutlineDashboard } from "react-icons/ai";
import Logo from "../../assets/images/v3-logo-colorize.png";
import Toggle from "../ToggleDarkmode/toggle";
import LogoW from "../../assets/images/v3-logo-white.png";
import "./sidebar.scss";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { useUserLogoutMutation } from "../../pages/Login/authAPISlice";
import { logOut } from "../../pages/Login/authSlice";

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
		path: "/",
		name: "Créer Projet",
		icon: <MdConstruction />,
	},
];

function Sidebar({ children }) {
	const [darkMode, setDarkMode] = useState(false);
	const [isOpen, setIsOpen] = useState(false);
	const toggle = () => setIsOpen(!isOpen);
	const toggleOut = () => setIsOpen(false);
	const [userLogout] = useUserLogoutMutation();
	const dispatch = useDispatch();

	const handleLogout = async () => {
		await userLogout();
		dispatch(logOut());
	};

	const showAnimation = {
		hidden: {
			width: 0,
			opacity: 0,
			transition: {
				duration: 0.3,
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
				duration: 0.5,
			},
		},
		show: {
			width: "2rem",
			opacity: 1,
			transition: {
				duration: 0.5,
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
				duration: 0.5,
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
					{isOpen && (
						<NavLink to="/">
							<motion.h1
								initial="hidden"
								animate="show"
								exit="hidden"
								variants={showAnimation}
								className="logo_nav"
							>
								Develott
							</motion.h1>
						</NavLink>
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
									src={LogoW}
									alt="logo"
									onClick={toggle}
								/>
							</AnimatePresence>
						)}

						{!isOpen && (
							<AnimatePresence>
								<motion.img
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
									onClick={toggle}
								/>
							</AnimatePresence>
						)}
					</div>
					{isOpen && <div className="anim"></div>}
				</div>
				<div className="space" onClick={toggle}></div>
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
					<div onClick={toggle} className="active_toggle"></div>
					<div className="profile_container">
						{!isOpen && (
							<AnimatePresence>
								<motion.i
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
							</AnimatePresence>
						)}
						{isOpen && (
							<AnimatePresence>
								<motion.div
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
									<Toggle onChange={() => setDarkMode(!darkMode)} />
									<div className="side_text">Dark Mode</div>
								</motion.div>
							</AnimatePresence>
						)}
						<div className="profile">
							<AnimatePresence>
								{!isOpen && (
									<motion.div
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
							<AnimatePresence>
								{isOpen && (
									<motion.div
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
								{isOpen && (
									<NavLink
										to="/"
										className="logo_unlog_big"
										onClick={handleLogout}
									>
										<MdOutlineLogout />
									</NavLink>
								)}
							</AnimatePresence>
						</div>
					</div>
				</section>
			</motion.div>
			<main className="side_main" onClick={toggleOut}>
				{children}
			</main>
		</div>
	);
}

export default Sidebar;
