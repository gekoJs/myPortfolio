import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  menu: false,
  position: {x: 0, y:0},
  theme: "",
  hoverCursor: false,
};
export const animateTrigger = createSlice({
  name: "animations",
  initialState,
  reducers: {
    changeTheme: (state, action) => {
      state.theme = action.payload;
    },
    showMenu: (state, action) => {
      state.menu = action.payload;
    },
    changePosition: (state, action) => {
      state.position = action.payload;
    },
    hoverCursor: (state, action) => {
      state.hoverCursor = action.payload;
    }
  },
});
export const {
  changeTheme,
  showMenu,
  changePosition,
  hoverCursor
} = animateTrigger.actions;
export default animateTrigger.reducer;
