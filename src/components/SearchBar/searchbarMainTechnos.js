import "./searchBarProjects.scss";
import { ReactSearchAutocomplete } from "react-search-autocomplete";
import datas from "../../assets/data/technologiesData.json";
import { useDispatch } from "react-redux";

import { setSearchTechnology } from "./searchbarSlice";

function SearchbarMainTechnologies() {
  const dispatch = useDispatch();

  const handleOnSelect = (item) => {
    // the item selected
    console.log(item);
    dispatch(setSearchTechnology(item.name));
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

  return (
    <div className="projects-searcbar-main-technos">
      <ReactSearchAutocomplete
        items={datas}
        onSelect={handleOnSelect}
        styling={{
          zIndex: 1,
          backgroundColor: "white",
          fontSize: "0.8rem",
          borderRadius: "24px 0px 0px 24px;",
        }}
        formatResult={formatResult}
        maxResults={5}
        showIcon={true}
        placeholder="Technologie... "
        showNoResults
        showNoResultsText="Pas de résultats."
      />
    </div>
  );
}

export default SearchbarMainTechnologies;
