import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import {
	useDeleteUserRoleMutation,
	useUpdateUserMutation,
	useUpdateUserRoleMutation,
} from "../Profiles/userAPISlice";
import "./teamCreation.scss";
import {
	removeTeam,
	resetTeam,
	setTeam,
	toggleTeamCreationModalOpen,
} from "./teamCreationSlice";

function TeamCreationAdminForm({ projectId, candidates, refetch }) {
	const { selectTeam } = useSelector((state) => state.teamCreation);
	const dispatch = useDispatch();
	const navigate = useNavigate();
	console.log(candidates);
	const [updateCandidateToParticipant] = useUpdateUserRoleMutation();
	const [UpdateUserActive] = useUpdateUserMutation();
	const [deleteUserRole] = useDeleteUserRoleMutation();

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
		dispatch(toggleTeamCreationModalOpen());
		refetch();
		navigate(`/projet/${projectId}`, { replace: true });
	};

	return (
		<form onSubmit={handleSubmit} className="form-admin-container">
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
							<div className="team-user-form-input-container">
								<Link to={`/profil/${candidate.customer_id}`} target="_blank">
									<p>{`${candidate.firstname} ${candidate.lastname}`}</p>
								</Link>
								<div className="margin-left2">
									<i
										className="fal fa-backspace form-technologies-delete"
										onClick={() => {
											deleteUserRole({
												projectId: projectId,
												customer_id: candidate.customer_id,
												role_id: candidate.role_id,
											});
										}}
									></i>
								</div>
							</div>
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
