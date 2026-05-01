import { configureStore, combineReducers } from "@reduxjs/toolkit";
import {
  persistReducer,
  persistStore,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";
import storage from "redux-persist/lib/storage";

import campersReducer from "./campers/slice.js";
import filtersReducer from "./filters/slice.js";
import favoritesReducer from "./favorites/slice.js";

const favoritesPersistConfig = {
  key: "tt-favorites",
  storage,
  whitelist: ["ids"],
};

const rootReducer = combineReducers({
  campers: campersReducer,
  filters: filtersReducer,
  favorites: persistReducer(favoritesPersistConfig, favoritesReducer),
});

export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefault) =>
    getDefault({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store);
