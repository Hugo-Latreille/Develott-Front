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
        <label for="DeveloppeurBackEnd">Developpeur/se Back-End</label>
      </div>

      <div>
        <input
          type="radio"
          id="DeveloppeurFrontEnd"
          name="drone"
          value="DeveloppeurFrontEnd"
        />
        <label for="DeveloppeurFrontEnd">Developpeur/se Front-End</label>
      </div>

      <div>
        <input type="radio" id="UxDesigner" name="drone" value="UxDesigner" />
        <label for="UxDesigner">Ux Designer</label>
      </div>
      <div>
        <input type="radio" id="ScrumMaster" name="drone" value="ScrumMaster" />
        <label for="ScrumMaster">Scrum Master</label>
      </div>

      <div>
        <input type="radio" id="GitMaster" name="drone" value="GitMaster" />
        <label for="GitMaster">Git Master</label>
      </div>
      <button type="submit" className="main-button-bg-colored">
        Postuler <i class="far fa-rocket"></i>
      </button>
    </form>
  );
}

export default TeamCreationUserForm;
