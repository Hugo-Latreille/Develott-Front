import { emptySplitApi } from "../../API/APIslice";

const authAPI = emptySplitApi.injectEndpoints({
	endpoints: (builder) => ({
		getAllUsers: builder.query({
			query: () => "users",
		}),
		createUser: builder.mutation({
			query: ({ firstname, lastname, email, password }) => {
				return {
					url: "user/create",
					method: "POST",
					header: "Content-Type: application/x-www-form-urlencoded",
					body: {
						firstname,
						lastname,
						email,
						password,
					},
				};
			},
		}),
		userLogin: builder.mutation({
			query: ({ email, password }) => {
				return {
					url: "user/login",
					method: "POST",
					// header: "Content-Type: application/x-www-form-urlencoded",
					body: {
						email,
						password,
					},
				};
			},
		}),
	}),
});

export const {
	useGetAllUsersQuery,
	useCreateUserMutation,
	useUserLoginMutation,
} = authAPI;
