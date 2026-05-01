import { FaStar, FaRegStar } from "react-icons/fa";
import s from "./Reviews.module.css";

const Stars = ({ value = 0 }) => {
  const v = Math.max(0, Math.min(5, Math.round(value)));
  return (
    <span className={s.stars} aria-label={`${v} out of 5`}>
      {Array.from({ length: 5 }).map((_, i) =>
        i < v ? (
          <FaStar key={i} className={s.starOn} />
        ) : (
          <FaRegStar key={i} className={s.starOff} />
        )
      )}
    </span>
  );
};

export default function Reviews({ reviews = [] }) {
  if (!reviews.length) {
    return <p className={s.empty}>No reviews yet.</p>;
  }
  return (
    <ul className={s.list}>
      {reviews.map((r, i) => (
        <li key={i} className={s.item}>
          <header className={s.header}>
            <span className={s.avatar} aria-hidden>
              {r.reviewer_name?.[0]?.toUpperCase() || "?"}
            </span>
            <div>
              <p className={s.name}>{r.reviewer_name}</p>
              <Stars value={r.reviewer_rating} />
            </div>
          </header>
          <p className={s.comment}>{r.comment}</p>
        </li>
      ))}
    </ul>
  );
}
