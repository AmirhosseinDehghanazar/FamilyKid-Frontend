import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const accountSlice = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://3c55-109-230-65-89.ngrok-free.app/accounts/api/",
  }),
  endpoints: (builder) => ({}),
});

export const {} = accountSlice;
