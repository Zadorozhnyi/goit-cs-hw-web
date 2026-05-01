import { configureStore } from "@reduxjs/toolkit";

import campersReducer from "./campers/slice.js";
import filtersReducer from "./filters/slice.js";
import favoritesReducer from "./favorites/slice.js";

export const store = configureStore({
  reducer: {
    campers: campersReducer,
    filters: filtersReducer,
    favorites: favoritesReducer,
  },
});
