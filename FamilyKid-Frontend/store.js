import { accountSlice } from "./src/app/apiSlice";
import { configureStore } from "@reduxjs/toolkit";

const store = configureStore({
  reducer: {
    [accountSlice.reducerPath]: accountSlice.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(accountSlice.middleware),
});

export default store;
