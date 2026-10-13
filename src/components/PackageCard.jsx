import { Check } from "lucide-react";
import WhatsAppButton from "./WhatsAppButton.jsx";
import { packageBookingMessage } from "../utils/whatsapp.js";

export default function PackageCard({ package: packageInfo }) {
  return (
    <article className={`package-card${packageInfo.featured ? " package-card--featured" : ""}`}>
      {packageInfo.featured && <span className="package-card__badge">A favourite</span>}
      <p className="eyebrow">{packageInfo.sample ? "Sample package" : "Package"}</p>
      <h3>{packageInfo.name}</h3>
      <p className="package-card__description">{packageInfo.description}</p>
      <p className="package-card__price">{packageInfo.price}</p>
      <p className="package-card__duration">{packageInfo.duration}</p>
      <ul>
        {packageInfo.deliverables.map((item) => (
          <li key={item}><Check size={16} aria-hidden="true" />{item}</li>
        ))}
      </ul>
      <WhatsAppButton
        message={packageBookingMessage(packageInfo.name)}
        variant={packageInfo.featured ? "dark" : "outline"}
        className="package-card__button"
      >
        Book this package
      </WhatsAppButton>
    </article>
  );
}
