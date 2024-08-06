import { USER_URL } from "../constants";
import { apiSlice } from "./apiSlice";

const usersApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    login: builder.mutation({
      query: (data) => ({
        url: `${USER_URL}/login`,
        method: "POST",
        body: data,
      }),
    }),
    userLogout: builder.mutation({
      query: () => ({
        url: `${USER_URL}/logout`,
        method: "POST",
      }),
    }),
    updateUserProfile:builder.mutation({
      query:(data)=>({
        url:`${USER_URL}/profile`,
        method:'PUT',
        body:data,
      }),
    }),
  }),
});

export const { useLoginMutation, useUserLogoutMutation, useUpdateUserProfileMutation} = usersApiSlice;