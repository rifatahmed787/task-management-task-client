import { apiSlice } from "@/Redux/api/apiSlice";
import { userLoggedIn } from "./authSlice";
import Cookies from "universal-cookie";

const cookies = new Cookies();

export const authAPi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    // register
    register: builder.mutation({
      query: ({ data }) => ({
        url: "/auth/signup",
        method: "POST",
        body: { ...data },
      }),

      async onQueryStarted(arg, { queryFulfilled, dispatch }) {
        try {
          const result = await queryFulfilled;
          console.log("the query result", result);
          cookies.set(
            "auth_details",
            JSON.stringify({
              isLoggedIn: true,
              user: result.data.data.user_details,
              accessToken: result.data.data.accessToken,
            }),
            { path: "/", maxAge: 6000 }
          );
          dispatch(
            userLoggedIn({
              isLoggedIn: true,
              user: result.data.data.user_details,
              accessToken: result.data.data.accessToken,
            })
          );
        } catch (error) {
          //do nothing
          console.log({ arg });
        }
      },
    }),

    // log in
    login: builder.mutation({
      query: ({ data }) => ({
        url: "/auth/login",
        method: "POST",
        body: data,
      }),
      async onQueryStarted(arg, { queryFulfilled, dispatch }) {
        try {
          const result = await queryFulfilled;

          cookies.set(
            "auth_details",
            JSON.stringify({
              isLoggedIn: true,
              user: result.data.data.user_details,
              accessToken: result.data.data.accessToken,
            }),
            { path: "/", maxAge: 6000 }
          );
          dispatch(
            userLoggedIn({
              isLoggedIn: true,
              user: result.data.data.user_details,
              accessToken: result.data.data.accessToken,
            })
          );
        } catch (error) {
          //do nothing
          console.log({ arg });
        }
      },
    }),
  }),
});

export const { useRegisterMutation, useLoginMutation } = authAPi;
