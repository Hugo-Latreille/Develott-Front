import "./connexion.scss";
import "./../App/app.scss";
//? RTK
import { useSelector, useDispatch } from "react-redux";

//? React-Toastify
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import { useNavigate, useParams } from "react-router-dom";
import ReactDOM from "react-dom";
import { useEffect } from "react";

import {
  clearInputs,
  toggleLoggingModalOpen,
  setNewPasswordValidationWidth,
} from "./authSlice";
import Input from "../../components/Input/Input";
import { useNewPasswordMutation } from "./authAPISlice";

function NewPassword() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { password, passwordConfirm } = useSelector((state) => state.auth);
  const [newPassword] = useNewPasswordMutation();
  const { userId } = useParams();

  const { passwordValidity, newPasswordValidationWidth } = useSelector(
    (state) => state.auth
  );

  useEffect(() => {
    countPasswordValidationWidth();
  }, [passwordValidity]);

  const handlePassword = (e) => {
    e.preventDefault();
    if (handleValidation()) {
      console.log(password, userId);
      newPassword({ password, userId });
      dispatch(clearInputs());
      toast.success("Votre mot de passe a bien été modifié", toastOptions);
      navigate("/connexion");
    }
  };

  const handleValidation = () => {
    //* TODO verification password regex
    if (password !== passwordConfirm) {
      toast.error("Les mots de passe ne correspondent pas", toastOptions);
      return false;
    }
    const validatePassword = new RegExp(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*"'()+,-./:;<=>?[\]^_`{|}~])(?=.{8,})/
    );
    if (!validatePassword.test(password)) {
      toast.error(
        "Votre password doit avoir au moins 8 caractères, dont une majuscule, un chiffre et un caractère spécial",
        toastOptions
      );
      return false;
    }

    return true;
  };

  function countPasswordValidationWidth() {
    dispatch(setNewPasswordValidationWidth(0));

    if (
      passwordValidity.uppercase ||
      passwordValidity.number ||
      passwordValidity.specialChar ||
      passwordValidity.minChar
    ) {
      dispatch(setNewPasswordValidationWidth(25));
    }
    if (
      (passwordValidity.uppercase && passwordValidity.number) ||
      (passwordValidity.uppercase && passwordValidity.specialChar) ||
      (passwordValidity.uppercase && passwordValidity.minChar) ||
      (passwordValidity.number && passwordValidity.specialChar) ||
      (passwordValidity.number && passwordValidity.minChar) ||
      (passwordValidity.specialChar && passwordValidity.minChar)
    ) {
      dispatch(setNewPasswordValidationWidth(50));
    }
    if (
      (passwordValidity.uppercase &&
        passwordValidity.number &&
        passwordValidity.specialChar) ||
      (passwordValidity.uppercase &&
        passwordValidity.specialChar &&
        passwordValidity.minChar) ||
      (passwordValidity.uppercase &&
        passwordValidity.number &&
        passwordValidity.minChar) ||
      (passwordValidity.specialChar &&
        passwordValidity.number &&
        passwordValidity.minChar)
    ) {
      dispatch(setNewPasswordValidationWidth(75));
    }
    if (
      passwordValidity.uppercase &&
      passwordValidity.number &&
      passwordValidity.specialChar &&
      passwordValidity.minChar
    ) {
      dispatch(setNewPasswordValidationWidth(100));
    }
  }

  const toastOptions = {
    position: "top-right",
    autoClose: 6000,
    pauseOnHover: true,
    draggable: true,
    theme: "light",
  };

  return ReactDOM.createPortal(
    <div className="connexion">
      <div className="connexion-container">
        <div className="connexion-container-navigation">
          <img
            className="connexion-logo"
            src={require(`./../../assets/images/v3-large-white.png`)}
            alt="logo Develott"
          />
          <div className="navigation-links">
            <span className={"link-is-active"}>Nouveau Mot de passe</span>
          </div>
        </div>
        <div className="connexion-container-form">
          <button
            className="close-modal"
            onClick={() => {
              dispatch(toggleLoggingModalOpen());
              navigate(-1);
            }}
          >
            <i className="fas fa-times-circle"></i>
          </button>
          <div className="login-container">
            <form className="login-form" onSubmit={handlePassword}>
              <div className="login-form-inputs">
                <div className="form">
                  <Input
                    name="password"
                    value={password}
                    label="Mot de passe"
                    type="password"
                    required={true}
                  />
                  <Input
                    name="passwordConfirm"
                    value={passwordConfirm}
                    label="Confirmez votre mot de passe"
                    type="password"
                    required={true}
                  />
                </div>
              </div>
              <div className="password-safety container">
                Niveau de sécurité du mot de passe :
                <div className="password-safety-container">
                  {newPasswordValidationWidth === 25 && (
                    <div className="password-safety-quart"></div>
                  )}
                  {newPasswordValidationWidth === 50 && (
                    <div className="password-safety-middle"></div>
                  )}
                  {newPasswordValidationWidth === 75 && (
                    <div className="password-safety-3quart"></div>
                  )}
                  {newPasswordValidationWidth === 100 && (
                    <div className="password-safety-full"></div>
                  )}
                </div>
                <span>
                  Au moins{" "}
                  <span className={passwordValidity.minChar ? "success" : ""}>
                    8 caractères
                  </span>
                  , dont une{" "}
                  <span className={passwordValidity.uppercase ? "success" : ""}>
                    {" "}
                    majuscule
                  </span>
                  , un{" "}
                  <span className={passwordValidity.number ? "success" : ""}>
                    {" "}
                    chiffre
                  </span>
                  , et un
                  <span
                    className={passwordValidity.specialChar ? "success" : ""}
                  >
                    {" "}
                    caractère spécial
                  </span>
                  .
                </span>
              </div>
              <div className="login-form-buttons">
                <button type="submit" className="main-button-colored">
                  Valider
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
      <ToastContainer />
    </div>,
    document.getElementById("modal-root")
  );
}

export default NewPassword;
