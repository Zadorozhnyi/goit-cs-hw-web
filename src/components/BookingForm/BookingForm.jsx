import { useState } from "react";
import DatePicker from "react-datepicker";
import toast from "react-hot-toast";
import s from "./BookingForm.module.css";

const isEmail = (v) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v);

export default function BookingForm() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    date: null,
    comment: "",
  });
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const update = (key) => (eOrValue) => {
    const value = eOrValue?.target ? eOrValue.target.value : eOrValue;
    setForm((prev) => ({ ...prev, [key]: value }));
    setErrors((prev) => ({ ...prev, [key]: undefined }));
  };

  const validate = () => {
    const next = {};
    if (form.name.trim().length < 2) next.name = "Name is too short";
    if (!isEmail(form.email)) next.email = "Enter a valid email";
    if (!form.date) next.date = "Pick a booking date";
    setErrors(next);
    return Object.keys(next).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validate()) return;
    setIsSubmitting(true);
    // Simulate request — there's no real booking endpoint.
    await new Promise((r) => setTimeout(r, 600));
    setIsSubmitting(false);
    toast.success("Booking request sent! We'll contact you soon.");
    setForm({ name: "", email: "", date: null, comment: "" });
  };

  return (
    <form className={s.form} onSubmit={handleSubmit} noValidate>
      <h3 className={s.title}>Book your campervan now</h3>
      <p className={s.subtitle}>Stay connected! We are always ready to help you.</p>

      <div className={s.fields}>
        <div className={s.field}>
          <input
            type="text"
            placeholder="Name*"
            value={form.name}
            onChange={update("name")}
            aria-invalid={!!errors.name}
            className={s.input}
          />
          {errors.name && <span className={s.error}>{errors.name}</span>}
        </div>

        <div className={s.field}>
          <input
            type="email"
            placeholder="Email*"
            value={form.email}
            onChange={update("email")}
            aria-invalid={!!errors.email}
            className={s.input}
          />
          {errors.email && <span className={s.error}>{errors.email}</span>}
        </div>

        <div className={s.field}>
          <DatePicker
            selected={form.date}
            onChange={update("date")}
            placeholderText="Booking date*"
            minDate={new Date()}
            dateFormat="yyyy-MM-dd"
            className={s.input}
            wrapperClassName={s.datepicker}
          />
          {errors.date && <span className={s.error}>{errors.date}</span>}
        </div>

        <div className={s.field}>
          <textarea
            placeholder="Comment"
            value={form.comment}
            onChange={update("comment")}
            rows={4}
            className={s.textarea}
          />
        </div>
      </div>

      <button type="submit" disabled={isSubmitting} className={s.submit}>
        {isSubmitting ? "Sending..." : "Send"}
      </button>
    </form>
  );
}
