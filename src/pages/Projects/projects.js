import "./projects.scss";
import Navbar from "../../components/Navbar/navbar";
import Cards from "../../components/Cards/cards";
import FooterColored from "../../components/Footer/footerColored";

function Projects() {
  return (
    <div className="project">
      <div className="project_hero">
        <Navbar />
        <Cards />
        <FooterColored />
      </div>
    </div>
  );
}

export default Projects;
