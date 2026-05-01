import { createSlice } from "@reduxjs/toolkit";

const STORAGE_KEY = "tt-favorites";

const loadIds = () => {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    const parsed = raw ? JSON.parse(raw) : [];
    return Array.isArray(parsed) ? parsed.map(String) : [];
  } catch {
    return [];
  }
};

const saveIds = (ids) => {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(ids));
  } catch {
    // ignore quota / private mode failures
  }
};

const slice = createSlice({
  name: "favorites",
  initialState: { ids: loadIds() },
  reducers: {
    toggleFavorite(state, { payload }) {
      const id = String(payload);
      const idx = state.ids.indexOf(id);
      if (idx >= 0) state.ids.splice(idx, 1);
      else state.ids.push(id);
      saveIds(state.ids);
    },
  },
});

export const { toggleFavorite } = slice.actions;
export default slice.reducer;
