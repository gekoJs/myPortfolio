import { configureStore } from "@reduxjs/toolkit";
import animateTrigger from "./animateTrigger";

export const store = configureStore({
  reducer: {
    animations: animateTrigger
  },
});
