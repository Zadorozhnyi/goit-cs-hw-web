import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink, Outlet, useParams } from "react-router-dom";
import { FaMapMarkerAlt } from "react-icons/fa";
import clsx from "clsx";

import Loader from "../../components/Loader/Loader.jsx";
import Gallery from "../../components/Gallery/Gallery.jsx";
import Rating from "../../components/Rating/Rating.jsx";

import { getCamperById } from "../../redux/campers/operations.js";
import { clearCurrent } from "../../redux/campers/slice.js";
import {
  selectCurrentCamper,
  selectCurrentLoading,
  selectCurrentError,
} from "../../redux/campers/selectors.js";
import { formatPrice } from "../../utils/formatPrice.js";

import s from "./CamperDetailsPage.module.css";

const tabClass = ({ isActive }) => clsx(s.tab, isActive && s.tabActive);

export default function CamperDetailsPage() {
  const { id } = useParams();
  const dispatch = useDispatch();
  const camper = useSelector(selectCurrentCamper);
  const isLoading = useSelector(selectCurrentLoading);
  const error = useSelector(selectCurrentError);

  useEffect(() => {
    dispatch(getCamperById(id));
    return () => {
      dispatch(clearCurrent());
    };
  }, [id, dispatch]);

  if (isLoading) return <Loader fullscreen />;
  if (error) return <p className={s.error}>{error}</p>;
  if (!camper) return null;

  return (
    <article className={s.page}>
      <div className={s.container}>
        <header className={s.header}>
          <h1 className={s.title}>{camper.name}</h1>
          <div className={s.meta}>
            <Rating value={camper.rating} reviewsCount={camper.reviews?.length ?? 0} asLink />
            <span className={s.location}>
              <FaMapMarkerAlt aria-hidden /> {camper.location}
            </span>
          </div>
          <p className={s.price}>€{formatPrice(camper.price)}</p>
        </header>

        <Gallery images={camper.gallery || []} alt={camper.name} />

        <p className={s.desc}>{camper.description}</p>

        <nav className={s.tabs}>
          <NavLink to="features" className={tabClass}>Features</NavLink>
          <NavLink to="reviews" className={tabClass}>Reviews</NavLink>
        </nav>

        <Outlet context={camper} />
      </div>
    </article>
  );
}
