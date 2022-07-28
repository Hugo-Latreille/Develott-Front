import { emptySplitApi } from "../../API/APIslice";

const projectsAPISlice = emptySplitApi.injectEndpoints({
	endpoints: (builder) => ({
		getAllProjects: builder.query({
			query: () => "projects",
		}),
		getOneProject: builder.query({
			query: (projectId) => ({ url: `project/${projectId}`, body: projectId }),
		}),
	}),
});

export const { useGetAllProjectsQuery, useGetOneProjectQuery } =
	projectsAPISlice;
