import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { getAuthToken, setAuthToken } from "src/utils/async-storage";
import { Alert } from "react-native";
export const api = createApi({
  tagTypes: ["Warden", "Citizen", "Voilations", "ChallanCount", "Records"],
  reducerPath: "authApi",
  baseQuery: fetchBaseQuery({
    baseUrl: `http://192.168.1.102:5000/api`,
    prepareHeaders: (headers, { getState, endpoint }) => {
      const token = getState().auth.token;
      console.log({ token });
      if (!!token) {
        headers.set("Authorization", `Bearer ${token}`);
      }
      return headers;
    }
  }),
  endpoints: builder => ({
    getWardenInfo: builder.query({
      query: () => `/warden/info`
    }),
    getChallanCount: builder.query({
      query: () => `/challan/count`,
      providesTag: ["ChallanCount"]
    }),
    getChallanRecordDetails: builder.query({
      query: ({ id }) => `/challan/warden/records/${id}`
    }),
    getChalllanRecords: builder.query({
      query: ({ paid, page }) => {
        return {
          url: `/challan/warden/records?paid=${paid}`,
          method: "GET"
        };
      },
      providesTags: ["Records"]
    }),
    getVoilationByType: builder.query({
      query: ({ v_type }) => `/voilation?v_type=${v_type}`,
      providesTags: ["Voilations"]
    }),
    getCitizenByCNIC: builder.query({
      query: ({ cnic }) => `/citizen/get-citizen-by-cnic?cnic=${cnic}`,
      providesTags: ["Citizen"]
    }),
    submitChallan: builder.mutation({
      query: challan => ({
        url: "/challan/add",
        method: "POST",
        body: challan
      }),
      invalidatesTags: ["ChallanCount", "Records"]
    }),
    checkUserExists: builder.mutation({
      query: ({ email }) => {
        console.log({ email });
        return {
          method: "POST",
          url: "/auth/warden/check-user",
          body: {
            email
          }
        };
      },
      providesTags: ["Warden"]
    }),
    checkToken: builder.mutation({
      query: ({ token }) => ({
        method: "POST",
        url: "/auth/warden/verify-auth",
        headers: {
          Authorization: `Bearer ${token}`
        }
      }),
      providesTags: ["Warden"]
    }),
    signUp: builder.mutation({
      query: user => {
        return {
          url: "/auth/warden/register",
          method: "POST",
          body: user
        };
      }
    }),
    login: builder.mutation({
      query: ({ email, password }) => ({
        url: "/auth/warden/login",
        method: "POST",
        body: {
          email,
          password
        }
      }),
      transformResponse: response => {
        return response.data;
      },
      async onQueryStarted(_, { queryFulfilled }) {
        try {
          const { data, meta } = await queryFulfilled;
          if (data) {
            const token = meta.response.headers.map["authorization"];
            await setAuthToken("login", token);
          }
        } catch (error) {
          Alert.alert("Unauthorized Error", "You are currently unauthorized");
        }
      }
    }),
    forgetPassword: builder.mutation({
      query: ({ email }) => ({
        url: "/auth/warden/forget-password",
        method: "POST",
        body: {
          email
        }
      }),
      transformResponse: (response, meta) => {
        return {
          ...response,
          authToken: meta.response.headers["Authorization"]
        };
      },
      async onQueryStarted(_, { queryFulfilled }) {
        try {
          const { data, meta } = await queryFulfilled;
          const token = meta.response.headers.map["authorization"];
          console.log({ token });
          await setAuthToken("password", token);
        } catch (error) {
          Alert.alert("Unauthorized Error", "You are currently unauthorized");
        }
      }
    }),
    changePassword: builder.mutation({
      query: ({ new_password, confirm_password, headers }) => ({
        url: "/auth/warden/change-password",
        method: "PUT",
        body: {
          password: new_password,
          confirm_password
        },
        headers: {
          Authorization: `Bearer ${headers.authToken}`
        }
      })
    }),
    smsVerification: builder.mutation({
      query: ({ phone_number }) => ({
        url: "/auth/warden/verify-sms",
        method: "POST",
        body: {
          phone_number
        }
      })
    }),
    getProfilePic: builder.query({
      query: id => ({
        method: "GET",
        url: `/image/warden/get/profilepic/${id}`
      })
    })
  })
});

export const {
  useCheckTokenMutation,
  useSignUpMutation,
  useForgetPasswordMutation,
  useChangePasswordMutation,
  useLoginMutation,
  useSmsVerificationMutation,
  useCheckUserExistsMutation,
  useGetCitizenByCNICQuery,
  useGetVoilationByTypeQuery,
  useGetChalllanRecordsQuery,
  useGetChallanRecordDetailsQuery,
  useGetWardenInfoQuery,
  useSubmitChallanMutation,
  useGetProfilePicQuery,
  useGetChallanCountQuery
} = api;
