import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { FaHeart, FaRegHeart, FaMapMarkerAlt } from "react-icons/fa";
import clsx from "clsx";

import Rating from "../Rating/Rating.jsx";
import FeatureBadge from "../FeatureBadge/FeatureBadge.jsx";
import { toggleFavorite } from "../../redux/favorites/slice.js";
import { selectIsFavorite } from "../../redux/favorites/selectors.js";
import { formatPrice } from "../../utils/formatPrice.js";
import {
  equipmentOptions,
  transmissionOption,
  engineOption,
  formOptions,
} from "../../utils/equipment.js";
import s from "./CamperCard.module.css";

export default function CamperCard({ camper }) {
  const dispatch = useDispatch();
  const isFav = useSelector(selectIsFavorite(camper.id));

  const cover = camper.gallery?.[0];
  const coverUrl =
    typeof cover === "string" ? cover : cover?.thumb || cover?.original;

  const reviewsCount = camper.reviews?.length ?? 0;

  const features = [];
  if (camper.transmission) features.push(transmissionOption(camper.transmission));
  if (camper.engine) features.push(engineOption(camper.engine));
  equipmentOptions.forEach((opt) => {
    if (camper[opt.key]) features.push(opt);
  });
  // Show form as a badge too
  if (camper.form) {
    const label = formOptions.find((o) => o.value === camper.form)?.label;
    if (label) features.push({ key: `form-${camper.form}`, label });
  }

  return (
    <article className={s.card}>
      {coverUrl && (
        <div className={s.cover}>
          <img src={coverUrl} alt={camper.name} loading="lazy" />
        </div>
      )}

      <div className={s.body}>
        <header className={s.header}>
          <h3 className={s.title}>{camper.name}</h3>
          <div className={s.priceRow}>
            <span className={s.price}>€{formatPrice(camper.price)}</span>
            <button
              type="button"
              className={clsx(s.favBtn, isFav && s.favActive)}
              onClick={() => dispatch(toggleFavorite(camper.id))}
              aria-label={isFav ? "Remove from favorites" : "Add to favorites"}
              aria-pressed={isFav}
            >
              {isFav ? <FaHeart /> : <FaRegHeart />}
            </button>
          </div>
        </header>

        <div className={s.meta}>
          <Rating value={camper.rating} reviewsCount={reviewsCount} asLink />
          <span className={s.location}>
            <FaMapMarkerAlt aria-hidden /> {camper.location}
          </span>
        </div>

        <p className={s.desc}>{camper.description}</p>

        <ul className={s.features}>
          {features.slice(0, 8).map((f) => (
            <li key={f.key}>
              <FeatureBadge icon={f.icon} label={f.label} />
            </li>
          ))}
        </ul>

        <Link
          to={`/catalog/${camper.id}`}
          target="_blank"
          rel="noopener noreferrer"
          className={s.cta}
        >
          Show more
        </Link>
      </div>
    </article>
  );
}
