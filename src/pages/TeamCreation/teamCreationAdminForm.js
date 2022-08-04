import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import {
	useUpdateUserMutation,
	useUpdateUserRoleMutation,
} from "../Profiles/userAPISlice";
import "./teamCreation.scss";
import { removeTeam, resetTeam, setTeam } from "./teamCreationSlice";

function TeamCreationAdminForm({ projectId, candidates }) {
	//TODO : bouton pour supprimer un candidat + n'afficher que les posts sans participants
	//TODO : project : affichage postes déjà occupés
	//TODO : projects: =! entre taille jobs projet et participants projet
	//TODO :

	const { selectTeam } = useSelector((state) => state.teamCreation);
	const dispatch = useDispatch();
	const navigate = useNavigate();
	console.log(candidates);
	const [updateCandidateToParticipant] = useUpdateUserRoleMutation();
	const [UpdateUserActive] = useUpdateUserMutation();

	const [checked, setChecked] = useState(false);
	const handleChange = (e, index) => {
		setChecked((prevState) => ({
			...prevState,
			[index]: !prevState[index],
		}));
		if (!checked[index]) {
			dispatch(setTeam(e.target.value));
		} else {
			dispatch(removeTeam(e.target.value));
		}
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		selectTeam.forEach((checkedCandidate) => {
			const thisCandidate = candidates.filter(
				(candidate) => candidate.customer_id === Number(checkedCandidate)
			);
			updateCandidateToParticipant({
				projectId: projectId,
				customer_id: thisCandidate[0].customer_id,
				role_id: 2,
			});
			UpdateUserActive({ id: thisCandidate[0].customer_id, is_active: true });
		});
		dispatch(resetTeam());
		navigate(`/projet/${projectId}`, { replace: true });
		//TODO : effacer les non retenus ?
	};

	return (
		<form onSubmit={handleSubmit}>
			<h3>Sélectionnes tes co-équipiers :</h3>
			<div className="team-creation-admin-form">
				{candidates?.map((candidate, index) => (
					<div
						key={candidate.customer_id}
						className="team-creation-admin-form-input-container"
					>
						<input
							type="checkbox"
							name="selectTeam"
							value={candidate.customer_id}
							checked={checked[index] || false}
							onChange={(e) => handleChange(e, index)}
						/>
						<label className="team-creation-admin-form-label">
							<Link to={`/profil/${candidate.customer_id}`} target="_blank">
								<p>{`${candidate.firstname} ${candidate.lastname}`}</p>
							</Link>
							<span>{candidate.job}</span>
						</label>
					</div>
				))}
			</div>

			<button type="submit" className="main-button-bg-colored">
				Constituer l'équipe <i className="far fa-rocket"></i>
			</button>
		</form>
	);
}

export default TeamCreationAdminForm;
