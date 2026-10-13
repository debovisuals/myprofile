import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

export default function ServiceCard({ service, index }) {
  return (
    <motion.a
      className="service-card"
      href="#work"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{ duration: 0.45, delay: index * 0.06 }}
    >
      <img
        src={service.image}
        alt={service.imageAlt}
        loading="lazy"
        onError={(event) => {
          event.currentTarget.src = "/images/image-fallback.svg";
        }}
      />
      <div className="service-card__overlay" />
      <div className="service-card__content">
        <span>0{index + 1} / SERVICE</span>
        <h3>{service.title}</h3>
        <p>{service.description}</p>
        <span className="service-card__link">Explore work <ArrowUpRight size={16} /></span>
      </div>
    </motion.a>
  );
}
