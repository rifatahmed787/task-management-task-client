import { createSlice } from "@reduxjs/toolkit";
import { ICurrentModal, IUiState } from "./uiSlice.type";
import { RootState } from "@/Redux/store";

const initialState: IUiState = {
  currentModal: null,
};

const uiSlice = createSlice({
  name: "ui",
  initialState,
  reducers: {
    setCurrentModal(
      state,
      action: {
        payload: ICurrentModal | null;
      }
    ) {
      state.currentModal = action.payload;
    },
  },
});

export const { setCurrentModal } = uiSlice.actions;

export const selectCurrentModal = (state: RootState) => state.ui.currentModal;

export const uiActions = uiSlice.actions;
const uiReducer = uiSlice.reducer;

export default uiReducer;
