import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
export const api = createApi({
  baseQuery: fetchBaseQuery({
    baseUrl: 'http://192.168.1.102:5000/api',
    prepareHeaders: (headers, { getState, endpoint }) => {
      const token = localStorage.getItem('token')
      if (!!token && endpoint.toLowerCase().includes('warden')) {
        headers.set('Authorization', `Bearer ${token}`)
      }

      return headers
    },
  }),

  tagTypes: [
    'Admin',
    'WardenApproval',
    'ProfilePic',
    'ProfileDetails',
    'Voilations',
  ],
  endpoints: (builder) => ({
    editVoilationPrice: builder.mutation({
      query: (body) => ({
        method: 'POST',
        url: '/voilation/update-price',
        body,
      }),
      invalidatesTags: ['Voilations'],
    }),
    addVoilation: builder.mutation({
      query: (body) => ({
        method: 'POST',
        url: '/voilation',
        body,
      }),
      invalidatesTags: ['Voilations'],
    }),
    getVoilations: builder.query({
      query: () => `/voilation`,
      providesTags: ['Voilations'],
    }),
    getWardenImages: builder.query({
      query: (id) => `/image/warden/get/${id}`,
    }),
    getProfileDetails: builder.query({
      query: (id) => `/warden/approval/${id}`,
      providesTag: ['ProfileDetails'],
    }),
    getProfilePic: builder.query({
      query: (id) => `/image/warden/get/profilepic/${id}`,
      providesTags: ['Profile'],
    }),
    getWardenListForApproval: builder.query({
      query: (status) => `/warden/approval?status=${status}`,
      providesTags: ['WardenApproval'],
    }),
    verifyAuth: builder.mutation({
      query: (token) => {
        return {
          url: '/auth/admin/verify-auth',
          method: 'POST',
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      },
    }),

    login: builder.mutation({
      query: (data) => ({
        url: '/auth/admin/login',
        body: data,
        method: 'POST',
      }),
      providesTag: ['Admin'],
    }),
    register: builder.mutation({
      query: (data) => ({
        url: 'auth/admin/register',
        body: data,
        method: 'POST',
      }),
    }),
  }),
})

export const {
  useLoginMutation,
  useRegisterMutation,
  useVerifyAuthMutation,
  useGetWardenListForApprovalQuery,
  useGetProfilePicQuery,
  useGetProfileDetailsQuery,
  useGetWardenImagesQuery,
  useGetVoilationsQuery,
  useEditVoilationPriceMutation,
  useAddVoilationMutation
} = api
