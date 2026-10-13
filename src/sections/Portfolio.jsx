import { useState } from "react";
import { motion } from "framer-motion";
import SectionHeading from "../components/SectionHeading.jsx";
import ProjectCard from "../components/ProjectCard.jsx";
import Lightbox from "../components/Lightbox.jsx";
import { projects, projectCategories } from "../data/projects.js";

export default function Portfolio() {
  const [filter, setFilter] = useState("All work");
  const [activeProject, setActiveProject] = useState(null);
  const visibleProjects = projects.filter(
    (project) => filter === "All work" || project.category === filter,
  );

  return (
    <section className="section section--portfolio" id="work">
      <div className="container">
        <SectionHeading
          eyebrow="Selected work"
          title="A collection of moments."
          description="A few favourite frames and stories, gathered from the places and people I have had the joy of working with."
        />
        <div className="portfolio-toolbar">
          <div className="portfolio-filters" role="group" aria-label="Filter projects by category">
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
        <a href="#contact" className="portfolio-more">Have a story in mind? <span>Let’s talk <ArrowIcon /></span></a>
      </div>
      <Lightbox project={activeProject} onClose={() => setActiveProject(null)} />
    </section>
  );
}

function ArrowIcon() {
  return <span aria-hidden="true">↗</span>;
}
