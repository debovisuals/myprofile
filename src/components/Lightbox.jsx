import { useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { X } from "lucide-react";

export default function Lightbox({ project, onClose }) {
  useEffect(() => {
    if (!project) return undefined;
    function handleKeyDown(event) {
      if (event.key === "Escape") onClose();
    }
    document.body.classList.add("modal-open");
    window.addEventListener("keydown", handleKeyDown);
    return () => {
      document.body.classList.remove("modal-open");
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [project, onClose]);

  return (
    <AnimatePresence>
      {project && (
        <motion.div
          className="lightbox"
          role="presentation"
          onMouseDown={(event) => {
            if (event.target === event.currentTarget) onClose();
          }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <motion.div
            className="lightbox__panel"
            role="dialog"
            aria-modal="true"
            aria-labelledby="lightbox-title"
            initial={{ y: 14, scale: 0.98 }}
            animate={{ y: 0, scale: 1 }}
            exit={{ y: 14, scale: 0.98 }}
          >
            <button className="lightbox__close" type="button" onClick={onClose} aria-label="Close project">
              <X size={22} />
            </button>
            {project.type === "video" && project.video ? (
              <video
                className="lightbox__media"
                src={project.video}
                poster={project.image}
                controls
                autoPlay
                playsInline
              >
                Your browser does not support video playback.
              </video>
            ) : (
              <img
                className="lightbox__media"
                src={project.image}
                alt={project.imageAlt}
                onError={(event) => {
                  event.currentTarget.src = "/images/image-fallback.svg";
                }}
              />
            )}
            <div className="lightbox__caption">
              <div><p className="eyebrow">{project.category} · {project.location}</p><h2 id="lightbox-title">{project.title}</h2></div>
              <p>{project.description}</p>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
