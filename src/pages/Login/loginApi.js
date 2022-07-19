import { emptySplitApi } from "../../API/APIslice";

const loginApi = emptySplitApi.injectEndpoints({
	endpoints: (builder) => ({
		getAllUsers: builder.query({
			query: () => "users",
		}),
	}),
});

export const { useGetAllUsersQuery } = loginApi;
