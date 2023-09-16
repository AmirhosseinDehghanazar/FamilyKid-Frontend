import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const accountSlice = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://8115-109-230-65-89.ngrok-free.app/api/schema/swagger-ui",
  }),
  endpoints: (builder) => ({
    registerTeacher: builder.mutation({
      query: (initialValue) => ({
        url: "/accounts/api/register-teacher",
        method: "POST",
        body: initialValue,
      }),
    }),
    registerSupervisor: builder.mutation({
      query: (initialValue) => ({
        url: "/accounts/api/register-supervisor",
        method: "POST",
        body: initialValue,
      }),
    }),
    registerConsultant: builder.mutation({
      query: (initialValue) => ({
        url: "/accounts/api/register-consultant",
        method: "POST",
        body: initialValue,
      }),
    }),
  }),
});

export const {
  useRegisterTeacherMutation,
  useRegisterConsultantMutation,
  useRegisterSupervisorMutation,
} = accountSlice;
