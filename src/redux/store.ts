import { configureStore } from "@reduxjs/toolkit";
import dataPoster from "./dataPoster";

export const store = configureStore({
  reducer: {
  dataPoster: dataPoster,
  },
  devTools: process.env.NODE_ENV !== "production",
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
