import { emptySplitApi } from "../../API/APIslice";
import { setCredentials } from "./authSlice";

const authAPI = emptySplitApi.injectEndpoints({
	endpoints: (builder) => ({
		createUser: builder.mutation({
			query: ({ firstname, lastname, email, password, gitHubUsername }) => {
				return {
					url: "user/create",
					method: "POST",
					header: "Content-Type: application/x-www-form-urlencoded",
					body: {
						firstname,
						lastname,
						email,
						password,
						username_gith: gitHubUsername,
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
		forgotPassword: builder.mutation({
			query: ({ email }) => {
				return {
					url: "user/forgotPassword",
					method: "POST",
					body: {
						email,
					},
				};
			},
		}),
		newPassword: builder.mutation({
			query: ({ password, userId }) => {
				return {
					url: "user/newPassword",
					method: "POST",
					body: {
						password,
						userId,
					},
				};
			},
		}),
		githubLogin: builder.query({
			query: () => "login/success",
			async onQueryStarted(arg, { dispatch, queryFulfilled }) {
				queryFulfilled
					.then((result) => {
						console.log(result);
						const accessToken = result.data.accessToken;
						const email = result.data.foundUser.email;
						dispatch(setCredentials({ accessToken, email }));
					})
					.catch(({ error }) => {});
			},
		}),
		authTest: builder.query({
			query: () => "home",
			keepUnusedDataFor: 1,
		}),
		userLogout: builder.mutation({
			query: () => "user/logout",
		}),
		findUserByEmail: builder.query({
			query: (email) => `user/findByEmail/${email}`,
			providesTags: ["User"],
		}),
		findUserById: builder.query({
			query: (id) => `user/findById/${id}`,
			providesTags: ["User"],
		}),
		// getRefreshToken: builder.query({
		// 	query: () => "user/refreshToken",
		// }),
	}),
});

export const {
	useGetAllUsersQuery,
	useCreateUserMutation,
	useUserLoginMutation,
	useAuthTestQuery,
	useGithubLoginQuery,
	useUserLogoutMutation,
	useForgotPasswordMutation,
	useNewPasswordMutation,
	useGetRefreshTokenQuery,
	useFindUserByEmailQuery,
	useFindUserByIdQuery,
} = authAPI;
