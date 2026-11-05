import { useState } from "react";
import { motion } from "framer-motion";
import ProjectCard from "../components/ProjectCard.jsx";
import Lightbox from "../components/Lightbox.jsx";
import { clientGalleries } from "../data/clientGalleries.js";

export default function ClientGalleryPage() {
  const galleryId = new URLSearchParams(window.location.search).get("id");
  const gallery = clientGalleries.find((entry) => entry.id === galleryId);
  const [activePhoto, setActivePhoto] = useState(null);

  if (!gallery) {
    return (
      <section className="gallery-page">
        <div className="container gallery-page__empty">
          <p className="eyebrow">Client gallery</p>
          <h1>We couldn’t find this gallery.</h1>
          <p>Check that you have the complete link, or get in touch with DeboVIsuals for help.</p>
          <a className="button button--dark" href="/gallery/">Visit the public gallery</a>
        </div>
      </section>
    );
  }

  const photos = gallery.photos.map((photo) => ({
    ...photo,
    category: gallery.title,
    location: gallery.date,
    description: gallery.description,
    type: "image",
  }));

  return (
    <section className="gallery-page">
      <div className="container">
        <header className="gallery-page__heading">
          <p className="eyebrow">A gallery for {gallery.clientName}</p>
          <h1>{gallery.title}</h1>
          <p>{gallery.description}</p>
          <span className="gallery-page__date">{gallery.date}</span>
        </header>
        <motion.div className="project-grid" layout>
          {photos.map((photo, index) => (
            <ProjectCard project={photo} onOpen={setActivePhoto} index={index} key={photo.id} />
          ))}
        </motion.div>
        <p className="gallery-page__note">
          Anyone with this link can view these photos. Please don’t use this gallery for sensitive content.
        </p>
      </div>
      <Lightbox project={activePhoto} onClose={() => setActivePhoto(null)} />
    </section>
  );
}
