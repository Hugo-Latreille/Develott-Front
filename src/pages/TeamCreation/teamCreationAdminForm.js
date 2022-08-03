import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import "./teamCreation.scss";
import { removeTeam, setTeam } from "./teamCreationSlice";

function TeamCreationAdminForm({ projectJobs, userId, projectId, candidates }) {
	//TODO : afficher uniquement les candidats + job
	//TODO: Submit : update des candidats en participants
	//TODO :
	//TODO

	const { selectTeam } = useSelector((state) => state.teamCreation);
	const dispatch = useDispatch();
	console.log(candidates);

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

	return (
		<form>
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
							checked={checked[index]}
							onChange={(e) => handleChange(e, index)}
						/>
						<label
							title="DeveloppeurBackEnd"
							className="team-creation-admin-form-label"
						>
							<p>jul du 13</p>
							<span>Developpeur/se Back-End</span>
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
