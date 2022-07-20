import "./profiles.scss";
import Navbar from "../../components/Navbar/navbar";
import Profil from "../../components/Profil/profil";

function Profiles() {
  return (
    <div className="profiles">
      <div className="profiles_hero">
        <Navbar />
        <Profil />
      </div>
    </div>
  );
}

export default Profiles;
