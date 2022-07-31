import { emptySplitApi } from "../../API/APIslice";
import { changeDate, setNewImg } from "../Project/projectSlice";

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
						// console.log(result);
						const startDate = result.data.project.start_date;
						const endDate = result.data.project.end_date;
						const projectImg = result.data.project.picture;
						dispatch(changeDate({ name: "startDate", value: startDate }));
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
	}),
});

export const {
	useGetAllProjectsQuery,
	useGetOneProjectQuery,
	usePostProjectMutation,
} = projectsAPISlice;
