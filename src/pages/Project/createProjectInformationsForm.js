import "./createProjectInformationsForm.scss";

import InputProject from "../../components/Input/ProjectInput";

function CreateProjectInformationsForm() {
  return (
    <form>
      <InputProject name="email" label="Nom du projet" />
      <InputProject name="email" label="Description courte" />
      <div className="create-project-right-container">
        <InputProject
          name="email"
          label="Lancement du projet"
          className="form-right-container-left"
        />
        <InputProject
          name="email"
          label="Date de fin du projet"
          className="form-right-container-right"
        />
      </div>
    </form>
  );
}

export default CreateProjectInformationsForm;
