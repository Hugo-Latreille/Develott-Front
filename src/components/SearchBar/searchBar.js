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

  return (
    <div id="navbar" className="input-container">
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
