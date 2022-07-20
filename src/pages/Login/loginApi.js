import { emptySplitApi } from "../../API/APIslice";

const loginApi = emptySplitApi.injectEndpoints({
	endpoints: (builder) => ({
		getAllUsers: builder.query({
			query: () => "users",
		}),
		createUser: builder.mutation({
			query: ({ firstname, lastname, email, password }) => {
				return {
					url: "user/create",
					method: "POST",
					body: {
						firstname,
						lastname,
						email,
						password,
					},
				};
			},
		}),
	}),
});

export const { useGetAllUsersQuery, useCreateUserMutation } = loginApi;
