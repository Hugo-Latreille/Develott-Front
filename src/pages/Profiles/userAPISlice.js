import { emptySplitApi } from "../../API/APIslice";
import { setNewUserImg } from "./userProfileSlice";

const userAPISlice = emptySplitApi.injectEndpoints({
	endpoints: (builder) => ({
		getOneUser: builder.query({
			query: (email) => `user/findByEmail/${email}`,
			async onQueryStarted(arg, { dispatch, queryFulfilled }) {
				queryFulfilled
					.then((result) => {
						const userImg = result.data.picture_project;
						dispatch(setNewUserImg(userImg));
					})
					.catch(({ error }) => {});
			},
		}),
	}),
});

export const { useGetOneUserQuery } = userAPISlice;
