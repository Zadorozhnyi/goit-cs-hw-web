import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import toast from "react-hot-toast";

import Filters from "../../components/Filters/Filters.jsx";
import CamperCard from "../../components/CamperCard/CamperCard.jsx";
import Loader from "../../components/Loader/Loader.jsx";

import { getCampers } from "../../redux/campers/operations.js";
import {
  selectCampers,
  selectCampersLoading,
  selectCampersError,
  selectCampersHasMore,
  selectCampersPage,
} from "../../redux/campers/selectors.js";
import { selectFilters } from "../../redux/filters/selectors.js";

import s from "./CatalogPage.module.css";

export default function CatalogPage() {
  const dispatch = useDispatch();
  const items = useSelector(selectCampers);
  const isLoading = useSelector(selectCampersLoading);
  const error = useSelector(selectCampersError);
  const hasMore = useSelector(selectCampersHasMore);
  const page = useSelector(selectCampersPage);
  const filters = useSelector(selectFilters);

  useEffect(() => {
    dispatch(getCampers({ page: 1, filters }));
    // Load initial list once on mount; subsequent loads triggered via filters/Load More.
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    if (error) toast.error(error);
  }, [error]);

  const handleApply = (newFilters) => {
    dispatch(getCampers({ page: 1, filters: newFilters }));
  };

  const handleLoadMore = () => {
    dispatch(getCampers({ page: page + 1, filters }));
  };

  return (
    <section className={s.section}>
      <div className={s.layout}>
        <Filters onApply={handleApply} />

        <div className={s.results}>
          {isLoading && items.length === 0 && <Loader />}

          {!isLoading && items.length === 0 && !error && (
            <p className={s.empty}>No campers match your filters. Try changing them.</p>
          )}

          {items.length > 0 && (
            <ul className={s.list}>
              {items.map((c) => (
                <li key={c.id}>
                  <CamperCard camper={c} />
                </li>
              ))}
            </ul>
          )}

          {items.length > 0 && hasMore && (
            <div className={s.loadMoreWrap}>
              <button
                type="button"
                onClick={handleLoadMore}
                disabled={isLoading}
                className={s.loadMore}
              >
                {isLoading ? "Loading..." : "Load more"}
              </button>
            </div>
          )}

          {isLoading && items.length > 0 && <Loader />}
        </div>
      </div>
    </section>
  );
}
