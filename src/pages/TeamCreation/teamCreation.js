import "./teamCreation.scss";

import TeamCreationUserForm from "./teamCreationUserForm";
import TeamCreationAdminForm from "./teamCreationAdminForm";

function TeamCreation() {
  return (
    <div className="team-creation">
      <div className="team-creation-container">
        <div className="team-creation-container-header">
          <h2>Tu souhaite rejoindre le projet Develott ? 🎉</h2>
          <p>
            Tu n'as plus qu'à sélectionner le poste sur lequel tu souhaites de
            positionner ! Prenom Nom, pourra ensuite visualiser ta demande.
          </p>
        </div>
        <div className="team-creation-container-main">
          <TeamCreationUserForm />
        </div>
        <span className="close-modal-button">
          <i class="fas fa-times-circle"></i>
        </span>
      </div>
    </div>
  );
}

export default TeamCreation;
