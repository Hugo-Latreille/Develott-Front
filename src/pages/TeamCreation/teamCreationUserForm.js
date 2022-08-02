import "./teamCreation.scss";

function TeamCreationUserForm() {
  return (
    <form>
      <h3>Sélectionner un poste :</h3>
      <div>
        <input
          type="radio"
          id="DeveloppeurBackEnd"
          name="drone"
          value="DeveloppeurBackEnd"
          checked
        />
        <label title="DeveloppeurBackEnd">Developpeur/se Back-End</label>
      </div>

      <div>
        <input
          type="radio"
          id="DeveloppeurFrontEnd"
          name="drone"
          value="DeveloppeurFrontEnd"
        />
        <label title="DeveloppeurFrontEnd">Developpeur/se Front-End</label>
      </div>

      <div>
        <input type="radio" id="UxDesigner" name="drone" value="UxDesigner" />
        <label title="UxDesigner">Ux Designer</label>
      </div>
      <div>
        <input type="radio" id="ScrumMaster" name="drone" value="ScrumMaster" />
        <label title="ScrumMaster">Scrum Master</label>
      </div>

      <div>
        <input type="radio" id="GitMaster" name="drone" value="GitMaster" />
        <label title="GitMaster">Git Master</label>
      </div>
      <button type="submit" className="main-button-bg-colored">
        Postuler <i className="far fa-rocket"></i>
      </button>
    </form>
  );
}

export default TeamCreationUserForm;
