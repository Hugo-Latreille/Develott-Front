import { emptySplitApi } from "../../API/APIslice";
import { setProjectData } from "../Dashboard/dashboardSlice";
import { changeDate, setNewImg } from "../Project/projectSlice";

const projectsAPISlice = emptySplitApi.injectEndpoints({
	endpoints: (builder) => ({
		getAllProjects: builder.query({
			query: () => "projects",
			providesTags: ["Project"],
			// transformResponse: (response, meta, arg) => response.projects,
		}),
		getAllJobs: builder.query({
			query: () => "jobs",
		}),
		getOneProject: builder.query({
			query: (projectId) => `project/${projectId}`,
			providesTags: ["Project"],
			async onQueryStarted(arg, { dispatch, queryFulfilled }) {
				queryFulfilled
					.then((result) => {
						const startDate = result.data.project.start_date;
						const endDate = result.data.project.end_date;
						const projectImg = result.data.project.picture;
						const projectDescription = result.data.project.description;
						const projectTitle = result.data.project.project;
						const projectExcerpt = result.data.project.excerpt;
						dispatch(changeDate({ name: "startDate", value: startDate }));
						dispatch(
							changeDate({ name: "description", value: projectDescription })
						);
						dispatch(changeDate({ name: "endDate", value: endDate }));
						dispatch(changeDate({ name: "projectTitle", value: projectTitle }));
						dispatch(
							changeDate({ name: "projectExcerpt", value: projectExcerpt })
						);
						dispatch(setNewImg(projectImg));
					})
					.catch(({ error }) => {});
			},
		}),
		getOneProjectComplete: builder.query({
			query: (projectId) => `project/guest/${projectId}`,
			providesTags: ["Project"],
			async onQueryStarted(arg, { dispatch, queryFulfilled }) {
				queryFulfilled
					.then((result) => {
						console.log(result);
						const projectGithub = result.data.url_github_repo;
						const projectDiscord = result.data.url_github_project;
						const projectSlack = result.data.url_slack_server;
						const projectTrello = result.data.url_trello;

						dispatch(
							setProjectData({ name: "projectGithub", value: projectGithub })
						);
						dispatch(
							setProjectData({ name: "projectDiscord", value: projectDiscord })
						);
						dispatch(
							setProjectData({ name: "projectSlack", value: projectSlack })
						);
						dispatch(
							setProjectData({ name: "projectTrello", value: projectTrello })
						);
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
			invalidatesTags: ["Project"],
		}),
		updateProject: builder.mutation({
			query: ({ id, ...patch }) => ({
				url: `project/${id}`,
				method: "PATCH",
				body: patch,
			}),
			invalidatesTags: ["Project"],
		}),
		postProjectJob: builder.mutation({
			query: ({ id, job }) => ({
				url: `project/${id}/addJob`,
				method: "POST",
				body: { job },
			}),
			invalidatesTags: ["Project"],
		}),
		deleteProjectJob: builder.mutation({
			query: ({ id, id_project_has_job }) => ({
				url: `project/${id}/deleteJob`,
				method: "DELETE",
				body: { id_project_has_job },
			}),
			invalidatesTags: ["Project"],
		}),
		postProjectTechno: builder.mutation({
			query: ({ id, techno }) => ({
				url: `project/${id}/techno`,
				method: "POST",
				body: { techno },
			}),
			invalidatesTags: ["Project"],
		}),
		deleteProjectTechno: builder.mutation({
			query: ({ id, techno }) => ({
				url: `project/${id}/techno`,
				method: "DELETE",
				body: { techno },
			}),
			invalidatesTags: ["Project"],
		}),
	}),
});

export const {
	useGetAllProjectsQuery,
	useGetAllJobsQuery,
	useGetOneProjectQuery,
	usePostProjectMutation,
	useUpdateProjectMutation,
	usePostProjectJobMutation,
	useDeleteProjectJobMutation,
	usePostProjectTechnoMutation,
	useDeleteProjectTechnoMutation,
	useGetOneProjectCompleteQuery,
} = projectsAPISlice;
