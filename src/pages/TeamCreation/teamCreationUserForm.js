import {
  useAddUserRoleMutation,
  useUpdateUserMutation,
} from "../Profiles/userAPISlice";
import "./teamCreation.scss";
import { useDispatch, useSelector } from "react-redux";
import { setUserChoice } from "./teamCreationSlice";
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
}) {
  const { userJobChoice } = useSelector((state) => state.teamCreation);
  const { data: projectsTeams } = useGetAllProjectsQuery();
  const [userIsCandidate] = useAddUserRoleMutation();
  const [changeUserJob] = useUpdateUserMutation();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const isUserAlreadyParticipant = projectsTeams?.teams.some(
    (team) => team?.customer_id === userId
  );

  const isThereCandidates = (jobId) => {
    return candidates?.filter((candidate) => candidate.job_id === jobId).length;
  };

  //TODO 1 candidat par job

  console.log(candidates);
  console.log(projectJobs);
  console.log(projectTeam);

  const jobAlreadyHasParticipant = (jobId) => {
    return projectTeam?.some(
      (participant) =>
        participant.job_id === jobId && participant.role === "participants"
    );
  };
  const userAlreadyCandidate = candidates?.some(
    (candidate) => candidate.customer_id === userId
  );

  const findJobIdByIdProjectHasJob = (idProjectHasJob) => {
    return projectJobs?.find(
      (projectJob) => projectJob.id_project_has_job === idProjectHasJob
    )?.job_id;
  };

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        if (!isUserAlreadyParticipant) {
          changeUserJob({
            id: userId,
            job_id: findJobIdByIdProjectHasJob(userJobChoice),
          });
          if (!userAlreadyCandidate) {
            userIsCandidate({
              projectId: projectId,
              customer_id: userId,
              role_id: 3,
            });
          }
          navigate(`/projet/${projectId}`, { replace: true });
        }
        toast.error("Vous faites déjà partie de l'équipe d'un projet");
      }}
    >
      <h3>Sélectionner un poste :</h3>
      {projectJobs?.map((job) => (
        <div
          key={job.id_project_has_job}
          onChange={(e) => dispatch(setUserChoice(e.target.value))}
        >
          {!jobAlreadyHasParticipant(job.job_id) ? (
            <div className="team-user-form-input-container">
              <div className="team-user-form-input-container-left">
                <input
                  type="radio"
                  name="selectJob"
                  value={job.id_project_has_job}
                />
                <label>{job.job}</label>
              </div>
              <div className="team-user-form-input-container-right">
                {isThereCandidates(job.job_id)} candidat(s)
              </div>
            </div>
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
