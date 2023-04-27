import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  hoverButtonLogo: false,
  hoverButtonMenu: false,
  hoverButtonTheme: false,
  hoverMenu: false,
  menu: false,
  theme: "",
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
    changeTheme: (state, action) => {
      state.theme = action.payload;
    },
    showMenu: (state, action) => {
      state.menu = action.payload;
    }
  },
});
export const {
  hoverOnOffLogo,
  hoverOnOffMenu,
  hoverOnOffTheme,
  hoverMenu,
  changeTheme,
  showMenu,
} = animateTrigger.actions;
export default animateTrigger.reducer;
