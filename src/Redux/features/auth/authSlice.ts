import { IUser } from "@/Types/auth.types";
import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

// type
type IState = {
  isLoggedIn: boolean;
  user: IUser | null;
  accessToken: string | undefined;
};

const initialState: IState = {
  isLoggedIn: false,
  user: null,
  accessToken: undefined,
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    userLoggedIn: (state, action: PayloadAction<IState>) => {
      state.isLoggedIn = action.payload.isLoggedIn;
      state.user = action.payload.user;
      state.accessToken = action.payload.accessToken;
    },
    userLoggedOut: (state) => {
      state.isLoggedIn = false;
      state.user = null;
      state.accessToken = undefined;
      window.location.reload();
    },
  },
});

export default authSlice.reducer;
export const { userLoggedIn, userLoggedOut } = authSlice.actions;
