import { combineReducers } from "@reduxjs/toolkit";
import { apiSlice } from "../api/apiSlice";
import authReducer from "../features/auth/authSlice";
import uiReducer from "../features/ui/uiSlice";

const rootReducer = combineReducers({
  auth: authReducer,
  [apiSlice.reducerPath]: apiSlice.reducer,

  ui: uiReducer,
});

export default rootReducer;
