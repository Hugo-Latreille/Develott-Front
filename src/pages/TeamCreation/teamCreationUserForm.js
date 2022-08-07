import {
	useAddUserRoleMutation,
	useUpdateUserMutation,
} from "../Profiles/userAPISlice";
import "./teamCreation.scss";
import { useDispatch, useSelector } from "react-redux";
import {
	setUserChoice,
	toggleTeamCreationModalOpen,
} from "./teamCreationSlice";
import { useNavigate } from "react-router-dom";
import { useGetAllProjectsQuery } from "../Projects/projectsAPISlice";
//React Toastify
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function TeamCreationUserForm({
	projectJobs,
	userId,
	projectId,
	candidates,
	projectTeam,
	participants,
	refetch,
}) {
	const { userJobChoice } = useSelector((state) => state.teamCreation);
	const { data: projectsTeams } = useGetAllProjectsQuery();
	const [userIsCandidate] = useAddUserRoleMutation();
	const [changeUserJob] = useUpdateUserMutation();
	const dispatch = useDispatch();
	const navigate = useNavigate();

	const isUserAlreadyParticipant = projectsTeams?.teams.some(
		(team) => team?.customer_id === userId && team?.role === "participants"
	);

	const isThereCandidates = (jobId) => {
		return candidates?.filter((candidate) => candidate.job_id === jobId).length;
	};

	const jobNames = projectJobs?.map((job) => job.job);
	const filterJobs = projectJobs?.filter(
		({ job }, index) => !jobNames.includes(job, index + 1)
	);

	// const jobAlreadyHasParticipant = (jobId) => {
	// 	return projectTeam?.some(
	// 		(participant) =>
	// 			participant.job_id === jobId && participant.role === "participants"
	// 	);
	// };

	const userAlreadyCandidate = candidates?.some(
		(candidate) => candidate.customer_id === userId
	);

	// console.log(projectsTeams?.teams);
	// console.log(projectJobs);
	// console.log(filterJobs);
	// console.log(candidates);

	const countDuplicates = (jobId) => {
		const count = {};
		projectJobs?.forEach((element) => {
			if (element.job_id === jobId) {
				var key = JSON.stringify(element.job_id);
				count[key] = (count[key] || 0) + 1;
			}
		});
		return count;
	};

	const countParticipantsSameJob = (jobId) => {
		const count = {};
		participants?.forEach((participant) => {
			if (participant.job_id === jobId) {
				var key = JSON.stringify(participant.job_id);
				count[key] = (count[key] || 0) + 1;
			}
		});
		return count;
	};
	console.log(countParticipantsSameJob(2));
	console.log(countDuplicates(2));

	const checkHowManyParticipantsPerDuplicate = (jobId) => {
		const candidatesSameJob = countParticipantsSameJob(jobId);
		const howManySameJob = countDuplicates(jobId);

		if (Object.keys(candidatesSameJob).length === 0) {
			return howManySameJob;
		} else {
			for (const candidate in candidatesSameJob) {
				for (const sameJob in howManySameJob) {
					if (candidate === sameJob) {
						return {
							[candidate]:
								howManySameJob[sameJob] - candidatesSameJob[candidate],
						};
					}
				}
			}
		}
	};
	console.log(checkHowManyParticipantsPerDuplicate(2));

	// const findJobIdByIdProjectHasJob = (idProjectHasJob) => {
	// 	return projectJobs?.find(
	// 		(projectJob) => projectJob.id_project_has_job === idProjectHasJob
	// 	)?.job_id;
	// };

	return (
		<form
			className="form-user-container"
			onSubmit={(e) => {
				e.preventDefault();
				if (!isUserAlreadyParticipant) {
					changeUserJob({
						id: userId,
						job_id: userJobChoice,
					});
					if (!userAlreadyCandidate) {
						userIsCandidate({
							projectId: projectId,
							customer_id: userId,
							role_id: 3,
						});
					}
					dispatch(toggleTeamCreationModalOpen());
					refetch();
					navigate(`/projet/${projectId}`, { replace: true });
				} else {
					toast.error("Vous faites déjà partie de l'équipe d'un projet");
				}
			}}
		>
			<h3>Sélectionner un poste :</h3>
			{filterJobs?.map((job) => (
				<div
					key={job.id_project_has_job}
					onChange={(e) => dispatch(setUserChoice(e.target.value))}
				>
					{checkHowManyParticipantsPerDuplicate(job.job_id)[job.job_id] &&
					checkHowManyParticipantsPerDuplicate(job.job_id)[job.job_id] !== 0 ? (
						<>
							<input type="radio" name="selectJob" value={job.job_id} />
							<label>{job.job}</label>
							<div className="form-user-container-spans">
								<span>{isThereCandidates(job.job_id)} candidat(s)</span>
								{checkHowManyParticipantsPerDuplicate(job.job_id) && (
									<span>
										{
											checkHowManyParticipantsPerDuplicate(job.job_id)[
												job.job_id
											]
										}
										place(s) restante(s)
									</span>
								)}
							</div>
						</>
					) : (
						<>
							<div> {job.job} : ce poste est déjà pourvu </div>
						</>
					)}
				</div>
			))}

			<button type="submit" className="main-button-bg-colored">
				Postuler <i className="far fa-rocket"></i>
			</button>
		</form>
	);
}

export default TeamCreationUserForm;
