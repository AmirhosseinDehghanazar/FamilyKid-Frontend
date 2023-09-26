import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const apiSlice = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:3000/2023/september/week1",
  }),
  tagTypes: ["WEEK1"],
  endpoints: (builder) => ({
    getData: builder.query({
      query: () => "/",
      providesTags: (result, error, arg) =>
        result
          ? [...result.map(({ id }) => ({ type: "WEEK1", id })), "WEEK1"]
          : ["WEEK1"],
    }),
    getDataById: builder.query({
      query: (id) => `/${id}`,
    }),
    updateData: builder.mutation({
      query: (body) => ({
        url: `/${body.id}`,
        method: "PUT",
        body,
      }),
      invalidatesTags: (result, error, arg) => [{ type: "WEEK1", id: arg.id }],
    }),
  }),
});

export const { useGetDataQuery, useUpdateDataMutation, useGetDataByIdQuery } =
  apiSlice;
