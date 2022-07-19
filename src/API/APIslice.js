import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const emptySplitApi = createApi({
	baseQuery: fetchBaseQuery({
		baseUrl: "https://62d5952d15ad24cbf2ca1122.mockapi.io/api/v1/",
	}),
	endpoints: () => ({}),
});
