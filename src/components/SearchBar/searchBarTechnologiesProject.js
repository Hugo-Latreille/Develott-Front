import "./searchBarProjects.scss";
import { ReactSearchAutocomplete } from "react-search-autocomplete";
import datas from "../../assets/data/technologiesData.json";
import { useSelector, useDispatch } from "react-redux";
import { setData } from "../../pages/Project/projectSlice";

function SearchBarTechnologiesProject() {
	const technologiesData = useSelector(
		(state) => state.project.technologiesData
	);

	const dispatch = useDispatch();

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
		// the item selected
		// console.log(item);
		console.log(technologiesData);

		const itemAlreadyExist = technologiesData.find(
			(techno) => techno.name === item.name
		);

		if (!itemAlreadyExist) {
			dispatch(setData({ name: "technologiesData", data: item }));
		} else {
			console.log("techno allready add");
		}
	};

	const handleOnFocus = () => {
		console.log("Focused");
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
