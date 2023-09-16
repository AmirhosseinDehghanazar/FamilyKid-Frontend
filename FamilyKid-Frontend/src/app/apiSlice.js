import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const accountSlice = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://8115-109-230-65-89.ngrok-free.app/api/schema/swagger-ui",
  }),
  endpoints: (builder) => ({}),
});

export const {} = accountSlice;
