import { emptySplitApi } from "../../API/APIslice";

const authAPI = emptySplitApi.injectEndpoints({
	endpoints: (builder) => ({
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
		githubLogin: builder.query({
			query: () => "login/success",
		}),
		authTest: builder.query({
			query: () => "home",
			keepUnusedDataFor: 1,
		}),
		userLogout: builder.mutation({
			query: () => "user/logout",
		}),
	}),
});

export const {
	useGetAllUsersQuery,
	useCreateUserMutation,
	useUserLoginMutation,
	useAuthTestQuery,
	useGithubLoginQuery,
	useUserLogoutMutation,
} = authAPI;
