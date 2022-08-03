import "./searchBarProjects.scss";
import { ReactSearchAutocomplete } from "react-search-autocomplete";
import datas from "../../assets/data/technologiesData.json";
import { useSelector, useDispatch } from "react-redux";
import { setTechnologiesData } from "../../pages/Project/createProjectSlice";
import { usePostProjectTechnoMutation } from "../../pages/Projects/projectsAPISlice";

function SearchBarTechnologies() {
  const [postProjectTechno] = usePostProjectTechnoMutation();
  const { projectId, technologiesData } = useSelector(
    (state) => state.createProject
  );
  const dispatch = useDispatch();

  const handleOnSelect = (item) => {
    const itemAlreadyExist = technologiesData.find(
      (techno) => techno === item.name
    );
    if (!itemAlreadyExist) {
      dispatch(setTechnologiesData(item));
      postProjectTechno({ id: projectId, techno: item.name });
    } else {
      console.log("techno already added");
    }
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

  return (
    <div className="input-container-projects">
      <div>
        <ReactSearchAutocomplete
          items={datas}
          onSelect={handleOnSelect}
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

export default SearchBarTechnologies;
