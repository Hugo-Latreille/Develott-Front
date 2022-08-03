import "./searchbar.scss";
import { toggleShowFavorites } from "../../pages/App/appSlice";
import { ReactSearchAutocomplete } from "react-search-autocomplete";


import { useDispatch } from "react-redux";

import datas from "../../assets/data/technologiesData.json";

import { setSearchTechnology, setSearchJob } from "./searchbarSlice";

import { useGetAllJobsQuery } from "../../pages/Projects/projectsAPISlice";

function SearchBar() {
  const dispatch = useDispatch();


  const { data: allJobs } = useGetAllJobsQuery();


  const handleOnSearch = (string, results) => {
    // onSearch will have as the first callback parameter
    // the string searched and for the second the results.
    console.log(string, results);
  };

  const handleOnHover = (result) => {
    // the item hovered
    console.log(result);
  };

  const handleOnSelect = (item) => {
    // the item selected
    console.log(item);
    dispatch(setSearchTechnology(item.name));
  };

  const handleOnFocus = () => {
    console.log("Focused");
  };

  const formatResult = (item) => {
    return (
      <div className="results-container">
        <i className={`devicon-${item.name}-plain colored`}></i>
        <span className="result-span-title">{item.name}</span>
        <span className="result-span-subtitle" style={{ display: "block" }}>
          {item.tags.map((element) => element + "  ")}
        </span>
      </div>
    );
  };

  const technologies = datas.filter(
    (element) =>
      element.tags.includes("framework") || element.tags.includes("language")
  );

  return (
    <div className="input-container">
      <div className="projects-searchbar-container">
        <div>
          <ReactSearchAutocomplete
            items={datas}
            onSearch={handleOnSearch}
            onHover={handleOnHover}
            onSelect={handleOnSelect}
            onFocus={handleOnFocus}
            styling={{
              zIndex: 1000,
            }}
            formatResult={formatResult}
            maxResults={5}
            showIcon={true}
            placeholder="Javascript, Ruby, React..."
            showNoResults
            showItemsOnFocus={false}
          />
        </div>
        <div
          onClick={() => dispatch(setSearchTechnology(""))}
          className="projects-searchbar-init-search"
        >
          <i class="fas fa-undo"></i>
        </div>
      </div>
      <div className="input-container-flex">

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
         <div className="select-input favoris">
            <div onClick={() => dispatch(toggleShowFavorites())}>
              <i className="fas fa-heart fav"></i> Favoris
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SearchBar;
