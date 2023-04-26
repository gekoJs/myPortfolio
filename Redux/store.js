import { configureStore } from "@reduxjs/toolkit";
import themeReducer from "./themeSlice";
import hoverSlice from "./hoverSlice";
export const store = configureStore({
  reducer: {
    themeDisplayed: themeReducer,
    isHover: hoverSlice
  },
});
