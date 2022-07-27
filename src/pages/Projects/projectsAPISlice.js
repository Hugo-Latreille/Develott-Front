import { emptySplitApi } from "../../API/APIslice";

const projectsAPISlice = emptySplitApi.injectEndpoints({
	endpoints: (builder) => ({
		getAllProjects: builder.query({
			query: () => "projects",
		}),
	}),
});

export const { useGetAllProjectsQuery } = projectsAPISlice;
