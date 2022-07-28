import { emptySplitApi } from "../../API/APIslice";
import { changeStartDate } from "../Project/projectSlice";

const projectsAPISlice = emptySplitApi.injectEndpoints({
	endpoints: (builder) => ({
		getAllProjects: builder.query({
			query: () => "projects",
		}),
		getOneProject: builder.query({
			query: (projectId) => `project/${projectId}`,
			async onQueryStarted(arg, { dispatch, queryFulfilled }) {
				queryFulfilled
					.then((result) => {
						console.log(result);
						const startDate = result.data.start_date;
						dispatch(changeStartDate(startDate));
					})
					.catch(({ error }) => {});
			},
		}),
	}),
});

export const { useGetAllProjectsQuery, useGetOneProjectQuery } =
	projectsAPISlice;
