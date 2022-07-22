import "./createProjectTechnologiesForm.scss";

import InputProject from "../../components/Input/ProjectInput";
import SearchBar from "../../components/SearchBar/searchBar";
function CreateProjectTechnologiesForm() {
  return (
    <div className="form-technologies">
      <SearchBar className="navbar-searchbar" />
      <span className="form-technologies-disclaimer">
        Veuillez renseigner les technologies souhaitées pour mener à bien votre
        projet via le champs ci-dessus. Une fois toutes les technologies
        ajoutées, veuillez passer à l'étape suivante.{" "}
      </span>
      <div className="form-technologies-container form-technologies-container-70">
        <div className="form-technologies-container-content">
          <h3 className="form-technologies-title">Languages</h3>
          <div className="form-technologies-items">
            <p>
              <i class="devicon-javascript-plain colored"></i> Javascript
            </p>
            <i class="fal fa-backspace form-technologies-delete"></i>
          </div>
          <div className="form-technologies-items">
            <p>
              <i class="devicon-html5-plain colored"></i> html5
            </p>
            <i class="fal fa-backspace form-technologies-delete"></i>
          </div>
          <div className="form-technologies-items">
            <p>
              <i class="devicon-css3-plain colored"></i> Css3
            </p>
            <i class="fal fa-backspace form-technologies-delete"></i>
          </div>
          <div className="form-technologies-items">
            <p>
              <i class="devicon-sass-plain colored"></i> sass
            </p>
            <i class="fal fa-backspace form-technologies-delete"></i>
          </div>
        </div>
        <div className="form-technologies-container-content">
          <h3 className="form-technologies-title">Frameworks</h3>
          <p>
            <i class="devicon-react-plain colored"></i> react
          </p>
          <p>
            <i class="devicon-redux-plain colored"></i> redux
          </p>
          <p>
            <i class="devicon-bootstrap-plain colored"></i> bootstrap
          </p>
        </div>
        <div className="form-technologies-container-content">
          <h3 className="form-technologies-title">Divers</h3>
          <span className="form-technologies-empty">
            Vide pour l'instant...
          </span>
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

export default CreateProjectTechnologiesForm;
