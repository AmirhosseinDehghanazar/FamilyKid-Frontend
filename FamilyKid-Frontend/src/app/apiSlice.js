import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const apiSlice = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({ baseUrl: "url" }),
  endpoints: (builder) => ({
    getData: builder.query({
      query: () => "url",
    }),
  }),
});

export const { useGetDataQuery } = apiSlice;
