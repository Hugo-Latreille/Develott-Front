import "./navbarColor.scss";
import { Link, useLocation, Outlet } from "react-router-dom";

function Navbar() {
  const location = useLocation();

  return (
    <div className="navbar">
      <Link to="/">
        <img
          className="navbar-logo"
          src={require(`./../../assets/images/v3-large-colorize.png`)}
          alt="logo Develott"
        />
      </Link>

      <div className="navbar-link">
        {/* TO DO : AJOUTER LIEN DARK/LIGHT MODE */}
        <Link
          to="/connexion"
          className="main-button-colored"
          state={{ background: location }}
        >
          Se connecter
        </Link>
        <Outlet />
      </div>
    </div>
  );
}

export default Navbar;
