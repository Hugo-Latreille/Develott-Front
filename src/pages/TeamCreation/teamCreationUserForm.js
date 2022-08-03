import {
	useAddUserRoleMutation,
	useUpdateUserMutation,
} from "../Profiles/userAPISlice";
import "./teamCreation.scss";
import { useDispatch, useSelector } from "react-redux";
import { setUserChoice } from "./teamCreationSlice";
import { useNavigate } from "react-router-dom";

function TeamCreationUserForm({ projectJobs, userId, projectId, candidates }) {
	console.log(projectJobs);
	const { userJobChoice } = useSelector((state) => state.teamCreation);
	const [userIsCandidate] = useAddUserRoleMutation();
	const [changeUserJob] = useUpdateUserMutation();
	const dispatch = useDispatch();
	const navigate = useNavigate();
	console.log(userJobChoice);
	console.log(candidates);

	const isThereCandidates = (jobId) => {
		return candidates?.filter((candidate) => candidate.job_id === jobId).length;
	};

	const userAlreadyCandidate = candidates?.some(
		(candidate) => candidate.customer_id === userId
	);

	return (
		<form
			onSubmit={(e) => {
				e.preventDefault();
				changeUserJob({ id: userId, job_id: userJobChoice });
				if (!userAlreadyCandidate) {
					userIsCandidate({
						projectId: projectId,
						customer_id: userId,
						role_id: 3,
					});
				}
				navigate(`/projet/${projectId}`, { replace: true });
			}}
		>
			<h3>Sélectionner un poste :</h3>
			{projectJobs?.map((job, index) => (
				<div
					key={job.id_project_has_job}
					onChange={(e) => dispatch(setUserChoice(e.target.value))}
				>
					<input
						type="radio"
						name="selectJob"
						value={job.job_id}
						defaultChecked={index === 0 ? true : false}
					/>
					<label>{job.job}</label>
					<div>{isThereCandidates(job.job_id)} candidat(s)</div>
				</div>
			))}

			<button type="submit" className="main-button-bg-colored">
				Postuler <i className="far fa-rocket"></i>
			</button>
		</form>
	);
}

export default TeamCreationUserForm;
