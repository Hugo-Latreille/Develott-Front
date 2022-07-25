import "./navbar.scss";
import { Link, Outlet, useLocation } from "react-router-dom";

import SearchBar from "../SearchBar/searchBar";
import { useDispatch } from "react-redux";
import { toggleLoggingModalOpen } from "../../pages/Login/authSlice";

function Navbar() {
	const location = useLocation();

	const dispatch = useDispatch();

	return (
		<div className="navbar">
			<Link to="/">
				<img
					className="navbar-logo"
					src={require(`./../../assets/images/v3-large-white.png`)}
					alt="logo Develott"
				/>
			</Link>

			<SearchBar className="navbar-searchbar" />
			<div className="navbar-link">
				{/* TO DO : AJOUTER LIEN DARK/LIGHT MODE */}
				<Link
					to="/connexion"
					className="main-button-white"
					state={{ background: location }}
					// onClick={toggleModal}
					onClick={() => dispatch(toggleLoggingModalOpen())}
				>
					Se connecter
				</Link>
			</div>
			<Outlet />
		</div>
	);
}

export default Navbar;
