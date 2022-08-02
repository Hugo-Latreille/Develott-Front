import "./searchBarProjects.scss";
import { ReactSearchAutocomplete } from "react-search-autocomplete";
import datas from "../../assets/data/technologiesData.json";
import { useSelector, useDispatch } from "react-redux";
import { setData } from "../../pages/Profiles/userProfileSlice";
import { usePostUserTechnoMutation } from "../../pages/Profiles/userAPISlice";

function SearchBarTechnologiesUserProfile({ technos, userId }) {
	const [postUserTechno] = usePostUserTechnoMutation();

	// const technologiesData = useSelector(
	// 	(state) => state.userProfile.userTechnologiesData
	// );

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
		const itemAlreadyExist = technos?.find((techno) => techno === item.name);

		if (!itemAlreadyExist) {
			// dispatch(setData({ name: "userTechnologiesData", data: item }));
			postUserTechno({ id: userId, techno: item.name });
		} else {
			console.log("techno already added");
		}
	};

	const handleOnFocus = () => {
		// console.log("Focused");
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

export default SearchBarTechnologiesUserProfile;
