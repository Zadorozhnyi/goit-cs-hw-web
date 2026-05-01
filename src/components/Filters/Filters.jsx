import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import clsx from "clsx";
import { FaMapMarkerAlt } from "react-icons/fa";

import { setFilters, resetFilters } from "../../redux/filters/slice.js";
import { selectFilters } from "../../redux/filters/selectors.js";
import { equipmentOptions, formOptions } from "../../utils/equipment.js";
import s from "./Filters.module.css";

export default function Filters({ onApply }) {
  const dispatch = useDispatch();
  const stored = useSelector(selectFilters);
  const [draft, setDraft] = useState(stored);

  const toggleEquipment = (key) => {
    setDraft((prev) => {
      const has = prev.equipment.includes(key);
      return {
        ...prev,
        equipment: has
          ? prev.equipment.filter((k) => k !== key)
          : [...prev.equipment, key],
      };
    });
  };

  const setForm = (value) => {
    setDraft((prev) => ({ ...prev, form: prev.form === value ? "" : value }));
  };

  const handleSearch = (e) => {
    e.preventDefault();
    dispatch(setFilters(draft));
    onApply?.(draft);
  };

  const handleClear = () => {
    setDraft({ location: "", form: "", equipment: [] });
    dispatch(resetFilters());
    onApply?.({ location: "", form: "", equipment: [] });
  };

  return (
    <aside className={s.aside}>
      <form className={s.form} onSubmit={handleSearch}>
        <label className={s.locationField}>
          <span className={s.label}>Location</span>
          <span className={s.inputWrap}>
            <FaMapMarkerAlt aria-hidden className={s.inputIcon} />
            <input
              type="text"
              className={s.input}
              placeholder="City"
              value={draft.location}
              onChange={(e) =>
                setDraft((prev) => ({ ...prev, location: e.target.value }))
              }
            />
          </span>
        </label>

        <p className={s.heading}>Filters</p>

        <fieldset className={s.group}>
          <legend className={s.groupTitle}>Vehicle equipment</legend>
          <div className={s.optionsGrid}>
            {equipmentOptions.map(({ key, label, icon: Icon }) => {
              const active = draft.equipment.includes(key);
              return (
                <button
                  key={key}
                  type="button"
                  className={clsx(s.option, active && s.optionActive)}
                  onClick={() => toggleEquipment(key)}
                  aria-pressed={active}
                >
                  <Icon className={s.optionIcon} aria-hidden />
                  <span>{label}</span>
                </button>
              );
            })}
          </div>
        </fieldset>

        <fieldset className={s.group}>
          <legend className={s.groupTitle}>Vehicle type</legend>
          <div className={s.optionsGrid}>
            {formOptions.map(({ value, label }) => {
              const active = draft.form === value;
              return (
                <button
                  key={value}
                  type="button"
                  className={clsx(s.option, active && s.optionActive)}
                  onClick={() => setForm(value)}
                  aria-pressed={active}
                >
                  <span>{label}</span>
                </button>
              );
            })}
          </div>
        </fieldset>

        <div className={s.actions}>
          <button type="submit" className={s.searchBtn}>
            Search
          </button>
          <button type="button" onClick={handleClear} className={s.clearBtn}>
            Clear filters
          </button>
        </div>
      </form>
    </aside>
  );
}
