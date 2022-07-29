import "./charteAbout.scss";
import CharteComp from "../../components/Charte/charte";
import About from "../../components/About/about";
import Footer from "../../components/Footer/footerColored";
import Sidebar from "../../components/SideBar/sidebar";

function Charte() {
  return (
    <Sidebar>
      <div className="charte">
        <CharteComp />
        <About />
        <Footer />
      </div>
    </Sidebar>
  );
}

export default Charte;
