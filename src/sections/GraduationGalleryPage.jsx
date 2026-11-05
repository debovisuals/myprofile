import { useState } from "react";
import { Check, Copy, Image as ImageIcon } from "lucide-react";
import { motion } from "framer-motion";
import ProjectCard from "../components/ProjectCard.jsx";
import Lightbox from "../components/Lightbox.jsx";
import { graduationPhotos } from "../data/graduationGallery.js";

export default function GraduationGalleryPage() {
  const [activePhoto, setActivePhoto] = useState(null);
  const [shareMessage, setShareMessage] = useState("");

  const photos = graduationPhotos.map((photo) => ({
    ...photo,
    category: "FUTA Class 25 Graduation",
    location: "FUTA",
    description: "FUTA Class 25 Graduation Set",
    type: "image",
  }));

  async function copyGalleryLink() {
    try {
      await navigator.clipboard.writeText(window.location.href);
      setShareMessage("Gallery link copied. Share it with family and friends.");
    } catch {
      setShareMessage("Copy the gallery URL from your browser’s address bar to share it.");
    }
  }

  return (
    <section className="graduation-gallery">
      <div className="container">
        <header className="graduation-gallery__heading">
          <p className="eyebrow">A graduation celebration</p>
          <h1>FUTA <em>Class 25</em></h1>
          <p className="graduation-gallery__intro">
            A collection celebrating the people, pride and memories of the FUTA Class 25 graduation.
          </p>
          <button className="button button--dark graduation-gallery__share" type="button" onClick={copyGalleryLink}>
            {shareMessage.startsWith("Gallery link copied") ? <Check size={17} /> : <Copy size={17} />}
            {shareMessage.startsWith("Gallery link copied") ? "Link copied" : "Copy gallery link"}
          </button>
          <span className="graduation-gallery__share-status" role="status" aria-live="polite">
            {shareMessage}
          </span>
        </header>

        {photos.length > 0 ? (
          <motion.div className="graduation-gallery__grid" layout>
            {photos.map((photo, index) => (
              <ProjectCard project={photo} onOpen={setActivePhoto} index={index} key={photo.id} />
            ))}
          </motion.div>
        ) : (
          <div className="graduation-gallery__empty">
            <ImageIcon size={28} aria-hidden="true" />
            <h2>Graduation photos coming soon</h2>
            <p>The gallery is being prepared. Check back soon for the FUTA Class 25 graduation set.</p>
          </div>
        )}
        <p className="graduation-gallery__credit">Photographs by DeboVIsuals</p>
      </div>
      <Lightbox project={activePhoto} onClose={() => setActivePhoto(null)} />
    </section>
  );
}
