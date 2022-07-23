import "./createProjectJobsForm.scss";

import InputProject from "../../components/Input/ProjectInput";
import SearchBar from "../../components/SearchBar/searchBar";
function CreateProjectJobsForm() {
  return (
    <div className="form-jobs">
      <SearchBar className="navbar-searchbar" />
      <span className="form-jobs-disclaimer">
        Veuillez renseigner les profils recherchés pour constituer votre équipe
        et pour mener à bien votre projet via le champs ci-dessus. Une fois tous
        les postes renseignés, veuillez passer à l'étape suivante.{" "}
      </span>
      <div className="form-jobs-container form-jobs-container-70">
        <div className="form-jobs-container-content">
          <h3 className="form-jobs-title">Profils Ajoutés</h3>
          <div className="form-jobs-items">
            <p>Développeur Back-end</p>
            <i class="fal fa-backspace form-jobs-delete"></i>
          </div>
          <div className="form-jobs-items">
            <p>Développeur Back-end</p>
            <i class="fal fa-backspace form-jobs-delete"></i>
          </div>
          <div className="form-jobs-items">
            <p>Développeur Front-end</p>
            <i class="fal fa-backspace form-jobs-delete"></i>
          </div>
          <div className="form-jobs-items">
            <p>Scrum master</p>
            <i class="fal fa-backspace form-jobs-delete"></i>
          </div>
        </div>
        <div className="form-jobs-container-content">
          <h3 className="form-jobs-title">Profils Ajoutés</h3>
          <div className="form-jobs-items">
            <p>UX-UI Designer</p>
            <i class="fal fa-backspace form-jobs-delete"></i>
          </div>
          <div className="form-jobs-items">
            <p>Git Master</p>
            <i class="fal fa-backspace form-jobs-delete"></i>
          </div>
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
