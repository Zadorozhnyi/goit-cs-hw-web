import { useNavigate } from "react-router-dom";
import s from "./HomePage.module.css";

export default function HomePage() {
  const navigate = useNavigate();
  return (
    <section className={s.hero}>
      <div className={s.overlay} />
      <div className={s.content}>
        <h1 className={s.title}>Campers of your dreams</h1>
        <p className={s.subtitle}>
          You can find everything you want in our catalog
        </p>
        <button
          type="button"
          className={s.cta}
          onClick={() => navigate("/catalog")}
        >
          View Now
        </button>
      </div>
    </section>
  );
}
