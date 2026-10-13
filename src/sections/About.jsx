import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { siteConfig } from "../config/siteConfig.js";

export default function About() {
  return (
    <section className="section section--about" id="about">
      <div className="container about-grid">
        <motion.div
          className="about-image"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <img
            src="/images/profile/Hero%202.jpg"
            alt="Portrait of DeboVIsuals"
            loading="lazy"
            onError={(event) => {
              event.currentTarget.src = "/images/image-fallback.svg";
            }}
          />
          <span>BEHIND THE LENS</span>
        </motion.div>
        <div className="about-copy">
          <p className="eyebrow">A little about me</p>
          <h2>Looking closer.<br /><em>Seeing further.</em></h2>
          <p className="about-lead">DeboVIsuals brings photography, aerial imagery and film together to tell visual stories.</p>
          <p>
            Replace this introduction with a few words about your background, creative approach and the perspective you bring to each project.
          </p>
          <a className="text-link" href="#contact">Let’s make something meaningful <ArrowUpRight size={16} /></a>
          <span className="about-signoff">{siteConfig.brand}</span>
        </div>
      </div>
    </section>
  );
}
