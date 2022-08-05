import "./searchbar.scss";

//? Date picker MUI
import { AdapterMoment } from "@mui/x-date-pickers/AdapterMoment";
import { LocalizationProvider } from "@mui/x-date-pickers";
import moment from "moment/min/moment-with-locales";
import { DatePicker } from "@mui/x-date-pickers";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import "moment/locale/fr";

import "intro.js/introjs.css";
import { Steps } from "intro.js-react";

import { toggleShowFavorites } from "../../pages/App/appSlice";
import { toggleOpenIntro } from "../SideBar/sidebarSlice";
import { ReactSearchAutocomplete } from "react-search-autocomplete";

import SearchbarMainTechnologies from "./searchbarMainTechnos";
import SearchbarMainJobs from "./searchbarMainJobs";
import SearchbarMainProjectTitle from "./searchbarMainProjectTitle";

import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";

import { initResearch, setSearchProjectDate } from "./searchbarSlice";

function SearchBar() {
  const dispatch = useDispatch();
  const searchDate = useSelector((state) => state.searchbar.searchDate);
  const introIsOpen = useSelector((state) => state.sidebarintro.introIsOpen);
  const [openTechno, setOpenTechno] = useState(true);
  const [openTitre, setOpenTitre] = useState(false);

  const openingTechno = () => {
    setOpenTitre(false);
    setOpenTechno(true);
  };

  const openingTitre = () => {
    setOpenTechno(false);
    setOpenTitre(true);
  };
  const [initialStep, setInitialStep] = useState(0);

  const onExit = () => {
    dispatch(toggleOpenIntro());
  };
  const steps = [
    {
      element: "#intromain",
      intro:
        "Bienvenue sur Develott ! Nous sommes heureux de te connaitre. Suis moi, je vais t'expliquer comment ça marche...",
      position: "center",
    },
    {
      element: "#sideok",
      intro:
        "Ici c'est votre Sidebar elle est cool hein ? Elle deviendra vite votre meilleure amie. Tu y retrouveras tous les liens utiles. Utilise notre logo pour l'ouvrir ou la fermer.",
      position: "right",
    },
    {
      element: "#step-0",
      intro:
        "Voici le Dashboard, quand tu auras rejoint un projet il te permettra de retrouver toutes les infos utiles à la bonne réalisation de votre application (qui va revolutionner le monde, on croise les doigts !)",
      position: "right",
    },
    {
      element: "#step-1",
      intro:
        "Ici, tu retouveras tous les projets proposés par notre IMMENSE communauté. Y'a le choix, choisis le bien et postule (qui ne tente rien..)",
      position: "right",
    },
    {
      element: "#step-2",
      intro:
        "Là c'est la création de projet. Tu as des idées, l'âme d'un artiste ou l'envie de progresser ? Crée ton projet, choisis ton équipe et fais de tes réves une réalité (on croit en toi !)",
      position: "right",
    },
    {
      element: "#step-3",
      intro:
        "Ah ! Besoin de décompresser ? ou juste d'attendre que ton équipe soit connectée ? Detend toi avec notre jeu Snake fait maison",
      position: "right",
    },
    {
      element: "#profil",
      intro:
        "Ici tu retrouveras ton profil, tu peux ajouter ou modifier ta photo de profil, ta description et tes liens personnels. C'est ta petite bulle à toi !",
      position: "right",
    },
    {
      element: "#navbar",
      intro:
        "On à bientôt fini...  Utilise cette barre de recherche pour trouver des projets en fonction de plusieurs critéres (Technologies / Metier / Date) ou par titre de projet. Hésite pas à ajouter tes projets préférés en Favoris pour les retrouver facilement... C'est tout pour moi ! Bienvenue dans l'équipe de Develott",
      position: "center",
    },
    // "Ah ! la messagerie instantanée de Develott, envoi des messages à d'autres utilisateurs ou à ton groupe de projet. Le top du top pour rester en contact avec ton équipe",
  ];

  return (
    <div id="navbar" className="input-container">
      <Steps
        enabled={introIsOpen}
        steps={steps}
        initialStep={initialStep}
        onExit={onExit}
      />
      <div className="select_research">
        <div
          className={
            openTitre
              ? "select_research_click"
              : "select_research_click underline"
          }
          onClick={() => openingTechno()}
        >
          Recherche Affinée
        </div>
        <div
          className={
            openTechno
              ? "select_research_click"
              : "select_research_click underline"
          }
          onClick={() => openingTitre()}
        >
          Recherche par Nom
        </div>
      </div>
      <div className="projects-searchbar-container">
        <i
          className="fas fa-info-circle information_intro"
          onClick={() => dispatch(toggleOpenIntro())}
        ></i>
        {openTechno && (
          <>
            <SearchbarMainTechnologies />
            <SearchbarMainJobs />
            <LocalizationProvider
              dateAdapter={AdapterMoment}
              adapterLocale="fr"
            >
              <DatePicker
                value={searchDate}
                className="date-picker-color"
                onChange={(newValue) => {
                  console.log(newValue.format());
                  dispatch(setSearchProjectDate(newValue.format()));
                }}
                // renderInput={(params) => <TextField {...params} />}
                renderInput={({ inputRef, inputProps, InputProps }) => (
                  <Box sx={{ display: "flex", alignItems: "center" }}>
                    <input ref={inputRef} {...inputProps} />
                    {InputProps?.endAdornment}
                  </Box>
                )}
              />
            </LocalizationProvider>
          </>
        )}
        {openTitre && <SearchbarMainProjectTitle />}
        <div
          onClick={() => dispatch(initResearch(""))}
          className="projects-searchbar-init-search"
        >
          <i className="fas fa-undo"></i>
        </div>
        <div className="select-input favoris">
          <div onClick={() => dispatch(toggleShowFavorites())}>
            <i className="fas fa-heart fav"></i>{" "}
            <span className="display">Favoris</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SearchBar;
