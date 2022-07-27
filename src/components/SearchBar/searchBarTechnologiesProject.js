import "./searchBarProjects.scss";
import { ReactSearchAutocomplete } from "react-search-autocomplete";

import datas from "../../assets/data/technologiesData.json";

import { useSelector, useDispatch } from "react-redux";
import { setTechnologiesData } from "../../pages/Project/showProjectSlice";

function SearchBarTechnologiesProject() {
  const technologiesData = useSelector(
    (state) => state.showProject.technologiesData
  );

  const dispatch = useDispatch();

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
    console.log(technologiesData);

    const itemAllreadyExist = technologiesData.find(
      (techno) => techno.name === item.name
    );

    if (!itemAllreadyExist) {
      dispatch(setTechnologiesData(item));
    } else {
      console.log("techno allready add");
    }
  };

  const handleOnFocus = () => {
    console.log("Focused");
  };

  const formatResult = (item) => {
    return (
      <div key={item.name} className="results-container-projects">
        <i className={`devicon-${item.name}-plain colored`}></i>
        <span className="result-span-title">{item.name}</span>
        <span className="result-span-subtitle" style={{ display: "block" }}>
          {item.tags.map((element) => (
            <span key={element}>{element} </span>
          ))}
        </span>
      </div>
    );
  };

  const technologies = datas.filter(
    (element) =>
      element.tags.includes("framework") || element.tags.includes("language")
  );

  return (
    <div className="input-container-projects">
      <div>
        <ReactSearchAutocomplete
          items={datas}
          onSearch={handleOnSearch}
          onHover={handleOnHover}
          onSelect={handleOnSelect}
          onFocus={handleOnFocus}
          styling={{
            zIndex: 1,
            backgroundColor: "white",
          }}
          formatResult={formatResult}
          maxResults={5}
          showIcon={true}
          placeholder="Javascript, PHP, React... "
          showNoResults
          showNoResultsText="Pas de résultats."
          autoFocus={true}
          showItemsOnFocus={true}
        />
      </div>
    </div>
  );
}

export default SearchBarTechnologiesProject;
