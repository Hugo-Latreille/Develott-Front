import { emptySplitApi } from "../../API/APIslice";
import { setNewUserImg } from "./userProfileSlice";

const userAPISlice = emptySplitApi.injectEndpoints({
	endpoints: (builder) => ({
		getOneUser: builder.query({
			query: (email) => `user/findByEmail/${email}`,
			providesTags: ["User"],
			async onQueryStarted(arg, { dispatch, queryFulfilled }) {
				queryFulfilled
					.then((result) => {
						const userImg = result.data.picture_project;
						dispatch(setNewUserImg(userImg));
					})
					.catch(({ error }) => {});
			},
		}),
		updateProject: builder.mutation({
			query: ({ id, ...patch }) => ({
				url: `user/${id}`,
				method: "PATCH",
				body: patch,
			}),
			invalidatesTags: ["User"],
		}),
		postUserTechno: builder.mutation({
			query: ({ id, techno }) => ({
				url: `user/${id}/techno`,
				method: "POST",
				body: { techno },
			}),
			invalidatesTags: ["User"],
		}),
		deleteUserTechno: builder.mutation({
			query: ({ id, techno }) => ({
				url: `user/${id}/techno`,
				method: "DELETE",
				body: { techno },
			}),
			invalidatesTags: ["User"],
		}),
	}),
});

export const {
	useGetOneUserQuery,
	useUpdateProjectMutation,
	usePostUserTechnoMutation,
	useDeleteUserTechnoMutation,
} = userAPISlice;
