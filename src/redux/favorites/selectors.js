export const selectFavoriteIds = (state) => state.favorites.ids;
export const selectIsFavorite = (id) => (state) =>
  state.favorites.ids.includes(String(id));
