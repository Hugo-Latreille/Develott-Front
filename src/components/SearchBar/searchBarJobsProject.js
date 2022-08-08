import "./searchbar.scss";
import { ReactSearchAutocomplete } from "react-search-autocomplete";
import {
	useGetAllJobsQuery,
	usePostProjectJobMutation,
} from "../../pages/Projects/projectsAPISlice";

function SearchBarJobsProject({ projectId }) {
	const [postProjectJob] = usePostProjectJobMutation();
	const { data: allJobs } = useGetAllJobsQuery();

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
		// console.log(item.name);
		postProjectJob({ id: projectId, job: item.name });
		// dispatch(setData({ name: "jobsData", data: item }));
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

export default SearchBarJobsProject;
