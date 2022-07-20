import "./projects.scss";
import Navbar from "../../components/Navbar/navbar";
import Cards from "../../components/Cards/cards";

function Projects() {
  return (
    <div className="project">
      <div className="hero">
        <Navbar />
        <Cards />
      </div>
    </div>
  );
}

export default Projects;
