import { configureStore } from "@reduxjs/toolkit";
import { apiSlice } from "./api/apiSlice";
import rootReducer from "./RootReducer/rootReducer";

export const store = configureStore({
  reducer: rootReducer,

  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(apiSlice.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
