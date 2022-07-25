import "./searchbar.scss";
import { ReactSearchAutocomplete } from "react-search-autocomplete";

import datas from "../../assets/data/technologiesData.json";

function SearchBarJobs() {
  const jobsData = [
    { name: "Developpeur Back-End" },
    { name: "Developpeur Front-End" },
    { name: "Developpeur Mobile" },
    { name: "Developpeur FullStack" },
    { name: "Graphiste" },
    { name: "UX Designer" },
    { name: "DevOps" },
  ];
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
  };

  const handleOnFocus = () => {
    console.log("Focused");
  };

  const formatResult = (item) => {
    return (
      <div className="results-container-projects">
        <span className="result-span-title">{item.name}</span>
      </div>
    );
  };

  return (
    <div className="input-container">
      <div>
        <ReactSearchAutocomplete
          showItemsOnFocus={true}
          autoFocus={true}
          items={jobsData}
          onSearch={handleOnSearch}
          onHover={handleOnHover}
          onSelect={handleOnSelect}
          onFocus={handleOnFocus}
          styling={{
            zIndex: 1,
          }}
          formatResult={formatResult}
          //   maxResults={5}
          showIcon={true}
          placeholder="Developpeur Back-End, UX-UI Designer, devOps... "
          showNoResults
          showNoResultsText="Pas de résultats."
        />
      </div>
    </div>
  );
}

export default SearchBarJobs;
