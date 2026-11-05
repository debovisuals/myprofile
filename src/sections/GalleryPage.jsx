import { useState } from "react";
import { motion } from "framer-motion";
import ProjectCard from "../components/ProjectCard.jsx";
import Lightbox from "../components/Lightbox.jsx";
import { projects, projectCategories } from "../data/projects.js";

export default function GalleryPage() {
  const [filter, setFilter] = useState("All work");
  const [activeProject, setActiveProject] = useState(null);
  const visibleProjects = projects.filter(
    (project) => filter === "All work" || project.category === filter,
  );

  return (
    <section className="gallery-page">
      <div className="container">
        <header className="gallery-page__heading">
          <p className="eyebrow">The gallery</p>
          <h1>Stories, gathered in one place.</h1>
          <p>Explore a selection of photography, aerial work and films by DeboVIsuals.</p>
        </header>
        <div className="portfolio-toolbar">
          <div className="portfolio-filters" role="group" aria-label="Filter gallery by category">
            {projectCategories.map((category) => (
              <button
                className={`filter-button${filter === category ? " is-active" : ""}`}
                type="button"
                key={category}
                aria-pressed={filter === category}
                onClick={() => setFilter(category)}
              >
                {category}
              </button>
            ))}
          </div>
          <span className="portfolio-count">{String(visibleProjects.length).padStart(2, "0")} STORIES</span>
        </div>
        <motion.div className="project-grid" layout>
          {visibleProjects.map((project, index) => (
            <ProjectCard project={project} onOpen={setActiveProject} index={index} key={project.id} />
          ))}
        </motion.div>
        <p className="gallery-page__note">
          Looking for photographs from your session? Use the private gallery link shared with you.
        </p>
      </div>
      <Lightbox project={activeProject} onClose={() => setActiveProject(null)} />
    </section>
  );
}
