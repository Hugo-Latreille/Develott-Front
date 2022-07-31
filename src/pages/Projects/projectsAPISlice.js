import { emptySplitApi } from "../../API/APIslice";
import { changeDate, setData, setNewImg } from "../Project/projectSlice";

const projectsAPISlice = emptySplitApi.injectEndpoints({
	endpoints: (builder) => ({
		getAllProjects: builder.query({
			query: () => "projects",
			refetchOnMountOrArgChange: true,
			providesTags: ["Projects"],
			// transformResponse: (response, meta, arg) => response.projects,
		}),
		getOneProject: builder.query({
			query: (projectId) => `project/${projectId}`,

			async onQueryStarted(arg, { dispatch, queryFulfilled }) {
				queryFulfilled
					.then((result) => {
						console.log(result);
						const startDate = result.data.project.start_date;
						const endDate = result.data.project.end_date;
						const projectImg = result.data.project.picture;
						const projectDescription = result.data.project.description;
						dispatch(changeDate({ name: "startDate", value: startDate }));
						dispatch(
							changeDate({ name: "description", value: projectDescription })
						);
						// dispatch(changeDate({ name: "endDate", value: endDate }));
						dispatch(setNewImg(projectImg));
					})
					.catch(({ error }) => {});
			},
		}),
		postProject: builder.mutation({
			query: ({ ...body }) => ({
				url: "project",
				method: "POST",
				body: body,
			}),
			invalidatesTags: ["Projects"],
		}),
		updateProjectDescription: builder.mutation({
			query: ({ id, ...patch }) => ({
				url: `project/${id}`,
				method: "PATCH",
				body: patch,
			}),
		}),
	}),
});

export const {
	useGetAllProjectsQuery,
	useGetOneProjectQuery,
	usePostProjectMutation,
	useUpdateProjectDescriptionMutation,
} = projectsAPISlice;
