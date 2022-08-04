import "./dashboard.scss";

import Sidebar from "../../components/SideBar/sidebar";
import Calendar from "../../components/Calendar/calendar";
import CalendarSmall from "../../components/Calendar/calendarSmall";
import Footer from "../../components/Footer/footerColored";
import { useSelector, useDispatch } from "react-redux";
import { setDisplayEdit, setDisplayMaincontent } from "./dashboardSlice";
import { useFindUserByEmailQuery } from "../Login/authAPISlice";
import {
	useGetAllProjectsQuery,
	useGetOneProjectQuery,
} from "../Projects/projectsAPISlice";
import { Link } from "react-router-dom";
import mockAvatar from "./../../assets/images/user-avatar.png";
import technologiesJson from "./../../assets/data/technologiesData.json";

function Dashboard() {
	const dispatch = useDispatch();

	const {
		displayEditGitLink,
		displayEditDiscordLink,
		displayEditSlackLink,
		displayEditTrelloLink,
		displayCalendar,
		displayMaincontent,
	} = useSelector((state) => state.dashboard);

	const { email } = useSelector((state) => state.auth);
	const { data: user } = useFindUserByEmailQuery(email);
	const { data: projectsTeams } = useGetAllProjectsQuery();
	const findMyProjectId = projectsTeams?.teams?.filter(
		(team) => team.customer_id === user?.id
	)[0]?.project_id;
	const { data: myProject } = useGetOneProjectQuery(findMyProjectId);
	console.log(myProject);

	const myTeam = myProject?.teams.filter(
		(team) => team.role === "admin" || team.role === "participants"
	);

	const findProjectTechnosFromDatabase = myProject?.project?.techno?.map(
		(techno) => technologiesJson.filter((tech) => tech.name === techno)[0]
	);

	const languagesData = findProjectTechnosFromDatabase?.filter((technology) =>
		technology.tags.includes("language")
	);
	const frameworksData = findProjectTechnosFromDatabase?.filter((technology) =>
		technology.tags.includes("framework")
	);
	const databasesData = findProjectTechnosFromDatabase?.filter((technology) =>
		technology.tags.includes("database")
	);
	const othersData = findProjectTechnosFromDatabase?.filter(
		(technology) =>
			!technology.tags.includes("framework") &&
			!technology.tags.includes("language") &&
			!technology.tags.includes("database")
	);

	return (
		<Sidebar>
			<div className="dashboard">
				<div className="dashboard-main">
					<div className="dashboard-main-header">
						<div className="dashboard-main-titles">
							<h2 className="dashboard-main-title">Hi {user?.firstname},</h2>
							<h1 className="dashboard-main-subtitle">
								Bienvenue sur le dashboard du projet{" "}
								{myProject?.project.project}
							</h1>
						</div>
						<div className="dashboard-main-cta">
							<Link to={`/projet/${myProject?.project.id}`}>
								Présentation du projet <i className="fas fa-chevron-right"></i>
							</Link>
						</div>
					</div>
					<div className="dashboard-main-navigation">
						<div
							className="dashboard-main-navigation-accueil"
							onClick={() => dispatch(setDisplayMaincontent("main"))}
						>
							<div
								className={
									displayMaincontent === "main"
										? "dashboard-main-navigation-accueil-content bg-colored"
										: "dashboard-main-navigation-accueil-content "
								}
							>
								<h3>
									<i className="far fa-rocket"></i>Accueil
								</h3>
								<img
									src={require("./../../assets/images/dashboard-accueil.png")}
									alt="icon accueil dashboard"
								/>
							</div>
						</div>
						<div className="dashboard-main-navigation-messagerie">
							<div className="dashboard-main-navigation-messagerie-content">
								<h3>
									<i className="far fa-comment-alt-dots"></i>Messagerie
								</h3>
								<img
									src={require("./../../assets/images/dashboard-message.png")}
									alt="icon messagerie dashboard"
								/>
							</div>
						</div>
						<div
							className="dashboard-main-navigation-calendrier"
							onClick={() => dispatch(setDisplayMaincontent("calendar"))}
						>
							<div
								className={
									displayMaincontent === "calendar"
										? "dashboard-main-navigation-calendrier-content bg-colored"
										: "dashboard-main-navigation-calendrier-content "
								}
							>
								<h3>
									<i className="far fa-calendar-alt"></i>
									Calendrier
								</h3>
								<img
									src={require("./../../assets/images/dashboard-calendar.png")}
									alt="icon calendrier dashboard"
								/>
							</div>
						</div>
					</div>
					<div className="dashboard-main-content">
						{/* // LA */}
						{displayMaincontent === "main" && (
							<>
								<div className="dashboard-main-content-team">
									<h3>Team-mates</h3>
									{myTeam?.map((member) => (
										<div
											key={member.customer_id}
											className="dashboard-main-content-team-users"
										>
											<img src={mockAvatar} alt="icon calendrier dashboard" />
											<div className="dashboard-main-content-team-users-details">
												<Link to={`/profil/${member.customer_id}`}>
													<p>{`${member.firstname} ${member.lastname}`}</p>
												</Link>
												<span>{member.job}</span>
											</div>
										</div>
									))}
								</div>

								<div className="dashboard-main-content-links">
									<h3>Outils collaboratifs</h3>
									{displayEditGitLink === false && (
										<div className="dashboard-main-content-team-users">
											<img
												src="https://cdn-icons-png.flaticon.com/512/25/25231.png"
												alt="icon calendrier dashboard"
											/>
											<div className="dashboard-main-content-team-users-details">
												<p>Github / Gitlab</p>
												<span>/Develott</span>
											</div>
											<span
												className="edit-btn-main"
												onClick={() =>
													dispatch(
														setDisplayEdit({ name: "displayEditGitLink" })
													)
												}
											>
												Modifier
											</span>
										</div>
									)}
									{displayEditGitLink === true && (
										<div className="dashboard-main-content-team-users">
											<img
												src="https://cdn-icons-png.flaticon.com/512/25/25231.png"
												alt="icon calendrier dashboard"
											/>
											<div className="dashboard-main-content-team-users-details">
												<input
													type="texte"
													placeholder="Lien Github / Gitlab ..."
													className="dashboard-edit-input"
												/>
											</div>
											<span
												className="edit-btn-main"
												onClick={() =>
													dispatch(
														setDisplayEdit({ name: "displayEditGitLink" })
													)
												}
											>
												Enregistrer
											</span>
										</div>
									)}
									{displayEditDiscordLink === false && (
										<div className="dashboard-main-content-team-users">
											<img
												src="https://qph.cf2.quoracdn.net/main-qimg-04e80ac829e5e6453dcc281a1fd27b72-lq"
												alt="icon calendrier dashboard"
											/>
											<div className="dashboard-main-content-team-users-details">
												<p>Discord</p>
												<span>/Develott</span>
											</div>
											<span
												className="edit-btn-main"
												onClick={() =>
													dispatch(
														setDisplayEdit({ name: "displayEditDiscordLink" })
													)
												}
											>
												Modifier
											</span>
										</div>
									)}
									{displayEditDiscordLink === true && (
										<div className="dashboard-main-content-team-users">
											<img
												src="https://qph.cf2.quoracdn.net/main-qimg-04e80ac829e5e6453dcc281a1fd27b72-lq"
												alt="icon calendrier dashboard"
											/>
											<div className="dashboard-main-content-team-users-details">
												<input
													type="texte"
													placeholder="Lien chanel Discord..."
													className="dashboard-edit-input"
												/>
											</div>
											<span
												className="edit-btn-main"
												onClick={() =>
													dispatch(
														setDisplayEdit({ name: "displayEditDiscordLink" })
													)
												}
											>
												Enregistrer
											</span>
										</div>
									)}
									{displayEditSlackLink === false && (
										<div className="dashboard-main-content-team-users">
											<img
												src="https://uploads-ssl.webflow.com/5cc2c9e1b620bc47899c7d44/60463e923252589bf23e61c2_6012dd23d33ba806098a2def_slack_hash_256.png"
												alt="icon calendrier dashboard"
											/>
											<div className="dashboard-main-content-team-users-details">
												<p>Slack</p>
												<span>/Develott</span>
											</div>
											<span
												className="edit-btn-main"
												onClick={() =>
													dispatch(
														setDisplayEdit({ name: "displayEditSlackLink" })
													)
												}
											>
												Modifier
											</span>
										</div>
									)}
									{displayEditSlackLink === true && (
										<div className="dashboard-main-content-team-users">
											<img
												src="https://uploads-ssl.webflow.com/5cc2c9e1b620bc47899c7d44/60463e923252589bf23e61c2_6012dd23d33ba806098a2def_slack_hash_256.png"
												alt="icon calendrier dashboard"
											/>
											<div className="dashboard-main-content-team-users-details">
												<input
													type="texte"
													placeholder="Lien Chanel Slack"
													className="dashboard-edit-input"
												/>
											</div>
											<span
												className="edit-btn-main"
												onClick={() =>
													dispatch(
														setDisplayEdit({ name: "displayEditSlackLink" })
													)
												}
											>
												Enregistrer
											</span>
										</div>
									)}
									{displayEditTrelloLink === false && (
										<div className="dashboard-main-content-team-users">
											<img
												src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAYFBMVEUAeb////8AbbrY5vLs9fri7vYAbrsAdr7x+fwAc70Acby40ujN4O/5/f5DkMmQudx1qtWQuNwAark+jcjC2exkoNBVmMyxzuYth8VLlMpZms5rpNLH3O0fgsOlxuKhw+F1tNtvAAACmElEQVR4nO3d7W7aMBhAYWyoQxJIaPgobP24/7scaGo3/Jp4HdjG5jz/kPKqHIXGrQhmMgEAAAAAAAAAAAAAAAAAAAAAAIisqhtj9F/OHvz/Q2Oaukodd1Sbrm8X0xAWbd+ZOnVf1c9VSPO+StqoV8ugfSfLlU4Y2AbvO2mTJepFlEClFokSI53BkzRnsV5FC1RqleJyU4W/yPyxTLAw1n3EQKX6+CfRhF0HbXMTO7DqogYq1cV+ndbPkQufY79Mm3hLxW9tE7nQxFrtPy1i/yLqqeNZLGdOl5eVbwxMYy/6jsJNZ/2v9/WP3tr9km7Xlwa6zT0WbvXFq12ld47A3cjAsL2/wu3olaA+iMDD6MWxsROTF24Gz/Ev1jN+8Txjbb1Qkxf6FuRqbxXufQPWnxSpC5fea/lw/lfe3HPOj+vR+RU1deHM+/P109nAk39gRmFYFMoBCsUAhYFRKAcoFAMUBkahHKBQDFAYGIVygEIxQGFgFMoBCsUAhYFRKAcoFAMUBkahHKBQDFAYGIVygEIxQGFgFMoBCsVA5oXl34vhv5/Guosqv0LfBwyG19wL1Y/RG+Gan9bhGRaO3sw42IFZFqrNwX17qTa7V3FwloVHcyfXkbkW/jsKb45COUAhhRTeGoVygEIKKbw1CuUAhRRSeGsUygEKKUxc+O3PkGZXqNa+tyHergtMX+h7G8K8517o+Xh9bX+UO8NC1ZnLb0OY9dVbLt1BoXrfGzf99nFt330UHtcM9/6HM8ehmRaGRCGFFFJYYGH5e32Vv19b+Xvulb9vYvl7Xz7A/qXl70H7APsIl78X9KT8/byjncV0e7JPyt9X/wG+G2FS/vdbnJT+HSUAAAAAAAAAAAAAAAAAAAAAAODB/AJrTzjRflQlUwAAAABJRU5ErkJggg=="
												alt="icon calendrier dashboard"
											/>
											<div className="dashboard-main-content-team-users-details">
												<p>Trello</p>
												<span>/Develott-Trello</span>
											</div>
											<span
												className="edit-btn-main"
												onClick={() =>
													dispatch(
														setDisplayEdit({ name: "displayEditTrelloLink" })
													)
												}
											>
												Modifier
											</span>
										</div>
									)}
									{displayEditTrelloLink === true && (
										<div className="dashboard-main-content-team-users">
											<img
												src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAYFBMVEUAeb////8AbbrY5vLs9fri7vYAbrsAdr7x+fwAc70Acby40ujN4O/5/f5DkMmQudx1qtWQuNwAark+jcjC2exkoNBVmMyxzuYth8VLlMpZms5rpNLH3O0fgsOlxuKhw+F1tNtvAAACmElEQVR4nO3d7W7aMBhAYWyoQxJIaPgobP24/7scaGo3/Jp4HdjG5jz/kPKqHIXGrQhmMgEAAAAAAAAAAAAAAAAAAAAAAIisqhtj9F/OHvz/Q2Oaukodd1Sbrm8X0xAWbd+ZOnVf1c9VSPO+StqoV8ugfSfLlU4Y2AbvO2mTJepFlEClFokSI53BkzRnsV5FC1RqleJyU4W/yPyxTLAw1n3EQKX6+CfRhF0HbXMTO7DqogYq1cV+ndbPkQufY79Mm3hLxW9tE7nQxFrtPy1i/yLqqeNZLGdOl5eVbwxMYy/6jsJNZ/2v9/WP3tr9km7Xlwa6zT0WbvXFq12ld47A3cjAsL2/wu3olaA+iMDD6MWxsROTF24Gz/Ev1jN+8Txjbb1Qkxf6FuRqbxXufQPWnxSpC5fea/lw/lfe3HPOj+vR+RU1deHM+/P109nAk39gRmFYFMoBCsUAhYFRKAcoFAMUBkahHKBQDFAYGIVygEIxQGFgFMoBCsUAhYFRKAcoFAMUBkahHKBQDFAYGIVygEIxQGFgFMoBCsVA5oXl34vhv5/Guosqv0LfBwyG19wL1Y/RG+Gan9bhGRaO3sw42IFZFqrNwX17qTa7V3FwloVHcyfXkbkW/jsKb45COUAhhRTeGoVygEIKKbw1CuUAhRRSeGsUygEKKUxc+O3PkGZXqNa+tyHergtMX+h7G8K8517o+Xh9bX+UO8NC1ZnLb0OY9dVbLt1BoXrfGzf99nFt330UHtcM9/6HM8ehmRaGRCGFFFJYYGH5e32Vv19b+Xvulb9vYvl7Xz7A/qXl70H7APsIl78X9KT8/byjncV0e7JPyt9X/wG+G2FS/vdbnJT+HSUAAAAAAAAAAAAAAAAAAAAAAODB/AJrTzjRflQlUwAAAABJRU5ErkJggg=="
												alt="icon calendrier dashboard"
											/>
											<div className="dashboard-main-content-team-users-details">
												<input
													type="texte"
													placeholder="Lien Trello"
													className="dashboard-edit-input"
												/>
											</div>
											<span
												className="edit-btn-main"
												onClick={() =>
													dispatch(
														setDisplayEdit({ name: "displayEditTrelloLink" })
													)
												}
											>
												Enregistrer
											</span>
										</div>
									)}
								</div>
							</>
						)}
						{displayMaincontent === "calendar" && <Calendar />}
					</div>
					{displayMaincontent === "main" && (
						<div className="dashboard-main-technologies">
							<div className="project-technologies-languages">
								<h4>Langages</h4>
								{languagesData?.length === 0 && (
									<span className="form-technologies-empty">vide...</span>
								)}
								{languagesData?.map((techno, index) => (
									<span key={index} className="technologies-icon-container2">
										<i
											className={`devicon-${techno.name}-plain`}
											style={{ backgroundColor: `${techno.color}` }}
										></i>
										{techno.name}
									</span>
								))}
							</div>
							<div className="project-technologies-frameworks">
								<h4>Frameworks</h4>
								{frameworksData?.length === 0 && (
									<span className="form-technologies-empty">vide...</span>
								)}
								{frameworksData?.map((techno, index) => (
									<span key={index} className="technologies-icon-container2">
										<i
											className={`devicon-${techno.name}-plain`}
											style={{ backgroundColor: `${techno.color}` }}
										></i>
										{techno.name}
									</span>
								))}
							</div>
							<div className="project-technologies-database">
								<h4>Database</h4>
								{databasesData?.length === 0 && (
									<span className="form-technologies-empty">vide...</span>
								)}
								{databasesData?.map((techno, index) => (
									<span key={index} className="technologies-icon-container2">
										<i
											className={`devicon-${techno.name}-plain`}
											style={{ backgroundColor: `${techno.color}` }}
										></i>
										{techno.name}
									</span>
								))}
							</div>
							<div className="project-technologies-others">
								<h4>Autres</h4>
								{othersData?.length === 0 && (
									<span className="form-technologies-empty">vide...</span>
								)}
								{othersData?.map((techno, index) => (
									<span key={index} className="technologies-icon-container2">
										<i
											className={`devicon-${techno.name}-plain`}
											style={{ backgroundColor: `${techno.color}` }}
										></i>
										{techno.name}
									</span>
								))}
							</div>
						</div>
					)}
				</div>
				<div className="dashboard-right">
					<CalendarSmall />
				</div>
			</div>
			<Footer />
		</Sidebar>
	);
}

export default Dashboard;
