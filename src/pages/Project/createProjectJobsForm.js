import "./createProjectJobsForm.scss";

import { useDispatch, useSelector } from "react-redux";

import SearchBarJobs from "../../components/SearchBar/searchBarJobs";

import { removeJobData } from "./createProjectSlice";

function CreateProjectJobsForm() {
	const jobsData = useSelector((state) => state.createProject.jobsData);
	const dispatch = useDispatch();

	const jobsDataFirst = [];
	const jobsDataElse = [];

	jobsData.forEach((element, index) => {
		if (index < 3) {
			jobsDataFirst.push(element);
		} else {
			jobsDataElse.push(element);
		}
	});

	return (
		<div className="form-jobs">
			<SearchBarJobs className="project-from-searchbar" />
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
					{jobsDataFirst.map((job) => (
						<div key={job.id} className="form-technologies-items">
							<p>{job.name}</p>
							<i
								className="fal fa-backspace form-technologies-delete"
								onClick={() => dispatch(removeJobData(job.id))}
							></i>
						</div>
					))}
				</div>
				<div className="form-jobs-container-content">
					<h3 className="form-jobs-title-2"> </h3>
					{jobsDataElse.map((job) => (
						<div key={job.id} className="form-technologies-items">
							<p>
								<i className={`devicon-${job.name}-plain colored`}></i>{" "}
								{job.name}
							</p>
							<i
								className="fal fa-backspace form-technologies-delete"
								onClick={() => dispatch(removeJobData(job.id))}
							></i>
						</div>
					))}
				</div>
			</div>
			<button
				type="submit"
				className="main-button-colored create-project-button"
			>
				Valider le projet
			</button>
		</div>
	);
}

export default CreateProjectJobsForm;
