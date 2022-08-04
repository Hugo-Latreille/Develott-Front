import "./searchBarProjects.scss";
import { ReactSearchAutocomplete } from "react-search-autocomplete";
import datas from "../../assets/data/technologiesData.json";
import { usePostProjectTechnoMutation } from "../../pages/Projects/projectsAPISlice";

function SearchBarTechnologiesProject({ technos, projectId }) {
  const [postProjectTechno] = usePostProjectTechnoMutation();

  const handleOnSearch = (string, results) => {
    // onSearch will have as the first callback parameter
    // the string searched and for the second the results.
    // console.log(string, results);
  };

  const handleOnHover = (result) => {
    // the item hovered
    // console.log(result);
  };

  const handleOnSelect = (item) => {
    // postProjectTechno({ id: projectId, techno: item.name });

    const itemAlreadyExist = technos.find((techno) => techno === item.name);
    if (!itemAlreadyExist) {
      // dispatch(setData({ name: "technologiesData", data: item }));
      postProjectTechno({ id: projectId, techno: item.name });
    } else {
      console.log("techno already added");
    }
  };

  const handleOnFocus = () => {
    // console.log("Focused");
  };

  const formatResult = (item, index) => {
    return (
      <div key={index} className="results-container-projects">
        <i className={`devicon-${item.name}-plain colored`}></i>
        <span className="result-span-title">{item.name}</span>
        <span className="result-span-subtitle" style={{ display: "block" }}>
          {item.tags.map((element, index) => (
            <span key={index}>{element} </span>
          ))}
        </span>
      </div>
    );
  };

  // const technologies = datas.filter(
  // 	(element) =>
  // 		element.tags.includes("framework") || element.tags.includes("language")
  // );

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
          maxResults={1}
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
