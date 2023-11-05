import { IGetUserDetailsRes } from "@/Types/auth.types";
import { PayloadAction, createSlice } from "@reduxjs/toolkit";

interface IUserState {
  id: string | undefined;
  userName: string | undefined;
  email: string | undefined;
  imageUrl: string | undefined;
}

const initialState: IUserState = {
  id: undefined,
  userName: undefined,
  email: undefined,
  imageUrl: undefined,
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUser: (state, action: PayloadAction<IGetUserDetailsRes>) => {
      const { id, userName, email, imageUrl } = action.payload;
      console.log(action.payload);
      state.id = id;
      state.userName = userName;
      state.email = email;
      state.imageUrl = imageUrl;
    },
    clearUser: (state) => {
      state.id = undefined;
      state.userName = undefined;
      state.email = undefined;
    },
  },
});

// Exporting the action creators
export const { setUser, clearUser } = userSlice.actions;

// Exporting the reducer
export default userSlice.reducer;
