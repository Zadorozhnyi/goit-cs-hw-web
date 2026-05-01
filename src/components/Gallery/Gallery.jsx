import s from "./Gallery.module.css";

export default function Gallery({ images = [], alt }) {
  if (!images.length) return null;
  return (
    <ul className={s.list}>
      {images.slice(0, 4).map((img, i) => {
        const url = typeof img === "string" ? img : img.original || img.thumb;
        return (
          <li key={i} className={s.item}>
            <img src={url} alt={`${alt} photo ${i + 1}`} loading="lazy" />
          </li>
        );
      })}
    </ul>
  );
}
