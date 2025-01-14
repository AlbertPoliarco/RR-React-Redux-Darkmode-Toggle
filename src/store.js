import { configureStore } from "@reduxjs/toolkit";
import dataReducer from "./features/dataSlice";
import { logger } from "./features/middleware";

const store = configureStore({
  reducer: {
    data: dataReducer,
  },
  middleware: [logger],
});

export default store;
