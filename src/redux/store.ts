import { configureStore } from "@reduxjs/toolkit";
import commentsSlice from "./commentsSlice";

export const store = configureStore({
  reducer: {
  allComments: commentsSlice,
  },
  devTools: process.env.NODE_ENV !== "production",
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
