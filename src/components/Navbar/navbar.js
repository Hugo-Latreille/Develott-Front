import "./navbar.scss";
import { Link, Outlet, useLocation } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { toggleLoggingModalOpen } from "../../pages/Login/authSlice";

function Navbar() {
  const location = useLocation();
  const dispatch = useDispatch();
  const { token } = useSelector((state) => state.auth);

  return (
    <div className="navbar">
      <Link to="/">
        <img
          className="navbar-logo"
          src={require(`./../../assets/images/v3-large-white.png`)}
          alt="logo Develott"
        />
      </Link>
      <div className="navbar-link">
        {!token && (
          <Link
            to="/connexion"
            className="main-button-white"
            state={{ background: location }}
            onClick={() => dispatch(toggleLoggingModalOpen())}
          >
            Se connecter
          </Link>
        )}
      </div>
      <Outlet />
    </div>
  );
}

export default Navbar;
