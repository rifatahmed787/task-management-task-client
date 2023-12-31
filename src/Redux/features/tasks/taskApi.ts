import { apiSlice } from "@/Redux/api/apiSlice";

import { ParamSerialization } from "@/lib/ParamsSerialization";

export const bookApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    //Get All tasks
    getTasks: builder.query({
      query: (args: Record<string, unknown>) => {
        const query = args ? ParamSerialization(args) : "";
        return `/tasks?${query}`;
      },
      providesTags: ["tasks"],
    }),

    // get complete tasks
    getCompleteTasks: builder.query({
      query: (args: Record<string, unknown>) => {
        const query = args ? ParamSerialization(args) : "";
        return `/tasks/complete/${query}`;
      },
      providesTags: ["tasks"],
    }),

    //Get  task details
    getTaskDetails: builder.query({
      query: (taskID) => {
        return `/tasks/${taskID}`;
      },
      providesTags: ["tasks"],
    }),

    //Get All Filtering Items
    getUniqueFilteringItems: builder.query({
      query: () => "/tasks/unique-filter-items",
      providesTags: ["filteringItems"],
    }),

    // Add Task
    addTask: builder.mutation({
      query: ({ data }) => ({
        url: `/tasks`,
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["filteringItems", "tasks"],
    }),

    //delete Task
    deleteTask: builder.mutation({
      query: ({ taskID }) => ({
        url: `/tasks/${taskID}`,
        method: "DELETE",
      }),

      invalidatesTags: ["filteringItems", "tasks"],

      async onQueryStarted({ taskID }, { dispatch, queryFulfilled }) {
        try {
          const { data: task_data } = await queryFulfilled;

          // const patchResult =
          if (task_data) {
            //
          }
          dispatch(
            bookApi.util.updateQueryData("getTaskDetails", taskID, (draft) => {
              return draft.filter(
                (item: {
                  data: {
                    _id: string;
                  };
                }) => item.data?._id != taskID
              );
            })
          );
        } catch {
          //
        }
      },
    }),

    // edit task
    editTask: builder.mutation({
      query: ({ taskID, data }) => ({
        url: `/tasks/${taskID}`,
        method: "PATCH",
        body: { ...data },
      }),
      invalidatesTags: ["filteringItems", "tasks"],

      async onQueryStarted({ taskID, data }, { dispatch, queryFulfilled }) {
        // test part
        if (!data) {
          //
        }

        try {
          const { data: task_data } = await queryFulfilled;

          const updatedTask = task_data;

          // const patchResult =

          dispatch(
            bookApi.util.updateQueryData("getTaskDetails", taskID, (draft) => {
              Object.assign(draft, updatedTask);
            })
          );
        } catch {
          //
        }
      },
    }),

    taskToggle: builder.mutation({
      query: ({ taskID }) => ({
        url: `/tasks/${taskID}`,
        method: "PUT",
      }),
      invalidatesTags: ["filteringItems", "tasks"],

      async onQueryStarted({ taskID }, { dispatch, queryFulfilled }) {
        try {
          const { data: task_data } = await queryFulfilled;

          // const patchResult =
          if (task_data) {
            //
          }
          dispatch(
            bookApi.util.updateQueryData("getTaskDetails", taskID, (draft) => {
              return draft.filter(
                (item: {
                  data: {
                    _id: string;
                  };
                }) => item.data?._id != taskID
              );
            })
          );
        } catch {
          //
        }
      },
    }),
  }),
});

export const {
  useGetUniqueFilteringItemsQuery,
  useAddTaskMutation,
  useDeleteTaskMutation,
  useEditTaskMutation,
  useGetTaskDetailsQuery,
  useGetTasksQuery,
  useGetCompleteTasksQuery,
  useTaskToggleMutation,
} = bookApi;
