import { emptySplitApi } from "../../API/APIslice";

const loginApi = emptySplitApi.injectEndpoints({
	endpoints: (builder) => ({
		getAllUsers: builder.query({
			query: () => "users",
		}),
		createUser: builder.mutation({
			query: ({ username, password }) => {
				return {
					url: "users",
					method: "POST",
					body: {
						username,
						password,
					},
				};
			},
		}),
	}),
});

export const { useGetAllUsersQuery, useCreateUserMutation } = loginApi;
