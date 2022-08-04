import "./searchBarProjects.scss";
import { ReactSearchAutocomplete } from "react-search-autocomplete";
import { useSelector, useDispatch } from "react-redux";

import { setSearchProjectName } from "./searchbarSlice";

import { useGetAllProjectsQuery } from "./../../pages/Projects/projectsAPISlice";

function SearchbarMainProjectTitle() {
  const dispatch = useDispatch();

  const { data: projectsTeams } = useGetAllProjectsQuery();
  let allProjects = projectsTeams?.projects;
  console.log(allProjects);

  const handleOnSelect = (item) => {
    // the item selected
    console.log(item);
    dispatch(setSearchProjectName(item.id));
  };

  const formatResult = (item) => {
    return (
      <div className="results-container">
        <span className="result-span-title">{item.project}</span>
      </div>
    );
  };

  return (
    <div className="projects-searcbar-main-title">
      <ReactSearchAutocomplete
        items={allProjects}
        onSelect={handleOnSelect}
        styling={{
          zIndex: 1,
          backgroundColor: "white",
          fontSize: "0.8rem",
        }}
        formatResult={formatResult}
        maxResults={5}
        showIcon={true}
        placeholder="Nom de projet... "
        showNoResults
        showNoResultsText="Pas de résultats."
        showItemsOnFocus={true}
      />
    </div>
  );
}

export default SearchbarMainProjectTitle;
