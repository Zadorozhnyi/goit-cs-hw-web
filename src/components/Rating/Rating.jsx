import { FaStar } from "react-icons/fa6";
import clsx from "clsx";
import s from "./Rating.module.css";

export default function Rating({ value, reviewsCount, asLink = false }) {
  return (
    <span className={clsx(s.rating, asLink && s.asLink)}>
      <FaStar className={s.star} />
      <span>
        {Number(value).toFixed(1)}
        {typeof reviewsCount === "number" && ` (${reviewsCount} Reviews)`}
      </span>
    </span>
  );
}
