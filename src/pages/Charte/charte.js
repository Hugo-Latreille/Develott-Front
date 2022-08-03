import "./charte.scss";
import CharteComp from "../../components/Charte/charte";
import ConditionComp from "../../components/Charte/conditions";
import Footer from "../../components/Footer/footerColored";
import Sidebar from "../../components/SideBar/sidebar";

function Charte() {
  return (
    <Sidebar>
      <div className="charte">
        <ConditionComp />
        <CharteComp />
        <Footer />
      </div>
    </Sidebar>
  );
}

export default Charte;
