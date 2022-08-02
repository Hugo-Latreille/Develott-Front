import "./teamCreation.scss";

import TeamCreationUserForm from "./teamCreationUserForm";
import TeamCreationAdminForm from "./teamCreationAdminForm";

import { useSelector, useDispatch } from "react-redux";

import ReactDOM from "react-dom";

import { useNavigate } from "react-router-dom";

import { toggleTeamCreationModalOpen } from "./teamCreationSlice";

function TeamCreation() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  return ReactDOM.createPortal(
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
        <div
          className="close-modal-button"
          onClick={() => {
            dispatch(toggleTeamCreationModalOpen());
            navigate(-1);
          }}
        >
          <i className="fas fa-times-circle"></i>
        </div>
      </div>
    </div>,
    document.getElementById("modal-root")
  );
}

export default TeamCreation;
