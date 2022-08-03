import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import "./teamCreation.scss";
import { removeTeam, setTeam } from "./teamCreationSlice";

function TeamCreationAdminForm({ projectJobs, userId, projectId, candidates }) {
	//TODO : afficher uniquement les candidats + job
	//TODO: Submit : update des candidats en participants
	//TODO :
	//TODO

	const { selectTeam } = useSelector((state) => state.teamCreation);
	const dispatch = useDispatch();
	const navigate = useNavigate();
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

	const handleSubmit = (e) => {
		e.preventDefault();
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
							checked={checked[index]}
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
