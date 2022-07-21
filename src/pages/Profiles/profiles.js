import "./profiles.scss";
import Navbar from "../../components/Navbar/navbar";
import Profil from "../../components/Profil/profil";
import Footer from "../../components/Footer/footerColored";
import NavbarColor from "../../components/Navbar/navbarColor";

function Profiles() {
  return (
    <div className="profiles">
      <NavbarColor />
      <Profil />
      <Footer />
    </div>
  );
}

export default Profiles;
