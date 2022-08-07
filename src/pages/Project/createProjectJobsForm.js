import "./createProjectJobsForm.scss";

import { useDispatch, useSelector } from "react-redux";

import SearchBarJobs from "../../components/SearchBar/searchBarJobs";

import {
  useDeleteProjectJobMutation,
  useGetOneProjectQuery,
} from "../Projects/projectsAPISlice";
import { useNavigate } from "react-router-dom";
import { emptyForm } from "./createProjectSlice";

function CreateProjectJobsForm() {
  const { projectId } = useSelector((state) => state.createProject);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [deleteJobProject] = useDeleteProjectJobMutation();
  const { data: projectWithTeam } = useGetOneProjectQuery(projectId);
  const projectJobs = projectWithTeam?.jobByProject;

  const jobsDataFirst = [];
  const jobsDataElse = [];

  projectJobs?.forEach((element, index) => {
    if (index < 4) {
      jobsDataFirst.push(element);
    } else {
      jobsDataElse.push(element);
    }
  });

  console.log(projectJobs);

  return (
    <div className="form-jobs">
      <div className="create-project-step-mobile step-active">
        <h2 className="create-project-title">Profils recherchés</h2>
        <p className="create-project-desc p-light">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt.
        </p>
      </div>
      <SearchBarJobs className="project-from-searchbar" />
      <span className="form-jobs-disclaimer">
        Veuillez renseigner les profils recherchés pour constituer votre équipe
        et pour mener à bien votre projet via le champs ci-dessus. Ensuite,
        veuillez passer à l'étape suivante.{" "}
      </span>
      <div className="form-jobs-container form-jobs-container-70">
        <div className="form-jobs-container-content">
          <h3 className="form-jobs-title">Profils Ajoutés</h3>
          {projectJobs?.map.length === 0 && (
            <span className="form-technologies-empty">vide...</span>
          )}
          {jobsDataFirst?.map((job) => (
            <div
              key={job.id_project_has_job}
              className="form-technologies-items"
            >
              <p>{job.job}</p>
              <i
                className="fal fa-backspace form-technologies-delete"
                onClick={() => {
                  deleteJobProject({
                    id: projectId,
                    id_project_has_job: job.id_project_has_job,
                  });
                }}
              ></i>
            </div>
          ))}
        </div>
        <div className="form-jobs-container-content">
          <h3 className="form-jobs-title-2"> </h3>
          {jobsDataElse.map((job) => (
            <div
              key={job.id_project_has_job}
              className="form-technologies-items"
            >
              <p>
                <i className={`devicon-${job.job}-plain colored`}></i> {job.job}
              </p>
              <i
                className="fal fa-backspace form-technologies-delete"
                onClick={() => {
                  deleteJobProject({
                    id: projectId,
                    id_project_has_job: job.id_project_has_job,
                  });
                }}
              ></i>
            </div>
          ))}
        </div>
      </div>
      <button
        type="button"
        className="main-button-colored create-project-button"
        onClick={() => {
          dispatch(emptyForm());
          navigate("/projets", { replace: true });
        }}
      >
        Valider le projet
      </button>
    </div>
  );
}

export default CreateProjectJobsForm;
