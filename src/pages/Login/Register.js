import Input from "../../components/Input/Input";
import "./register.scss";

function Register() {
  return (
    // <div className="register-container">
    //   {/* <h2>Inscription</h2> */}
    //   <form className="register-form">
    //     <div className="register-form-inputs">
    //       <div className="form">
    //         <
    //       </div>
    //     </div>
    //     <div className="form-form-buttons">
    //       <button type="submit" className="main-button-bg-colored">
    //         S'inscrire
    //       </button>
    //     </div>
    //   </form>
    // </div>
    <div className="register-container">
      <div className="content ">
        <div className="form">
          <div className="inputs-container">
            <Input name="text" label="Prénom" />
            <Input name="text" label="Nom" />
          </div>
          <Input name="email" label="Email" />
          <Input name="password" label="Mot de passe" />
          <Input name="password" label="Mot de passe" />
          <button type="submit" className="main-button-bg-colored">
            Se connecter
          </button>
        </div>
      </div>
    </div>
  );
}
export default Register;
