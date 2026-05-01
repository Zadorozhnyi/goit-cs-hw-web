import {
  FaWind,
  FaShower,
  FaUtensils,
  FaTv,
  FaSnowflake,
  FaWater,
  FaRadio,
} from "react-icons/fa6";
import { MdMicrowave, MdLocalGasStation } from "react-icons/md";
import { TbAutomaticGearbox, TbManualGearbox } from "react-icons/tb";
import { BsFuelPumpFill } from "react-icons/bs";

// Equipment options (multi-select). Order matters for badge rendering.
export const equipmentOptions = [
  { key: "AC", label: "AC", icon: FaWind },
  { key: "bathroom", label: "Bathroom", icon: FaShower },
  { key: "kitchen", label: "Kitchen", icon: FaUtensils },
  { key: "TV", label: "TV", icon: FaTv },
  { key: "radio", label: "Radio", icon: FaRadio },
  { key: "refrigerator", label: "Refrigerator", icon: FaSnowflake },
  { key: "microwave", label: "Microwave", icon: MdMicrowave },
  { key: "gas", label: "Gas", icon: MdLocalGasStation },
  { key: "water", label: "Water", icon: FaWater },
];

export const transmissionOption = (transmission) => ({
  key: "transmission",
  label: transmission === "automatic" ? "Automatic" : "Manual",
  icon: transmission === "automatic" ? TbAutomaticGearbox : TbManualGearbox,
});

export const engineOption = (engine) => ({
  key: "engine",
  label: engine ? engine[0].toUpperCase() + engine.slice(1) : "",
  icon: BsFuelPumpFill,
});

export const formOptions = [
  { value: "panelTruck", label: "Van" },
  { value: "fullyIntegrated", label: "Fully Integrated" },
  { value: "alcove", label: "Alcove" },
];

export const vehicleDetailKeys = [
  { key: "form", label: "Form", format: (v) => formOptions.find((o) => o.value === v)?.label || v },
  { key: "length", label: "Length" },
  { key: "width", label: "Width" },
  { key: "height", label: "Height" },
  { key: "tank", label: "Tank" },
  { key: "consumption", label: "Consumption" },
];
