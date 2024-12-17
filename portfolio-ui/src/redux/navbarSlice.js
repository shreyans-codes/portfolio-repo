import { createSlice } from "@reduxjs/toolkit";
import { navbarItemIds } from "../components/CommonNavbar";

const initialState = {
  currentPage: navbarItemIds?.home,
};

export const navbarSlice = createSlice({
  name: "navbarAction",
  initialState,
  reducers: {
    reset: (state) => {
      state.currentPage = navbarItemIds.home;
    },
    changePage: (state, action) => {
      state.currentPage = action.payload;
    },
  },
});

export const { reset, changePage } = navbarSlice.actions;

export default navbarSlice.reducer;
