import SectionHeading from "../components/SectionHeading.jsx";
import ServiceCard from "../components/ServiceCard.jsx";
import { services } from "../data/services.js";

export default function Services() {
  return (
    <section className="section section--services" id="services">
      <div className="container">
        <SectionHeading
          eyebrow="What I do"
          title="A perspective for every story."
          description="From intimate portraits to sweeping aerial films, every project is made with intention and a keen eye for the details."
        />
        <div className="service-grid">
          {services.map((service, index) => <ServiceCard service={service} index={index} key={service.id} />)}
        </div>
      </div>
    </section>
  );
}
