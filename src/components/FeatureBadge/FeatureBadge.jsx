import s from "./FeatureBadge.module.css";

export default function FeatureBadge({ icon: Icon, label }) {
  return (
    <span className={s.badge}>
      {Icon && <Icon className={s.icon} aria-hidden="true" />}
      <span>{label}</span>
    </span>
  );
}
