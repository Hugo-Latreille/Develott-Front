import { useDispatch, useSelector } from "react-redux";
import Input from "../../components/Input/Input";
import { MdOutlineVisibility, MdOutlineVisibilityOff } from "react-icons/md";

import "./register.scss";

import {
  toggleLoggingActive,
  toggleRegisterVisibility,
  setPasswordValidationWidth,
} from "./authSlice";
import { useEffect } from "react";

function Register({ onSubmit }) {
  const {
    firstname,
    lastname,
    email,
    password,
    passwordConfirm,
    registerPasswordVisibility,
    passwordFocus,
    passwordValidity,
    username_gith,
    passwordValidationWidth,
  } = useSelector((state) => state.auth);
  const dispatch = useDispatch();

  useEffect(() => {
    countPasswordValidationWidth();
  }, [passwordValidity]);

  function countPasswordValidationWidth() {
    dispatch(setPasswordValidationWidth(0));

    if (
      passwordValidity.uppercase ||
      passwordValidity.number ||
      passwordValidity.specialChar ||
      passwordValidity.minChar
    ) {
      dispatch(setPasswordValidationWidth(25));
    }
    if (
      (passwordValidity.uppercase && passwordValidity.number) ||
      (passwordValidity.uppercase && passwordValidity.specialChar) ||
      (passwordValidity.uppercase && passwordValidity.minChar) ||
      (passwordValidity.number && passwordValidity.specialChar) ||
      (passwordValidity.number && passwordValidity.minChar) ||
      (passwordValidity.specialChar && passwordValidity.minChar)
    ) {
      dispatch(setPasswordValidationWidth(50));
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
      dispatch(setPasswordValidationWidth(75));
    }
    if (
      passwordValidity.uppercase &&
      passwordValidity.number &&
      passwordValidity.specialChar &&
      passwordValidity.minChar
    ) {
      dispatch(setPasswordValidationWidth(100));
    }
  }

  return (
    <div className="register-container">
      <div className="content ">
        <form className="form" onSubmit={onSubmit}>
          <div className="inputs-container">
            <Input
              name="firstname"
              value={firstname}
              label="Prénom"
              type="text"
              required={true}
            />
            <Input
              name="lastname"
              value={lastname}
              label="Nom"
              type="text"
              required={true}
            />
          </div>
          <Input
            name="username_gith"
            value={username_gith}
            label="Nom d'utilisateur GitHub"
            type="text"
            required={false}
          />

          <Input
            name="email"
            value={email}
            label="Email"
            type="email"
            required={true}
          />
          <Input
            name="password"
            value={password}
            label="Mot de passe"
            type={registerPasswordVisibility ? "text" : "password"}
            required={true}
          />
          <Input
            name="passwordConfirm"
            value={passwordConfirm}
            label="Confirmez votre mot de passe"
            type={registerPasswordVisibility ? "text" : "password"}
            required={true}
          />
          <div
            className="eye_register_pass"
            onClick={() => dispatch(toggleRegisterVisibility())}
          >
            {registerPasswordVisibility ? (
              <MdOutlineVisibility />
            ) : (
              <MdOutlineVisibilityOff />
            )}
          </div>
          <div
            className="eye_register_confirm"
            onClick={() => dispatch(toggleRegisterVisibility())}
          >
            {registerPasswordVisibility ? (
              <MdOutlineVisibility />
            ) : (
              <MdOutlineVisibilityOff />
            )}
          </div>
          {/* {passwordFocus && ( */}
          <div>
            <div className="password-safety">
              Niveau de sécurité du mot de passe :
              <div className="password-safety-container">
                {passwordValidationWidth === 25 && (
                  <div className="password-safety-quart"></div>
                )}
                {passwordValidationWidth === 50 && (
                  <div className="password-safety-middle"></div>
                )}
                {passwordValidationWidth === 75 && (
                  <div className="password-safety-3quart"></div>
                )}
                {passwordValidationWidth === 100 && (
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
                <span className={passwordValidity.specialChar ? "success" : ""}>
                  {" "}
                  caractère spécial
                </span>
                .
              </span>
            </div>
            {/* <div className="password-safety-container"> */}
            {/* <span className={passwordValidity.minChar ? "success" : ""}>
                Au moins 8 caractères
              </span>
              <span className={passwordValidity.uppercase ? "success" : ""}>
                Au moins une majuscule
              </span>
              <span className={passwordValidity.number ? "success" : ""}>
                Un chiffre
              </span>
              <span className={passwordValidity.specialChar ? "success" : ""}>
                Un caractère spécial
              </span> */}
            {/* </div> */}
          </div>
          <button type="submit" className="main-button-colored">
            S'inscrire
          </button>
          <span
            className="third-button-colored width-100"
            onClick={() => dispatch(toggleLoggingActive())}
          >
            Déjà inscrit ?
          </span>
        </form>
      </div>
    </div>
  );
}
export default Register;
