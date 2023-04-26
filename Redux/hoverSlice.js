import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  hoverButton: false,
};
export const hoverSlice = createSlice({
  name: "isHover",
  initialState,
  reducers: {
    hoverOnOff: (state, action) => {
      state.hoverButton = action.payload;
    }
  },
});
export const { hoverOnOff } = hoverSlice.actions;
export default hoverSlice.reducer
