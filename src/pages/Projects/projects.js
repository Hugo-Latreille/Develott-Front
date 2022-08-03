import "./projects.scss";
import Navbar from "../../components/Navbar/navbar";
import Cards from "../../components/Cards/cards";
import FooterColored from "../../components/Footer/footerColored";
import Sidebar from "../../components/SideBar/sidebar";
import SearchBar from "../../components/SearchBar/searchBar";
import Skeleton from "../../components/Skeletron/skeleton";

function Projects() {
  return (
    <Sidebar>
      <div className="projects">
        <div className="projects_hero">
          <div>
            <SearchBar />
          </div>
          <Cards />
          {/* <Skeleton /> */}
          <FooterColored />
        </div>
      </div>
    </Sidebar>
  );
}

export default Projects;
