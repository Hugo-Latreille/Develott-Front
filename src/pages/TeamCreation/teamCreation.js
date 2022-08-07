import "./teamCreation.scss";

import TeamCreationUserForm from "./teamCreationUserForm";
import TeamCreationAdminForm from "./teamCreationAdminForm";
import TeamCreationCharteForm from "./teamCreationCharteForm";
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
	const { data: user, refetch } = useGetOneUserQuery(email);
	const { data: projectWithTeam } = useGetOneProjectQuery(projectId);
	const projectTeam = projectWithTeam?.teams;
	const projectJobs = projectWithTeam?.jobByProject;

	const isUserProjectAdmin = projectTeam?.some(
		(team) => team.customer_id === user?.id && team.role === "admin"
	);
	// const isUserProjectAdmin = false;
	const candidates = projectTeam?.filter((team) => team.role === "candidates");
	const participants = projectTeam?.filter(
		(team) => team.role === "participants"
	);
	const displayProductOwner = projectTeam
		?.filter((team) => team.role === "admin")
		.map((po) => `${po.firstname} ${po.lastname}`)[0];


	return ReactDOM.createPortal(
		<div className="team-creation">
			<div className="team-creation-container">
				<div className="team-creation-container-header">
					{user.charte === false && (
						<>
							<h2>Hop hop hop ! </h2>
							<p>
								Avant de pouvoir rejoindre une équipe, il est nécessaire
								d'accepter la charte Develott. Promis, il s'agit de la dernière
								étape.
							</p>
						</>
					)}
					{isUserProjectAdmin && user.charte && (
						<>
							<h2>De nouvelles personnes souhaitent rejoindre ton projet 🎉</h2>
							<p>
								Tu n'as plus qu'à sélectionner les personnes avec lesquelles tu
								souhaites collaborer sur ton projet. N'hésites pas à consulter
								leurs profils afin d'en savoir davantage sur eux.
							</p>
						</>
					)}
					{!isUserProjectAdmin && user.charte && (
						<>
							<h2>Tu souhaite rejoindre le projet Develott ? 🎉</h2>
							<p>
								Tu n'as plus qu'à sélectionner le poste sur lequel tu souhaites
								de positionner ! {displayProductOwner} pourra ensuite visualiser
								ta demande.
							</p>
						</>
					)}
				</div>
				<div className="team-creation-container-main">
					{user.charte === false && (
						<TeamCreationCharteForm userId={user?.id} refetch={refetch} />
					)}
					{isUserProjectAdmin && user.charte && (
						<TeamCreationAdminForm
							projectId={projectId}
							candidates={candidates}
							refetch={refetch}
						/>
					)}
					{!isUserProjectAdmin && user.charte && (
						<TeamCreationUserForm
							projectJobs={projectJobs}
							projectTeam={projectTeam}
							userId={user?.id}
							projectId={projectId}
							candidates={candidates}
							participants={participants}
							refetch={refetch}
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
