import "./projects.scss";
import Navbar from "../../components/Navbar/navbar";
import Cards from "../../components/Cards/cards";
import FooterColored from "../../components/Footer/footerColored";
import Sidebar from "../../components/SideBar/sidebar";

function Projects() {
  return (
    <Sidebar>
      <div className="project">
        <div className="project_hero">
          <Navbar />
          <Cards />
          <FooterColored />
        </div>
      </div>
    </Sidebar>
  );
}

export default Projects;
