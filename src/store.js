import { configureStore } from "@reduxjs/toolkit";
import UserReducer from "../src/redux/userSlice";
export const store = configureStore({
  reducer: {
    user: UserReducer,
  },
});
