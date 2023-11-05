import { apiSlice } from "../../api/apiSlice";

export const userApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    userGetById: builder.query({
      query: (id: string) => ({
        url: `user/get-userbyid/${id}`,
        method: "GET",
      }),
    }),
  }),
});

export const { useUserGetByIdQuery } = userApi;
