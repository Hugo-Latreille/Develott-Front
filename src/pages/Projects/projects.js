import "./projects.scss";
import Navbar from "../../components/Navbar/navbar";
import Cards from "../../components/Cards/cards";
import FooterColored from "../../components/Footer/footerColored";
import Sidebar from "../../components/SideBar/sidebar";
import { useGithubLoginQuery } from "../Login/authAPI";
import { useDispatch } from "react-redux";
import { setCredentials } from "../Login/authSlice";

function Projects() {
	const dispatch = useDispatch();
	const { data, isSuccess, error } = useGithubLoginQuery({
		// refetchOnMountOrArgChange: true,
	});

	if (isSuccess) {
		console.log(data);
		dispatch(
			setCredentials({
				accessToken: data.accessToken,
				email: data.foundUser.email,
			})
		);
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
