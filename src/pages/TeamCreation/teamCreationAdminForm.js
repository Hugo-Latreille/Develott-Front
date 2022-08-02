import "./teamCreation.scss";

function TeamCreationAdminForm() {
  return (
    <form>
      <h3>Sélectionnes tes co-équipiers :</h3>
      <div className="team-creation-admin-form">
        <div className="team-creation-admin-form-input-container">
          <input
            type="checkbox"
            id="DeveloppeurBackEnd"
            name="drone"
            value="DeveloppeurBackEnd"
          />
          <label
            title="DeveloppeurBackEnd"
            className="team-creation-admin-form-label"
          >
            <p>jul du 13</p>
            <span>Developpeur/se Back-End</span>
          </label>
        </div>
        <div className="team-creation-admin-form-input-container">
          <input
            type="checkbox"
            id="DeveloppeurBackEnd"
            name="drone"
            value="DeveloppeurBackEnd"
          />
          <label
            title="DeveloppeurBackEnd"
            className="team-creation-admin-form-label"
          >
            <p>jul du 13</p>
            <span>Developpeur/se Back-End</span>
          </label>
        </div>
        <div className="team-creation-admin-form-input-container">
          <input
            type="checkbox"
            id="DeveloppeurBackEnd"
            name="drone"
            value="DeveloppeurBackEnd"
          />
          <label
            title="DeveloppeurBackEnd"
            className="team-creation-admin-form-label"
          >
            <p>jul du 13</p>
            <span>Developpeur/se Back-End</span>
          </label>
        </div>
        <div className="team-creation-admin-form-input-container">
          <input
            type="checkbox"
            id="DeveloppeurBackEnd"
            name="drone"
            value="DeveloppeurBackEnd"
          />
          <label
            title="DeveloppeurBackEnd"
            className="team-creation-admin-form-label"
          >
            <p>jul du 13</p>
            <span>Developpeur/se Back-End</span>
          </label>
        </div>
        <div className="team-creation-admin-form-input-container">
          <input
            type="checkbox"
            id="DeveloppeurBackEnd"
            name="drone"
            value="DeveloppeurBackEnd"
          />
          <label
            title="DeveloppeurBackEnd"
            className="team-creation-admin-form-label"
          >
            <p>jul du 13</p>
            <span>Developpeur/se Back-End</span>
          </label>
        </div>
      </div>

      <button type="submit" className="main-button-bg-colored">
        Constituer l'équipe <i className="far fa-rocket"></i>
      </button>
    </form>
  );
}

export default TeamCreationAdminForm;
