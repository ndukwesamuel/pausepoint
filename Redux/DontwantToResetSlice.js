import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  localremember: null,
  userlogin: "LOGIN",
};

export const DontwantToResetSlice = createSlice({
  name: "DontwantToResetSlice",
  initialState,
  reducers: {
    reset_isOnboardings: (state) => initialState,

    remeberUSerPassword: (state, action) => {
      state.localremember = action.payload; // or action.type, depending on what you need
    },

    authscreensatet: (state, action) => {
      state.userlogin = action.payload;
      // state.localremember = action.payload; // or action.type, depending on what you need
    },
  },
});

// Action creators are generated for each case reducer function
export const { remeberUSerPassword, authscreensatet, reset_isOnboardings } =
  DontwantToResetSlice.actions;
export default DontwantToResetSlice.reducer;
