import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { logOut, setCredentials } from "../pages/Login/authSlice";

const baseQuery = fetchBaseQuery({
	baseUrl: "http://localhost:3002/v1/",
	// baseUrl: "https://develott.herokuapp.com/v1/",

	credentials: "include",
	tagTypes: ["Project", "User"],
	prepareHeaders: (headers, { getState }) => {
		const token = getState().auth.token;
		if (token) {
			headers.set("authorization", `Bearer ${token}`);
		}
		return headers;
	},
});

const baseQueryWithReauth = async (args, api, extraOptions) => {
	let result = await baseQuery(args, api, extraOptions);
	// console.log(result);
	if (result.error && result.error.originalStatus === 403) {
		console.log("on envoie le refresh token");
		//envoyer le refresh token pour renouveler l'access token
		const refreshResult = await baseQuery(
			"user/refreshToken",
			api,
			extraOptions
		);
		console.log("refreshResult", refreshResult);
		if (refreshResult?.data) {
			const email = api.getState().auth.email;
			//on enregistre le nouveau token
			api.dispatch(
				setCredentials({
					accessToken: refreshResult.data.accessToken,
					email: email,
				})
			);
			// On relance la query originale avec le nouvel access token
			result = await baseQuery(args, api, extraOptions);
		} else {
			console.log("401");
			api.dispatch(logOut());
		}
	}
	return result;
};

export const emptySplitApi = createApi({
	baseQuery: baseQueryWithReauth,
	refetchOnMountOrArgChange: true,
	endpoints: (builder) => ({}),
});
