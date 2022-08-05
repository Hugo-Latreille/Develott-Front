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
		updateUser: builder.mutation({
			query: ({ id, ...patch }) => ({
				url: `user/${id}`,
				method: "PATCH",
				body: patch,
			}),
			invalidatesTags: ["User", "Project"],
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
		addUserRole: builder.mutation({
			query: ({ projectId, ...body }) => ({
				url: `/project/${projectId}/addroletoproject`,
				method: "POST",
				body: body,
			}),
			invalidatesTags: ["User", "Project"],
		}),
		updateUserRole: builder.mutation({
			query: ({ projectId, ...patch }) => ({
				url: `/project/${projectId}/updateparticipantrole`,
				method: "PATCH",
				body: patch,
			}),
			invalidatesTags: ["User", "Project"],
		}),
		deleteUserRole: builder.mutation({
			query: ({ projectId, ...body }) => ({
				url: `/project/${projectId}/deleterolecustomer`,
				method: "DELETE",
				body: body,
			}),
			invalidatesTags: ["User", "Project"],
		}),
	}),
});

export const {
	useGetOneUserQuery,
	useUpdateUserMutation,
	usePostUserTechnoMutation,
	useDeleteUserTechnoMutation,
	useAddUserRoleMutation,
	useUpdateUserRoleMutation,
	useDeleteUserRoleMutation,
} = userAPISlice;
