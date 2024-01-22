import { configureStore } from "@reduxjs/toolkit";
import api from "./api";

const store = configureStore({
  reducer: {
    // ...
    [api.reducerPath]: api.reducer,
  },
  devTools: process.env.NODE_ENV !== "production",
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(api.middleware).concat(),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;