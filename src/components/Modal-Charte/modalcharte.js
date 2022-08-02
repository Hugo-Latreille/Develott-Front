import "./modalcharte.scss";

import { useDispatch } from "react-redux";

import ReactDOM from "react-dom";

import { useNavigate } from "react-router-dom";

import { toggleCharteModalOpen } from "./modalSlice.js";
import Charte from "../Charte/charte";

function ModalCharte() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  return ReactDOM.createPortal(
    <div className="team-creation">
      <div className="team-creation-container">
        <div className="team-creation-container-header">
          <h2>Tu souhaite rejoindre un projet Develott ? 🎉</h2>
          <p>Il faut que tu valides la charte au préalable ! tmtc ma gueule</p>
        </div>
        <div className="charte-container-main">
          <section>
            <p className="charte_main_section">
              En tant qu’utilisateur de Develott, vous reconnaissez avoir pris
              connaissance de la présente charte de modération et vous vous
              engagez à respecter des règles de bonne conduite. Nous nous
              gardons le droit de supprimer tout Projet qui ne respecterait pas
              les règles de la présente charte d’utilisation. Vous vous engagez
              notamment à respecter les lois et règlements en vigueur ainsi que
              le droit des personnes. Sont notamment illicites (liste non
              exhaustive) :
            </p>
            <ul>
              <li className="charte_main_list">
                l’incitation à la haine raciale, au révisionnisme ou au
                négationnisme
              </li>{" "}
              <li className="charte_main_list">
                l’insulte (injures, propos à caractère sexistes, homophobes,
                grossiers, agressifs, irrévérencieux…)
              </li>{" "}
              <li className="charte_main_list">
                la diffamation (imputation d’un fait portant atteinte à
                l’honneur ou à la considération de la personne physique ou
                morale, ou du corps auquel le fait est imputé)
              </li>{" "}
              <li className="charte_main_list">
                les propos discriminatoires, sous toutes les formes
              </li>{" "}
              <li className="charte_main_list">
                l’incitation à la consommation de drogues, d’alcool ou de tabac
              </li>{" "}
              <li className="charte_main_list">
                les copies de messages privés ou de correspondance (violation du
                secret de la correspondance)
              </li>{" "}
              <li className="charte_main_list">la pédophilie</li>{" "}
              <li className="charte_main_list">
                les citations d’auteurs (extraits de livres, sites…). Toutefois,
                les analyses et courtes citations sont possibles, sous réserve
                que soient indiqués clairement le nom de l’auteur et la source.
                Plus généralement le contributeur s’engage à respecter les
                droits de propriété intellectuelle des auteurs
              </li>{" "}
              <li className="charte_main_list">
                les contributions ayant la nature de publicités. Plus
                généralement, tout utilisateur s’engage à respecter des règles
                de bonnes conduite et à : ne pas écrire entièrement en langage
                abrégé ou en majuscules
              </li>{" "}
              <li className="charte_main_list">
                ne pas publier des messages en plusieurs exemplaires ; ne pas
                mettre en cause des personnes particulières
              </li>{" "}
              <li className="charte_main_list">
                ne pas publier des petites annonces
              </li>{" "}
              <li className="charte_main_list">
                ne pas publier des commentaires à caractère publicitaire
              </li>{" "}
              <li className="charte_main_list">
                ne pas publier des commentaires hors sujet (par exemple une
                demande de renseignement sur un dossier administratif personnel,
                etc..)
              </li>{" "}
              <li className="charte_main_list">
                ne pas contribuer en associant un lien hypertexte renvoyant vers
                un site commercial
              </li>{" "}
              <li className="charte_main_list">
                ne pas utiliser le site de manière abusive ou malhonnête,
                notamment, sans que cela soit limitatif, en multipliant les
                messages dans le but d’entraver ou de fausser le fonctionnement
                de cet espace (phénomènes pollupostage)
              </li>{" "}
            </ul>
          </section>
        </div>
        <div className="btn_charte_modal">
          <button type="submit" className="main-button-bg-colored border">
            J'accepte <i className="far fa-rocket"></i>
          </button>
        </div>

        <div
          className="close-modal-button"
          onClick={() => {
            dispatch(toggleCharteModalOpen());
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

export default ModalCharte;
