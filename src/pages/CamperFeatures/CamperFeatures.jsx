import { useOutletContext } from "react-router-dom";
import FeatureBadge from "../../components/FeatureBadge/FeatureBadge.jsx";
import VehicleDetails from "../../components/VehicleDetails/VehicleDetails.jsx";
import BookingForm from "../../components/BookingForm/BookingForm.jsx";
import {
  equipmentOptions,
  transmissionOption,
  engineOption,
} from "../../utils/equipment.js";
import s from "./CamperFeatures.module.css";

export default function CamperFeatures() {
  const camper = useOutletContext();

  const features = [];
  if (camper.transmission) features.push(transmissionOption(camper.transmission));
  if (camper.engine) features.push(engineOption(camper.engine));
  equipmentOptions.forEach((opt) => {
    if (camper[opt.key]) features.push(opt);
  });

  return (
    <div className={s.layout}>
      <div className={s.left}>
        <ul className={s.features}>
          {features.map((f) => (
            <li key={f.key}>
              <FeatureBadge icon={f.icon} label={f.label} />
            </li>
          ))}
        </ul>
        <VehicleDetails camper={camper} />
      </div>
      <div className={s.right}>
        <BookingForm />
      </div>
    </div>
  );
}
