import "./connexion.scss";
import Login from "./Login";
import Register from "./Register";
//? RTK
import { useSelector, useDispatch } from "react-redux";
import { clearInputs, toggleLoggingActive } from "./loginSlice";
//? React-Toastify
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useGetAllUsersQuery, useCreateUserMutation } from "./loginApi";

function Connexion() {
  const { data: allUsers, error, isLoading } = useGetAllUsersQuery();
  const [createUser, { isLoading: test }] = useCreateUserMutation();

  console.log(allUsers);

  const dispatch = useDispatch();
  const { username, password } = useSelector((state) => state.login);
  const isLoggingActive = useSelector((state) => state.login.isLoggingActive);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (handleValidation()) {
      toast.success("C'est okay", toastOptions);
      createUser(username, password);
      dispatch(clearInputs());
    }
  };

  const handleValidation = () => {
    if (username === "") {
      toast.error("Email is required", toastOptions);
      return false;
    }
    if (password === "") {
      toast.error("Password is required", toastOptions);
      return false;
    }
    return true;
  };

  const toastOptions = {
    position: "top-right",
    autoClose: 800,
    pauseOnHover: true,
    draggable: true,
    theme: "light",
  };

  // useEffect(() => {
  // 	const getUser = () => {
  // 		fetch("http://localhost:3002/login/success", {
  // 			method: "GET",
  // 			credentials: "include",
  // 			headers: {
  // 				Accept: "application/json",
  // 				"Content-Type": "application/json",
  // 				"Access-Control-Allow-Credentials": true,
  // 			},
  // 		})
  // 			.then((response) => {
  // 				if (response.status === 200) return response.json();
  // 				throw new Error("authentication error");
  // 			})
  // 			.then((resObject) => {
  // 				console.log(resObject.user);
  // 			})
  // 			.catch((err) => {
  // 				console.log(err);
  // 			});
  // 	};
  // 	getUser();
  // }, [isLoggingActive]);

  return (
    <div className="connexion">
      <div className="connexion-container">
        <div className="connexion-container-navigation">
          <img
            className="connexion-logo"
            src={require(`./../../assets/images/v3-large-white.png`)}
            alt="logo Develott"
          />
          <div className="navigation-links">
            <span className="link-is-active">Connexion</span>
            <span>Inscription</span>
          </div>
        </div>
        <div className="connexion-container-form">
          {isLoggingActive && <Login onSubmit={handleSubmit} />}
          {!isLoggingActive && <Register />}
        </div>
        {/* <div className="login">
          <div className="container">
            {isLoggingActive && <Login onSubmit={handleSubmit} />}
            {!isLoggingActive && <Register />}
          </div>
          <RightSide
            handleClick={() => dispatch(toggleLoggingActive())}
            isLoggingActive={isLoggingActive}
          />
        </div> */}
      </div>
      <ToastContainer />
    </div>
  );
}

const RightSide = ({ handleClick, isLoggingActive }) => {
  return (
    <div
      className={isLoggingActive ? "right-side right" : "right-side left"}
      onClick={handleClick}
    >
      <div className="inner-container">
        <div className="text">{isLoggingActive ? "Register" : "Login"}</div>
      </div>
    </div>
  );
};

export default Connexion;
