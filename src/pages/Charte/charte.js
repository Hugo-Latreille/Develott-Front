import "./charte.scss";
import CharteComp from "../../components/Charte/charte";
import Footer from "../../components/Footer/footerColored";
import Sidebar from "../../components/SideBar/sidebar";

function Charte() {
  return (
    <Sidebar>
      <div className="charte">
        <CharteComp />
        <Footer />
      </div>
    </Sidebar>
  );
}

export default Charte;
