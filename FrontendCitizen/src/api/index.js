import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { setAuthToken } from "../utils/async-storage";

export const api = createApi({
  baseQuery: fetchBaseQuery({
    baseUrl: "http://192.168.1.102:5000/api",
    prepareHeaders: (headers, { getState, endpoint }) => {
      const token = getState().auth?.token;
      if (!!token && !endpoint.includes("auth")) {
      }
      return headers;
    },
  }),
  tagTypes: ["Citizen", "ChallanRecords"],
  endpoints: (builder) => ({
    getChallanById: builder.query({
      query: ({ id }) => `challan/citizen/records/${id}`,
    }),
    getChallanRecords: builder.query({
      query: () => `challan/citizen/records`,
      providesTags: ["ChallanReords"],
    }),
    login: builder.mutation({
      query: (data) => ({
        url: "/auth/citizen/login",
        body: data,
        method: "POST",
      }),
    }),
    register: builder.mutation({
      query: (data) => ({
        url: "auth/citizen/register",
        body: data,
        method: "POST",
      }),
      async onQueryStarted(_, { queryFulfilled }) {
        const { data, meta } = await queryFulfilled;
        console.log(data);
      },
    }),
    forgetPassword: builder.mutation({
      query: (email) => ({
        url: "auth/citizen/forget-password",
        method: "POST",
        body: {
          email,
        },
      }),
      transformResponse: (response, meta) => {
        return {
          ...response,
          authToken: meta.response.headers["Authorization-Token"],
        };
      },
    }),
    changePassword: builder.mutation({
      query: ({ new_password, confirm_password, headers }) => ({
        url: "auth/citizen/change-password",
        method: "PUT",
        body: {
          password: new_password,
          confirm_password,
        },
        headers: {
          "Authorization-Token": `Bearer ${headers.authToken}`,
        },
      }),
    }),
    smsVerification: builder.mutation({
      query: (phone_number) => ({
        url: "/auth/ciitzen/verify-sms",
        method: "POST",
        body: {
          phone_number,
        },
      }),
    }),
  }),
});

export const {
  useLoginMutation,
  useChangePasswordMutation,
  useSmsVerificationMutation,
  useForgetPasswordMutation,
  useRegisterMutation,
  useGetChallanByIdQuery,
  useGetChallanRecordsQuery,
} = api;
