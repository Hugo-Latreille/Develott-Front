import "./searchBarProjects.scss";
import { ReactSearchAutocomplete } from "react-search-autocomplete";
import { useSelector, useDispatch } from "react-redux";

import { setSearchJob } from "./searchbarSlice";

import { useGetAllJobsQuery } from "../../pages/Projects/projectsAPISlice";

function SearchbarMainJobs() {
  const dispatch = useDispatch();

  const { data: allJobs } = useGetAllJobsQuery();

  const handleOnSelect = (item) => {
    // the item selected
    console.log(item);
    dispatch(setSearchJob(item.id));
  };

  const formatResult = (item) => {
    return (
      <div className="results-container">
        <span className="result-span-title">{item.name}</span>
      </div>
    );
  };

  return (
    <div className="projects-searcbar-main-technos">
      <ReactSearchAutocomplete
        items={allJobs}
        onSelect={handleOnSelect}
        styling={{
          zIndex: 1,
          backgroundColor: "white",
          fontSize: "0.8rem",
        }}
        formatResult={formatResult}
        maxResults={5}
        showIcon={true}
        placeholder="Métier... "
        showNoResults
        showNoResultsText="Pas de résultats."
        showItemsOnFocus={true}
      />
    </div>
  );
}

export default SearchbarMainJobs;
