import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
export const api = createApi({
  baseQuery: fetchBaseQuery({
    baseUrl: "http://192.168.1.102:5000/api/",
    prepareHeaders: (headers, { getState, endpoint }) => {
      const { passwordToken, accessToken } = getState()?.auth;
      if (endpoint === "changePassword") {
        headers.set("Authorization", `Bearer ${passwordToken}`);
      }else if(accessToken && endpoint.toLowerCase().includes("challan")){
        console.log({ accessToken })
        headers.set("Authorization", `Bearer ${accessToken}`)
      }
      return headers;
    },
  }),
  tagTypes: ["Citizen", "ChallanRecords"],
  endpoints: (builder) => ({
    getChallanById: builder.query({
      query: (id) => `challan/citizen/records/${id}`,
    }),
    getChallanRecords: builder.query({
      query: () => `challan/citizen/records`,
      providesTags: ["ChallanRecords"],
    }),
    login: builder.mutation({
      query: (body) => ({
        url: "auth/citizen/login",
        body,
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
        console.log({ phone_number });
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
  useGetChallanRecordsQuery,
} = api;
