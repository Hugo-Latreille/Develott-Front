import "./searchbar.scss";
import { ReactSearchAutocomplete } from "react-search-autocomplete";
import { useSelector } from "react-redux";

import {
	useGetAllJobsQuery,
	usePostProjectJobMutation,
} from "../../pages/Projects/projectsAPISlice";

function SearchBarJobs() {
	const { projectId } = useSelector((state) => state.createProject);
	const { data: allJobs } = useGetAllJobsQuery();
	const [postProjectJob] = usePostProjectJobMutation();

	const handleOnSelect = (item) => {
		// the item selected
		// console.log(item);
		postProjectJob({ id: projectId, job: item.name });
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
					onSelect={handleOnSelect}
					styling={{
						zIndex: 1,
					}}
					formatResult={formatResult}
					//   maxResults={5}
					showIcon={true}
					placeholder="Développeur Back-End, UX-UI Designer, devOps... "
					showNoResults
					showNoResultsText="Pas de résultats."
				/>
			</div>
		</div>
	);
}

export default SearchBarJobs;
