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
      providesTags: (result, arg, error) => [
        "WEEK1",
        ...result.map(({ id }) => ({ type: "WEEK1", id })),
      ],
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
      invalidatesTags: (result, arg, error) => [{ type: "WEEK1", id: arg.id }],
    }),
  }),
});

export const { useGetDataQuery, useUpdateDataMutation, useGetDataByIdQuery } =
  apiSlice;
