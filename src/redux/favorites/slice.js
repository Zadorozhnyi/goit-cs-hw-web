import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  ids: [],
};

const slice = createSlice({
  name: "favorites",
  initialState,
  reducers: {
    toggleFavorite(state, { payload }) {
      const id = String(payload);
      const idx = state.ids.indexOf(id);
      if (idx >= 0) {
        state.ids.splice(idx, 1);
      } else {
        state.ids.push(id);
      }
    },
  },
});

export const { toggleFavorite } = slice.actions;
export default slice.reducer;
