import "./projects.scss";
import Navbar from "../../components/Navbar/navbar";
import Cards from "../../components/Cards/cards";
import FooterColored from "../../components/Footer/footerColored";
import Sidebar from "../../components/SideBar/sidebar";
import { useGithubLoginQuery } from "../Login/authAPI";

function Projects() {
	const { data, isSuccess, error } = useGithubLoginQuery({
		refetchOnMountOrArgChange: true,
	});

	if (isSuccess) {
		console.log(data);
	}
	if (error) {
		console.log(error);
	}

	return (
		<Sidebar>
			<div className="projects">
				<div className="projects_hero">
					<Navbar />
					<Cards />
					<FooterColored />
				</div>
			</div>
		</Sidebar>
	);
}

export default Projects;
