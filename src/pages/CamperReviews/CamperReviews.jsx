import { useOutletContext } from "react-router-dom";
import Reviews from "../../components/Reviews/Reviews.jsx";
import BookingForm from "../../components/BookingForm/BookingForm.jsx";
import s from "./CamperReviews.module.css";

export default function CamperReviews() {
  const camper = useOutletContext();
  return (
    <div className={s.layout}>
      <div className={s.left}>
        <Reviews reviews={camper.reviews || []} />
      </div>
      <div className={s.right}>
        <BookingForm />
      </div>
    </div>
  );
}
