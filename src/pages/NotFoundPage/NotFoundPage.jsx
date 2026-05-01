import { Link } from "react-router-dom";
import s from "./NotFoundPage.module.css";

export default function NotFoundPage() {
  return (
    <div className={s.wrap}>
      <h1 className={s.title}>404</h1>
      <p className={s.text}>Sorry, this page does not exist.</p>
      <Link to="/" className={s.link}>Back to home</Link>
    </div>
  );
}
