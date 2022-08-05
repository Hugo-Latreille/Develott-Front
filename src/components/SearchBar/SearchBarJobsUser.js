import "./searchbar.scss";
import { ReactSearchAutocomplete } from "react-search-autocomplete";
import { useGetAllJobsQuery } from "../../pages/Projects/projectsAPISlice";
import { useUpdateUserMutation } from "../../pages/Profiles/userAPISlice";

function SearchBarJobsUser({ userId }) {
	const { data: allJobs } = useGetAllJobsQuery();
	const [updateUser] = useUpdateUserMutation();

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
		console.log(item.name);
		updateUser({ id: userId, job_id: item.id });
		// dispatch(setJobData(item.name));
	};

	const handleOnFocus = () => {
		// console.log("Focused");
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
					items={allJobs}
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

export default SearchBarJobsUser;
