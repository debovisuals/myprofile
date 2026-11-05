import { useState } from "react";
import { Check, Copy } from "lucide-react";
import { motion } from "framer-motion";
import ProjectCard from "../components/ProjectCard.jsx";
import Lightbox from "../components/Lightbox.jsx";
import { graduationClients } from "../data/graduationGallery.js";

export default function GraduationGalleryPage() {
  const [activePhoto, setActivePhoto] = useState(null);
  const [shareMessage, setShareMessage] = useState({});

  async function copyGalleryLink(clientId) {
    const url = new URL(window.location.href);
    if (clientId) url.hash = clientId;
    try {
      await navigator.clipboard.writeText(url.href);
      setShareMessage((messages) => ({
        ...messages,
        [clientId || "all"]: "Link copied. Share it with family and friends.",
      }));
    } catch {
      setShareMessage((messages) => ({
        ...messages,
        [clientId || "all"]: "Copy the gallery URL from your browser’s address bar to share it.",
      }));
    }
  }

  return (
    <section className="graduation-gallery">
      <div className="container">
        <header className="graduation-gallery__heading">
          <p className="eyebrow">A graduation celebration</p>
          <h1>FUTA <em>Class 25</em></h1>
          <p className="graduation-gallery__intro">
            Find each graduate’s collection below. Every section has seven photo placeholders that can be
            replaced with that person’s graduation pictures.
          </p>
          <button
            className="button button--dark graduation-gallery__share"
            type="button"
            onClick={() => copyGalleryLink()}
          >
            {shareMessage.all?.startsWith("Link copied") ? <Check size={17} /> : <Copy size={17} />}
            {shareMessage.all?.startsWith("Link copied") ? "Link copied" : "Copy full gallery link"}
          </button>
          <span className="graduation-gallery__share-status" role="status" aria-live="polite">
            {shareMessage.all}
          </span>
        </header>

        <nav className="graduation-gallery__index" aria-label="Jump to a graduate’s gallery">
          {graduationClients.map((client) => (
            <a href={`#${client.id}`} key={client.id}>{client.name}</a>
          ))}
        </nav>

        <div className="graduation-gallery__clients">
          {graduationClients.map((client, clientIndex) => {
            const photos = client.photos.map((photo) => ({
              ...photo,
              category: client.name,
              location: "FUTA Class 25",
              description: `${client.name} · FUTA Class 25 Graduation Set`,
              type: "image",
            }));

            return (
              <section className="graduation-client" id={client.id} key={client.id} aria-labelledby={`${client.id}-title`}>
                <header className="graduation-client__heading">
                  <div>
                    <p className="eyebrow">Graduate {String(clientIndex + 1).padStart(2, "0")}</p>
                    <h2 id={`${client.id}-title`}>{client.name}</h2>
                  </div>
                  <div className="graduation-client__actions">
                    <span className="graduation-client__count">{client.photos.length} photos</span>
                    <button
                      className="button button--outline"
                      type="button"
                      onClick={() => copyGalleryLink(client.id)}
                    >
                      {shareMessage[client.id]?.startsWith("Link copied") ? <Check size={16} /> : <Copy size={16} />}
                      {shareMessage[client.id]?.startsWith("Link copied") ? "Link copied" : "Copy section link"}
                    </button>
                  </div>
                  <span className="graduation-client__status" role="status" aria-live="polite">
                    {shareMessage[client.id]}
                  </span>
                </header>
                <motion.div className="graduation-gallery__grid" layout>
                  {photos.map((photo, photoIndex) => (
                    <ProjectCard
                      project={photo}
                      onOpen={setActivePhoto}
                      index={photoIndex}
                      key={photo.id}
                    />
                  ))}
                </motion.div>
              </section>
            );
          })}
        </div>
        <div className="graduation-gallery__empty-note">
          <p>These are placeholders. Replace them with each graduate’s approved photographs before sharing.</p>
        </div>
        <p className="graduation-gallery__credit">Photographs by DeboVIsuals</p>
      </div>
      <Lightbox
        project={activePhoto}
        onClose={() => setActivePhoto(null)}
      />
    </section>
  );
}
