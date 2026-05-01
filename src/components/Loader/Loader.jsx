import clsx from "clsx";
import s from "./Loader.module.css";

export default function Loader({ fullscreen = false, label = "Loading..." }) {
  return (
    <div className={clsx(s.wrap, fullscreen && s.full)} role="status" aria-live="polite">
      <span className={s.spinner} />
      <span className={s.srOnly}>{label}</span>
    </div>
  );
}
