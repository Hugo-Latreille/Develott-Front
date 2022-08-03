import "./projects.scss";
import Navbar from "../../components/Navbar/navbar";
import Cards from "../../components/Cards/cards";
import FooterColored from "../../components/Footer/footerColored";
import Sidebar from "../../components/SideBar/sidebar";
import SearchBar from "../../components/SearchBar/searchBar";
import { useDispatch } from "react-redux";
import { toggleShowFavorites } from "../App/appSlice";
import Skeleton from "../../components/Skeletron/skeleton";

function Projects() {
	const dispatch = useDispatch();

	return (
		<Sidebar>
			<div className="projects">
				<div className="projects_hero">
					<div>
						<SearchBar />
						<button onClick={() => dispatch(toggleShowFavorites())}>
							Favorites
						</button>
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
