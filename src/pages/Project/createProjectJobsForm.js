import "./createProjectJobsForm.scss";

import { useState } from "react";

import SearchBarJobs from "../../components/SearchBar/searchBarJobs";
function CreateProjectJobsForm() {
  const [jobsData, setJobsData] = useState([]);

  const handleEditJobsData = (item) => {
    console.log("coucou");
    setJobsData([...jobsData, item]);
  };

  // const handleRemoveJobsData = (id) => {
  //   console.log("coucou");

  //   const updateJobsData = jobsData.filter((job) => job.id !== id);

  //   setJobsData([...updateJobsData]);
  // };

  const jobsDataFrist = [];
  const jobsDataElse = [];

  jobsData.forEach((element, index) => {
    if (index < 3) {
      jobsDataFrist.push(element);
    } else {
      jobsDataElse.push(element);
    }
  });

  return (
    <div className="form-jobs">
      <SearchBarJobs
        className="project-from-searchbar"
        jobsArray={jobsData}
        handleJobs={handleEditJobsData}
      />
      <span className="form-jobs-disclaimer">
        Veuillez renseigner les profils recherchés pour constituer votre équipe
        et pour mener à bien votre projet via le champs ci-dessus. Ensuite,
        veuillez passer à l'étape suivante.{" "}
      </span>
      <div className="form-jobs-container form-jobs-container-70">
        <div className="form-jobs-container-content">
          <h3 className="form-jobs-title">Profils Ajoutés</h3>
          {jobsData.length === 0 && (
            <span className="form-technologies-empty">vide...</span>
          )}
          {jobsDataFrist.map((job) => (
            <div key={job.id} className="form-technologies-items">
              <p>{job.name}</p>
              <i
                className="fal fa-backspace form-technologies-delete"
                // onClick={() => handleRemoveJobsData(job.id)}
              ></i>
            </div>
          ))}
        </div>
        <div className="form-jobs-container-content">
          <h3 className="form-jobs-title-2"> </h3>
          {jobsDataElse.map((job) => (
            <div krey={job.id} className="form-technologies-items">
              <p>
                <i className={`devicon-${job.name}-plain colored`}></i>{" "}
                {job.name}
              </p>
              <i className="fal fa-backspace form-technologies-delete"></i>
            </div>
          ))}
        </div>
      </div>
      <button
        type="submit"
        className="main-button-colored create-project-button"
      >
        Valider
      </button>
    </div>
  );
}

export default CreateProjectJobsForm;
