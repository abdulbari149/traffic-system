import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { setAuthToken } from "src/utils/async-storage";

export const api = createApi({
  tagTypes: ["Warden"],
  reducerPath: "authApi",
  baseQuery: fetchBaseQuery({
    baseUrl: `http://192.168.1.102:5000/api/auth/warden`,
  }),
  endpoints: (builder) => ({
    checkUserExists: builder.mutation({
      query: ({ email }) => {
        console.log({ email })
        return {
        method: "POST",
        url: "/check-user",
        body: {
          email,
        },
      
      }},
      providesTags: ["Warden"]
    }),
    checkToken: builder.mutation({
      query: ({ token }) => ({
        method: "POST",
        url: "/verify-auth",
        headers: {
          "Authorization-Token": `Bearer ${token}`,
        },
      }),
    }),
    signUp: builder.mutation({
      query: (user) => {
        console.log({ user })
        return {
        url: "/register",
        method: "POST",
        body: user,
      }},
    }),
    login: builder.mutation({
      query: ({ email, password }) => ({
        url: "/login",
        method: "POST",
        body: {
          email,
          password,
        },
      }),
      transformResponse: (response) => {
        return response.data;
      },
      async onQueryStarted(_, { queryFulfilled }) {
        
        try {
          const { data, meta } = await queryFulfilled;
          if(data) {
            const token = meta.response.headers.map["authorization-token"];
            await setAuthToken("login", token);
          }

        } catch(error) {
        }
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

export const {
  useCheckTokenMutation,
  useSignUpMutation,
  useForgetPasswordMutation,
  useChangePasswordMutation,
  useLoginMutation,
  useSmsVerificationMutation,
  useCheckUserExistsMutation
} = api;
