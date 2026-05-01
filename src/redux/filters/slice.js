import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  location: "",
  form: "",
  equipment: [],
};

const slice = createSlice({
  name: "filters",
  initialState,
  reducers: {
    setFilters(_, { payload }) {
      return { ...payload };
    },
    resetFilters() {
      return initialState;
    },
  },
});

export const { setFilters, resetFilters } = slice.actions;
export default slice.reducer;
