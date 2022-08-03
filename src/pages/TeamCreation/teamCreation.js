import "./teamCreation.scss";

import TeamCreationUserForm from "./teamCreationUserForm";
import TeamCreationAdminForm from "./teamCreationAdminForm";
import { useSelector, useDispatch } from "react-redux";
import ReactDOM from "react-dom";
import { useNavigate, useParams } from "react-router-dom";
import { toggleTeamCreationModalOpen } from "./teamCreationSlice";
import { useGetOneUserQuery } from "../Profiles/userAPISlice";
import { useGetOneProjectQuery } from "../Projects/projectsAPISlice";

function TeamCreation() {
	const dispatch = useDispatch();
	const navigate = useNavigate();
	const { projectId } = useSelector((state) => state.teamCreation);
	const { email } = useSelector((state) => state.auth);
	const { data: user } = useGetOneUserQuery(email);
	const { data: projectWithTeam } = useGetOneProjectQuery(projectId);
	const projectTeam = projectWithTeam?.teams;

	const isUserProjectAdmin = projectTeam?.some(
		(team) => team.customer_id === user?.id && team.role === "admin"
	);
	console.log(isUserProjectAdmin);

	return ReactDOM.createPortal(
		<div className="team-creation">
			<div className="team-creation-container">
				<div className="team-creation-container-header">
					<h2>Tu souhaite rejoindre le projet Develott ? 🎉</h2>
					<p>
						Tu n'as plus qu'à sélectionner le poste sur lequel tu souhaites de
						positionner ! Prenom Nom, pourra ensuite visualiser ta demande.
					</p>
				</div>
				<div className="team-creation-container-main">
					{isUserProjectAdmin ? (
						<TeamCreationAdminForm />
					) : (
						<TeamCreationUserForm />
					)}
				</div>
				<div
					className="close-modal-button"
					onClick={() => {
						dispatch(toggleTeamCreationModalOpen());
						navigate(-1);
					}}
				>
					<i className="fas fa-times-circle"></i>
				</div>
			</div>
		</div>,
		document.getElementById("modal-root")
	);
}

export default TeamCreation;
