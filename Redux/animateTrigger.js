import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  hoverButtonLogo: false,
  hoverButtonMenu: false,
  hoverButtonTheme: false,
  hoverWorkCard: false,
  hoverMenu: false,
  menu: false,
  position: {x: 0, y:0},
  theme: "",
  hoverCursor: false,
};
export const animateTrigger = createSlice({
  name: "animations",
  initialState,
  reducers: {
    hoverOnOffLogo: (state, action) => {
      state.hoverButtonLogo = action.payload;
    },
    hoverOnOffMenu: (state, action) => {
      state.hoverButtonMenu = action.payload;
    },
    hoverOnOffTheme: (state, action) => {
      state.hoverButtonTheme = action.payload;
    },
    hoverMenu: (state, action) => {
      state.hoverMenu = action.payload;
    },
    hoverWorkCard: (state, action) => {
      state.hoverWorkCard = action.payload;
    },
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
  hoverOnOffLogo,
  hoverOnOffMenu,
  hoverOnOffTheme,
  hoverMenu,
  hoverWorkCard,
  changeTheme,
  showMenu,
  changePosition,
  hoverCursor
} = animateTrigger.actions;
export default animateTrigger.reducer;
