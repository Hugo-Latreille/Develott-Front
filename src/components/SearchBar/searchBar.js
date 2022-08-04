import "./searchbar.scss";

//? Date picker MUI
import { AdapterMoment } from "@mui/x-date-pickers/AdapterMoment";
import { LocalizationProvider } from "@mui/x-date-pickers";
import moment from "moment/min/moment-with-locales";
import { DatePicker } from "@mui/x-date-pickers";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import "moment/locale/fr";

import { toggleShowFavorites } from "../../pages/App/appSlice";
import { ReactSearchAutocomplete } from "react-search-autocomplete";

import SearchbarMainTechnologies from "./searchbarMainTechnos";
import SearchbarMainJobs from "./searchbarMainJobs";
import SearchbarMainProjectTitle from "./searchbarMainProjectTitle";

import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";

import {
  initResearch,
  setSearchJob,
  setSearchProjectDate,
} from "./searchbarSlice";

import { useGetAllJobsQuery } from "../../pages/Projects/projectsAPISlice";

function SearchBar() {
  const dispatch = useDispatch();
  const searchDate = useSelector((state) => state.searchbar.searchDate);
  const [openTechno, setOpenTechno] = useState(true);
  const [openTitre, setOpenTitre] = useState(false);

  const { data: allJobs } = useGetAllJobsQuery();

  // const handleOnSearch = (string, results) => {
  //   // onSearch will have as the first callback parameter
  //   // the string searched and for the second the results.
  //   console.log(string, results);
  // };

  // const handleOnHover = (result) => {
  //   // the item hovered
  //   console.log(result);
  // };

  // const handleOnSelect = (item) => {
  //   // the item selected
  //   console.log(item);
  //   dispatch(setSearchTechnology(item.name));
  // };

  // const handleOnFocus = () => {
  //   console.log("Focused");
  // };

  // const formatResult = (item) => {
  //   return (
  //     <div className="results-container">
  //       <i className={`devicon-${item.name}-plain colored`}></i>
  //       <span className="result-span-title">{item.name}</span>
  //       <span className="result-span-subtitle" style={{ display: "block" }}>
  //         {item.tags.map((element) => element + "  ")}
  //       </span>
  //     </div>
  //   );
  // };

  // const technologies = datas.filter(
  //   (element) =>
  //     element.tags.includes("framework") || element.tags.includes("language")
  // );

  const openingTechno = () => {
    setOpenTitre(false);
    setOpenTechno(true);
  };

  const openingTitre = () => {
    setOpenTechno(false);
    setOpenTitre(true);
  };

  return (
    <div className="input-container">
      <div className="select_research">
        <div
          className={
            openTitre
              ? "select_research_click"
              : "select_research_click underline"
          }
          onClick={() => openingTechno()}
        >
          Rechercher par Techno
        </div>
        <div
          className={
            openTechno
              ? "select_research_click"
              : "select_research_click underline"
          }
          onClick={() => openingTitre()}
        >
          Rechercher par Titre
        </div>
      </div>
      <div className="projects-searchbar-container">
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
          <i class="fas fa-undo"></i>
        </div>
        <div className="select-input favoris">
          <div onClick={() => dispatch(toggleShowFavorites())}>
            <i className="fas fa-heart fav"></i> Favoris
          </div>
        </div>
      </div>

      {/* <div className="input-container-flex">
        <div className="select-input-container">
          <select
            className="select-input"
            name="pets"
            id="pet-select"
            onChange={(e) => dispatch(setSearchJob(e.target.value))}
          >
            {allJobs?.map((job) => (
              <option key={job.id} value={job.id}>
                {job.name}
              </option>
            ))}
          </select>
          <select className="select-input" name="pets" id="pet-select">
            <option value=""> Date </option>
            <option value="dog">Dog</option>
            <option value="cat">Cat</option>
            <option value="hamster">Hamster</option>
            <option value="parrot">Parrot</option>
            <option value="spider">Spider</option>
            <option value="goldfish">Goldfish</option>
          </select>
          
        </div>
      </div> */}
    </div>
  );
}

export default SearchBar;
