export const selectCampers = (state) => state.campers.items;
export const selectCampersPage = (state) => state.campers.page;
export const selectCampersHasMore = (state) => state.campers.hasMore;
export const selectCampersLoading = (state) => state.campers.isLoading;
export const selectCampersError = (state) => state.campers.error;
export const selectCurrentCamper = (state) => state.campers.current;
export const selectCurrentLoading = (state) => state.campers.isCurrentLoading;
export const selectCurrentError = (state) => state.campers.currentError;
