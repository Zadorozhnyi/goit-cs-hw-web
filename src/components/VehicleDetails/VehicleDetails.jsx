import { vehicleDetailKeys } from "../../utils/equipment.js";
import s from "./VehicleDetails.module.css";

export default function VehicleDetails({ camper }) {
  const rows = vehicleDetailKeys
    .map((d) => {
      const raw = camper[d.key];
      if (raw === undefined || raw === null || raw === "") return null;
      const value = d.format ? d.format(raw) : raw;
      return { label: d.label, value };
    })
    .filter(Boolean);

  if (rows.length === 0) return null;

  return (
    <section>
      <h3 className={s.title}>Vehicle details</h3>
      <ul className={s.list}>
        {rows.map((r) => (
          <li key={r.label} className={s.row}>
            <span>{r.label}</span>
            <span className={s.value}>{r.value}</span>
          </li>
        ))}
      </ul>
    </section>
  );
}
