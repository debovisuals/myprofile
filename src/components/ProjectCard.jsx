import { motion } from "framer-motion";
import { Play } from "lucide-react";

export default function ProjectCard({ project, onOpen, index }) {
  return (
    <motion.button
      className="project-card"
      type="button"
      onClick={() => onOpen(project)}
      aria-label={`View ${project.title}, ${project.category}`}
      initial={{ opacity: 0, y: 18 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.12 }}
      transition={{ duration: 0.42, delay: (index % 3) * 0.07 }}
    >
      <span className="project-card__image">
        <img
          src={project.image}
          alt={project.imageAlt}
          loading="lazy"
          onError={(event) => {
            event.currentTarget.src = "/images/image-fallback.svg";
          }}
        />
        {project.type === "video" && (
          <span className="project-card__play" aria-hidden="true"><Play size={18} fill="currentColor" /></span>
        )}
      </span>
      <span className="project-card__meta">
        <span className="project-card__category">{project.category}</span>
        <span className="project-card__title">{project.title}</span>
        <span className="project-card__location">{project.location}</span>
      </span>
    </motion.button>
  );
}
