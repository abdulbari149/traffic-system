import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
export const api = createApi({
  baseQuery: fetchBaseQuery({
    baseUrl: "https://traffic-system-api.herokuapp.com/api/",
    prepareHeaders: (headers, { getState, endpoint }) => {
      const { passwordToken, accessToken } = getState()?.auth;
      if (endpoint === "changePassword") {
        headers.set("Authorization", `Bearer ${passwordToken}`);
      } else if (accessToken && endpoint.toLowerCase().includes("challan")) {
        headers.set("Authorization", `Bearer ${accessToken}`);
      }
      return headers;
    },
  }),
  tagTypes: ["Citizen", "ChallanRecords"],
  endpoints: (builder) => ({
    payChallan: builder.mutation({
      query: ({ id }) => ({
        url: "challan/pay",
        body: {
          challanId: id,
        },
        method: "POST",
      }),
      invalidatesTags: (result, error, arg) => [
        { type: "ChallanRecords", id: arg.id },
        { type: "ChallanRecords", id: "LIST" },
      ],
    }),
    getChallanById: builder.query({
      query: (id) => `challan/citizen/records/${id}`,
      providesTags: (result, error, arg) => ({
        type: "ChallanRecords",
        id: arg,
      }),
    }),
    getChallanRecords: builder.query({
      query: () => `challan/citizen/records`,
      providesTags: (result, error, arg) => {
        return [{ type: "ChallanRecords", id: "LIST" }];
      },
    }),
    login: builder.mutation({
      query: (data) => ({
        url: "auth/citizen/login",
        body: data,
        method: "POST",
      }),
    }),
    signup: builder.mutation({
      query: (body) => ({
        url: "auth/citizen/register",
        body,
        method: "POST",
      }),
    }),
    forgetPassword: builder.mutation({
      query: (email) => ({
        url: "auth/citizen/forget-password",
        method: "POST",
        body: {
          email,
        },
      }),
    }),
    changePassword: builder.mutation({
      query: (body) => ({
        url: "auth/citizen/change-password",
        method: "PUT",
        body,
      }),
    }),
    smsVerification: builder.mutation({
      query: (phone_number) => {
        return {
          url: "auth/citizen/verify-sms",
          method: "POST",
          body: {
            phone_number,
          },
        };
      },
    }),
    verifyAuth: builder.mutation({
      query: (token) => ({
        url: "auth/citizen/verify-auth",
        method: "POST",
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }),
    }),
  }),
});

export const {
  useLoginMutation,
  useVerifyAuthMutation,
  useChangePasswordMutation,
  useSmsVerificationMutation,
  useForgetPasswordMutation,
  useSignupMutation,
  useGetChallanByIdQuery,
  usePayChallanMutation,
  useGetChallanRecordsQuery,
} = api;
