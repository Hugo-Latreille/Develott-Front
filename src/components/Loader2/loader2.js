import "./loader2.scss";
import Logo from "../../assets/images/v3-logo-colorize.png";

function Loader2() {
  return (
    <div className="loader2_container">
      <div className="loader2_container_main">
        <div className="loader2">
          {" "}
          <img className="logo_loader" src={Logo} alt="logoload"></img>
        </div>
      </div>
    </div>
  );
}

export default Loader2;
