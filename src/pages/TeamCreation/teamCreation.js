import "./teamCreation.scss";

import TeamCreationUserForm from "./teamCreationUserForm";
import TeamCreationAdminForm from "./teamCreationAdminForm";
import { useSelector, useDispatch } from "react-redux";
import ReactDOM from "react-dom";
import { useNavigate } from "react-router-dom";
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
	const projectJobs = projectWithTeam?.jobByProject;

	const isUserProjectAdmin = projectTeam?.some(
		(team) => team.customer_id === user?.id && team.role === "admin"
	);
	// const isUserProjectAdmin = false;
	const candidates = projectTeam?.filter((team) => team.role === "candidates");
	const displayProductOwner = projectTeam
		?.filter((team) => team.role === "admin")
		.map((po) => `${po.firstname} ${po.lastname}`)[0];

	return ReactDOM.createPortal(
		<div className="team-creation">
			<div className="team-creation-container">
				<div className="team-creation-container-header">
					<h2>Tu souhaite rejoindre le projet Develott ? 🎉</h2>
					<p>
						Tu n'as plus qu'à sélectionner le poste sur lequel tu souhaites de
						positionner ! {displayProductOwner} pourra ensuite visualiser ta
						demande.
					</p>
				</div>
				<div className="team-creation-container-main">
					{isUserProjectAdmin ? (
						<TeamCreationAdminForm
							projectId={projectId}
							candidates={candidates}
						/>
					) : (
						<TeamCreationUserForm
							projectJobs={projectJobs}
							userId={user?.id}
							projectId={projectId}
							candidates={candidates}
						/>
					)}
				</div>
				<div
					className="close-modal-button"
					onClick={() => {
						dispatch(toggleTeamCreationModalOpen());
						navigate(`/projet/${projectId}`, { replace: true });
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
