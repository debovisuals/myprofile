import { useState } from "react";
import { Check, Copy, Download } from "lucide-react";
import { motion } from "framer-motion";
import ProjectCard from "../components/ProjectCard.jsx";
import Lightbox from "../components/Lightbox.jsx";
import { graduationPhotos } from "../data/graduationGallery.js";

export default function GraduationGalleryPage() {
  const [activePhoto, setActivePhoto] = useState(null);
  const [shareMessage, setShareMessage] = useState("");

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
          <button
            className="button button--dark graduation-gallery__share"
            type="button"
            onClick={copyGalleryLink}
          >
            {shareMessage.startsWith("Gallery link copied") ? <Check size={17} /> : <Copy size={17} />}
            {shareMessage.startsWith("Gallery link copied") ? "Link copied" : "Copy gallery link"}
          </button>
          <span className="graduation-gallery__share-status" role="status" aria-live="polite">
            {shareMessage}
          </span>
        </header>

        <motion.div className="graduation-gallery__grid" layout>
          {graduationPhotos.map((photo, index) => (
            <div className="graduation-photo" key={photo.id}>
              <ProjectCard project={photo} onOpen={setActivePhoto} index={index} />
              {photo.isPlaceholder ? (
                <button
                  className="graduation-photo__download"
                  type="button"
                  disabled
                  title="Add a graduation photo to enable downloads."
                >
                  <Download size={15} aria-hidden="true" />
                  Photo coming soon
                </button>
              ) : (
                <a
                  className="graduation-photo__download"
                  href={photo.image}
                  download={`futa-class-25-${photo.id}.${photo.image.match(/\.(jpe?g|png|webp|gif)$/i)?.[1] || "jpg"}`}
                  aria-label={`Download ${photo.title}`}
                >
                  <Download size={15} aria-hidden="true" />
                  Download photo
                </a>
              )}
            </div>
          ))}
        </motion.div>
        <p className="graduation-gallery__empty-note">
          Graduation photos will appear here as they are added.
        </p>
        <p className="graduation-gallery__credit">Photographs by DeboVIsuals</p>
      </div>
      <Lightbox project={activePhoto} onClose={() => setActivePhoto(null)} />
    </section>
  );
}
