import Input from "../../components/Input/Input";
import "./login.scss";
import { useSelector } from "react-redux";

function Login({ onSubmit }) {
  const github = () => {
    window.open("http://localhost:3002/github", "_self");
  };

  const { username, password } = useSelector((state) => state.login);

  return (
    <div className="login-container">
      {/* <h2>Se connecter</h2> */}
      <form className="login-form" onSubmit={onSubmit}>
        <div className="login-form-inputs">
          <div className="form">
            <Input name="email" value={username} label="Email" />
            <Input name="password" value={password} label="Mot de passe" />
          </div>
        </div>
        <div className="login-form-buttons">
          <button type="submit" className="main-button-colored">
            Se connecter
          </button>
          <a href="#" className="secondary-button-colored" onClick={github}>
            <i class="fab fa-github"></i> Github
          </a>
          <a
            href="#"
            className="third-button-colored width-100"
            onClick={github}
          >
            Mot de passe oublié ?
          </a>
        </div>
      </form>
    </div>
  );
}
export default Login;

{
  /* <div className="header">Login</div>
      <div className="content">
        <div className="form">
          <Input name="email" value={username} label="Email" />
          <Input name="password" value={password} label="Mot de passe" />
        </div>
      </div>
      <div className="footer">
        <button type="submit" className="btn">
          Login
        </button>
      </div>
      <button type="button" className="btn" onClick={github}>
        Github
      </button> */
}
