import { emptySplitApi } from "../../API/APIslice";

const projectsAPISlice = emptySplitApi.injectEndpoints({
	endpoints: (builder) => ({
		getAllProjects: builder.query({
			query: () => "projects",
		}),
		getOneProject: builder.query({
			query: (projectId) => `project/${projectId}`,
		}),
	}),
});

export const { useGetAllProjectsQuery, useGetOneProjectQuery } =
	projectsAPISlice;
