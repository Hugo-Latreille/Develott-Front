import { emptySplitApi } from "../../API/APIslice";

const authAPI = emptySplitApi.injectEndpoints({
	endpoints: (builder) => ({
		getAllProjects: builder.query({
			query: () => "projects",
		}),
	}),
});

export const { useGetAllProjectsQuery } = authAPI;
