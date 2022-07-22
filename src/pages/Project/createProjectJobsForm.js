import "./createProjectJobsForm.scss";

import InputProject from "../../components/Input/ProjectInput";
import SearchBar from "../../components/SearchBar/searchBar";
function CreateProjectJobsForm() {
  return (
    <div>
      <SearchBar className="navbar-searchbar" />
      <button
        type="submit"
        className="main-button-colored create-project-button"
      >
        Valider
      </button>
      <div className="form-jobs-container">
        <div className="form-jobs-container-content">qd</div>
        <div className="form-jobs-container-content">qd</div>
        <div className="form-jobs-container-content">qd</div>
      </div>
    </div>
  );
}

export default CreateProjectJobsForm;
