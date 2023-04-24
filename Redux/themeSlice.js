import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  theme: "",
};
export const themeSlice = createSlice({
  name: "themeDisplayed",
  initialState,
  reducers: {
    changeTheme: (state, action) => {
      state.theme = action.payload;
    },
  },
});
export const { changeTheme } = themeSlice.actions;
export default themeSlice.reducer