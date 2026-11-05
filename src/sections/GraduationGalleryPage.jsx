import { useState } from "react";
import { ArrowLeft, Check, Copy, Download } from "lucide-react";
import { motion } from "framer-motion";
import ProjectCard from "../components/ProjectCard.jsx";
import Lightbox from "../components/Lightbox.jsx";
import { graduationClients } from "../data/graduationGallery.js";

export default function GraduationGalleryPage() {
  const [activePhoto, setActivePhoto] = useState(null);
  const [shareMessage, setShareMessage] = useState("");
  const selectedClientId = new URLSearchParams(window.location.search).get("client");
  const selectedClient = graduationClients.find((client) => client.id === selectedClientId);

  async function copyGalleryLink(clientId) {
    const url = new URL(window.location.href);
    if (clientId) {
      url.searchParams.set("client", clientId);
    } else {
      url.searchParams.delete("client");
    }
    url.hash = "";
    try {
      await navigator.clipboard.writeText(url.href);
      setShareMessage("Link copied. Share it with family and friends.");
    } catch {
      setShareMessage("Copy the gallery URL from your browser’s address bar to share it.");
    }
  }

  function renderPhotos(client) {
    const photos = client.photos.map((photo) => ({
      ...photo,
      category: client.name,
      location: "FUTA Class 25",
      description: `${client.name} · FUTA Class 25 Graduation Set`,
      type: "image",
    }));

    return (
      <motion.div className="graduation-gallery__grid" layout>
        {photos.map((photo, photoIndex) => (
          <div className="graduation-photo" key={photo.id}>
            <ProjectCard
              project={photo}
              onOpen={setActivePhoto}
              index={photoIndex}
            />
            {photo.isPlaceholder ? (
              <button
                className="graduation-photo__download"
                type="button"
                disabled
                title="Add this graduate’s photo to enable downloads."
              >
                <Download size={15} aria-hidden="true" />
                Add photo to enable download
              </button>
            ) : (
              <a
                className="graduation-photo__download"
                href={photo.image}
                download={`${client.id}-${photo.id}.${photo.image.match(/\.(jpe?g|png|webp|gif)$/i)?.[1] || "jpg"}`}
                aria-label={`Download ${photo.title} for ${client.name}`}
              >
                <Download size={15} aria-hidden="true" />
                Download photo
              </a>
            )}
          </div>
        ))}
      </motion.div>
    );
  }

  return (
    <section className="graduation-gallery">
      <div className="container">
        <header className="graduation-gallery__heading">
          <p className="eyebrow">{selectedClient ? "A graduate’s collection" : "A graduation celebration"}</p>
          <h1>FUTA <em>Class 25</em></h1>
          <p className="graduation-gallery__intro">
            {selectedClient
              ? `Graduation portraits and memories for ${selectedClient.name}.`
              : "Choose a graduate to view their individual collection and share their page."}
          </p>
          <div className="graduation-gallery__heading-actions">
            {selectedClient && (
              <a className="button button--outline" href="/futa-class-25/">
                <ArrowLeft size={16} aria-hidden="true" />
                All graduates
              </a>
            )}
            <button
              className="button button--dark graduation-gallery__share"
              type="button"
              onClick={() => copyGalleryLink(selectedClient?.id)}
            >
              {shareMessage.startsWith("Link copied") ? <Check size={17} /> : <Copy size={17} />}
              {shareMessage.startsWith("Link copied") ? "Link copied" : "Copy page link"}
            </button>
          </div>
          <span className="graduation-gallery__share-status" role="status" aria-live="polite">{shareMessage}</span>
        </header>

        {selectedClient ? (
          <section className="graduation-client" aria-labelledby={`${selectedClient.id}-title`}>
            <header className="graduation-client__heading">
              <div>
                <p className="eyebrow">FUTA Class 25 graduate</p>
                <h2 id={`${selectedClient.id}-title`}>{selectedClient.name}</h2>
              </div>
              <span className="graduation-client__count">{selectedClient.photos.length} photos</span>
            </header>
            {renderPhotos(selectedClient)}
          </section>
        ) : selectedClientId ? (
          <div className="graduation-gallery__empty-note">
            <p>We couldn’t find that graduate’s page. Please check the link or browse all graduates.</p>
            <a className="button button--outline" href="/futa-class-25/">Browse all graduates</a>
          </div>
        ) : (
          <div className="graduation-gallery__clients">
            {graduationClients.map((client, clientIndex) => (
              <article className="graduation-client-card" key={client.id}>
                <div>
                  <p className="eyebrow">Graduate {String(clientIndex + 1).padStart(2, "0")}</p>
                  <h2>{client.name}</h2>
                  <p>{client.photos.length} photos</p>
                </div>
                <div className="graduation-client-card__actions">
                  <a
                    className="button button--dark"
                    href={`/futa-class-25/?client=${encodeURIComponent(client.id)}`}
                  >
                    View gallery
                  </a>
                  <button
                    className="button button--outline graduation-client-card__share"
                    type="button"
                    aria-label={`Copy ${client.name}'s gallery link`}
                    onClick={() => copyGalleryLink(client.id)}
                  >
                    <Copy size={16} aria-hidden="true" />
                    <span>Copy link</span>
                  </button>
                </div>
              </article>
            ))}
          </div>
        )}
        {selectedClient && (
          <div className="graduation-gallery__empty-note">
            <p>Download buttons become active when each placeholder is replaced with an approved photo.</p>
          </div>
        )}
        <p className="graduation-gallery__credit">Photographs by DeboVIsuals</p>
      </div>
      <Lightbox
        project={activePhoto}
        onClose={() => setActivePhoto(null)}
      />
    </section>
  );
}
