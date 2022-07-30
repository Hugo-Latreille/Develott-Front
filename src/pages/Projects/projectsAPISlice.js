import { emptySplitApi } from "../../API/APIslice";
import { changeDate, setNewImg } from "../Project/projectSlice";

const projectsAPISlice = emptySplitApi.injectEndpoints({
	endpoints: (builder) => ({
		getAllProjects: builder.query({
			query: () => "homeproject",
			// transformResponse: (response, meta, arg) => response.projects,
		}),
		getOneProject: builder.query({
			query: (projectId) => `project/${projectId}`,
			async onQueryStarted(arg, { dispatch, queryFulfilled }) {
				queryFulfilled
					.then((result) => {
						console.log(result);
						const startDate = result.data.start_date;
						const endDate = result.data.end_date;
						const projectImg = result.data.picture_project;
						dispatch(changeDate({ name: "startDate", value: startDate }));
						dispatch(changeDate({ name: "endDate", value: endDate }));
						dispatch(setNewImg(projectImg));
					})
					.catch(({ error }) => {});
			},
		}),
	}),
});

export const { useGetAllProjectsQuery, useGetOneProjectQuery } =
	projectsAPISlice;
