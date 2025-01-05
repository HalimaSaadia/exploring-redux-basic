import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { url } from "inspector";

export const baseApi = createApi({
  reducerPath: "basApi",
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:5000/api" }),
  tagTypes:["task"],
  endpoints: (builder) => ({
    getTasks: builder.query({
      query: () => `/tasks`,
      providesTags:["task"]
    }),
    postTask: builder.mutation({
      query: (taskData) => ({
        url: "/tasks",
        method: "POST",
        body: taskData,
      }),
      invalidatesTags:["task"]
    }),
  }),
});

export const { useGetTasksQuery, usePostTaskMutation } = baseApi;
