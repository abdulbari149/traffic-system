import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
export const api = createApi({
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:5000/api",
    prepareHeaders: (headers, { getState, endpoint }) => {
      const token = localStorage.getItem("token");
      if (!!token && endpoint.toLowerCase().includes("warden")) {
        headers.set("Authorization", `Bearer ${token}`);
      }

      return headers;
    }
  }),

  tagTypes: [
    "Admin",
    "WardenApproval",
    "AssignWardens",
    "ProfilePic",
    "ProfileDetails",
    "Voilations",
    "WardenDecline"
  ],
  endpoints: (builder) => ({
    approveWarden: builder.mutation({
      query: (id) => ({
        url: "/warden/authorize",
        method: "PUT",
        body: {
          wardenId: id
        }
      }),
      invalidatesTags: ["WardenApproval"]
    }),
    declineWarden: builder.mutation({
      query: (id) => ({
        url: "/warden/decline",
        method: "PUT",
        body: {
          wardenId: id
        }
      }),
      invalidatesTags: ["DeclineWarden", "AssignWardens"]
    }),
    undoWarden: builder.mutation({
      query: (id) => ({
        url: "/warden/undo",
        method: "PUT",
        body: {
          wardenId: id
        }
      }),
      invalidatesTags: ["DeclineWarden", "WardenApproval"]
    }),
    deleteWarden: builder.mutation({
      query: (id) => ({
        url: "/warden/delete",
        method: "DELETE",
        body: {
          wardenId: id
        }
      }),
      invalidatesTags: ["DeclineWarden", "WardenApproval"]
    }),
    editVoilationPrice: builder.mutation({
      query: (body) => ({
        method: "POST",
        url: "/voilation/update-price",
        body
      }),
      invalidatesTags: ["Voilations"]
    }),
    addVoilation: builder.mutation({
      query: (body) => ({
        method: "POST",
        url: "/voilation",
        body
      }),
      invalidatesTags: ["Voilations"]
    }),
    getVoilations: builder.query({
      query: () => `/voilation`,
      providesTags: ["Voilations"]
    }),
    getWardenImages: builder.query({
      query: (id) => `/image/warden/get/${id}`
    }),
    getProfileDetails: builder.query({
      query: (id) => `/warden/approval/${id}`,
      providesTag: ["ProfileDetails"]
    }),
    getProfilePic: builder.query({
      query: (id) => `/image/warden/get/profilepic/${id}`,
      providesTags: ["Profile"]
    }),
    getWardenDeclineList: builder.query({
      query: () => "/warden/approval?status=decline",
      providesTags: ["WardenDecline"]
    }),
    getWardenListForApproval: builder.query({
      query: (status) => `/warden/approval?status=uncheck`,
      providesTags: ["WardenApproval"]
    }),
    assignWardenToAdmin: builder.query({
      query: () => `/warden/assign-approval-request`,
      providesTags: ["AssignWardens"]
    }),
    verifyAuth: builder.mutation({
      query: (token) => {
        return {
          url: "/auth/admin/verify-auth",
          method: "POST",
          headers: {
            authorization: `Bearer ${token}`
          }
        };
      }
    }),

    login: builder.mutation({
      query: (data) => ({
        url: "/auth/admin/login",
        body: data,
        method: "POST"
      }),
      providesTag: ["Admin"]
    }),
    register: builder.mutation({
      query: (data, token) => ({
        url: "auth/admin/create-admin",
        body: data,
        method: "POST",
        headers: {
          Authorization: `Bearer ${token}`
        }
      })
    })
  })
});

export const {
  useLoginMutation,
  useRegisterMutation,
  useVerifyAuthMutation,
  useGetWardenListForApprovalQuery,
  useGetWardenDeclineListQuery,
  useGetProfilePicQuery,
  useGetProfileDetailsQuery,
  useGetWardenImagesQuery,
  useGetVoilationsQuery,
  useEditVoilationPriceMutation,
  useAddVoilationMutation,
  useApproveWardenMutation,
  useDeclineWardenMutation,
  useUndoWardenMutation,
  useDeleteWardenMutation,
  useAssignWardenToAdminQuery,
  useLazyAssignWardenToAdminQuery
} = api;
