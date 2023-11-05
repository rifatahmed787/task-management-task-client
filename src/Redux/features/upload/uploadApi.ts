import { apiSlice } from "@/Redux/api/apiSlice";

export const uploadApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    uploder: builder.mutation({
      query: ({ data }) => ({
        url: "/upload/imageupload",
        method: "POST",
        body: data,
      }),
    }),
  }),
});

export const { useUploderMutation } = uploadApi;
