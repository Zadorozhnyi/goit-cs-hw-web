import { createSlice } from "@reduxjs/toolkit";
import { getCampers, getCamperById } from "./operations.js";

const initialState = {
  items: [],
  page: 1,
  total: 0,
  hasMore: true,
  isLoading: false,
  error: null,
  current: null,
  isCurrentLoading: false,
  currentError: null,
};

const slice = createSlice({
  name: "campers",
  initialState,
  reducers: {
    resetCampers(state) {
      state.items = [];
      state.page = 1;
      state.total = 0;
      state.hasMore = true;
      state.error = null;
    },
    clearCurrent(state) {
      state.current = null;
      state.currentError = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getCampers.pending, (state, { meta }) => {
        state.isLoading = true;
        state.error = null;
        // Reset list when starting a fresh search (page 1) so stale results don't flash.
        if (meta.arg?.page === 1) {
          state.items = [];
          state.total = 0;
          state.hasMore = true;
        }
      })
      .addCase(getCampers.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        const { items, total, page } = payload;
        state.page = page;
        state.total = total;
        state.items = page === 1 ? items : [...state.items, ...items];
        state.hasMore = state.items.length < total;
      })
      .addCase(getCampers.rejected, (state, { payload }) => {
        state.isLoading = false;
        state.error = payload || "Failed to load campers";
      })
      .addCase(getCamperById.pending, (state) => {
        state.isCurrentLoading = true;
        state.currentError = null;
        state.current = null;
      })
      .addCase(getCamperById.fulfilled, (state, { payload }) => {
        state.isCurrentLoading = false;
        state.current = payload;
      })
      .addCase(getCamperById.rejected, (state, { payload }) => {
        state.isCurrentLoading = false;
        state.currentError = payload || "Failed to load camper";
      });
  },
});

export const { resetCampers, clearCurrent } = slice.actions;
export default slice.reducer;
