import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { logOut, setCredentials } from "../pages/Login/authSlice";

const baseQuery = fetchBaseQuery({
	baseUrl: "http://localhost:3001/v1/",
	credentials: "include",
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
	if (result?.error?.originalStatus === 403) {
		console.log("on envoie le refresh token");
		//envoyer le refresh token pour renouveler l'access token
		const refreshResult = await baseQuery(
			"/user/refreshToken",
			api,
			extraOptions
		);
		console.log(refreshResult);
		if (refreshResult?.data) {
			const userId = api.getState().auth.userId;
			//on enregistre le nouveau token
			api.dispatch(setCredentials({ ...refreshResult.data, userId }));
			// On relance la query originale avec le nouvel access token
			result = await baseQuery(args, api, extraOptions);
		} else {
			api.dispatch(logOut());
		}
		return result;
	}
};

export const emptySplitApi = createApi({
	baseQuery: baseQueryWithReauth,
	endpoints: (builder) => ({}),
});
