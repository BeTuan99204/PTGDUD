import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./counterSlice";

// Cấu hình store và kết nối với reducer
export const store = configureStore({
  reducer: {
    counter: counterReducer,  // Thêm counterSlice vào reducer
  },
});
