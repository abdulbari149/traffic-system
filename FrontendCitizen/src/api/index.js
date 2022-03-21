import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const api = createApi({
  baseQuery: fetchBaseQuery({
    baseUrl: "http://192.168.1.192:5000/api/auth/citizen",
  }),
  endpoints: (builder) => ({
    login: builder.mutation({
      query: ({ data }) => ({
        url: "/login",
        body: data,
        method: "POST",
      }),
      async onQueryStarted(_, { queryFulfilled }) {
        const { data, meta } = await queryFulfilled;
        const token = meta.response.headers.map["authorization-token"];
        await setAuthToken("login", token);
      },
    }),
    forgetPassword: builder.mutation({
      query: ({ email }) => ({
        url: "/forget-password",
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
      async onQueryStarted(_, { queryFulfilled }) {
        const { data, meta } = await queryFulfilled;
        const token = meta.response.headers.map["authorization-token"];
        console.log({ token });
        await setAuthToken("password", token);
      },
    }),
    changePassword: builder.mutation({
      query: ({ new_password, confirm_password, headers }) => ({
        url: "/change-password",
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
      query: ({ phone_number }) => ({
        url: "/verify-sms",
        method: "POST",
        body: {
          phone_number,
        },
      }),
    }),
  }),
});

export const { useLoginMutation, useChangePasswordMutation, useSmsVerificationMutation, useForgetPasswordMutation } = api;
