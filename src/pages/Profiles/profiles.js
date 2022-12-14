import "./profiles.scss";
import Navbar from "../../components/Navbar/navbar";
import Profil from "../../components/Profil/profil";
import Footer from "../../components/Footer/footerColored";
// import NavbarColor from "../../components/Navbar/navbarColor";
import Sidebar from "../../components/SideBar/sidebar";

function Profiles() {
  return (
    <Sidebar>
      <div className="profiles">
        {/* <NavbarColor /> */}
        <Profil />
        <Footer />
      </div>
    </Sidebar>
  );
}

export default Profiles;
