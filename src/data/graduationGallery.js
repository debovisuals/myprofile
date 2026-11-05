const placeholderImage = "/images/image-fallback.svg";

export const graduationClients = Array.from({ length: 10 }, (_, clientIndex) => {
  const number = clientIndex + 1;
  const clientId = `client-${String(number).padStart(2, "0")}`;

  return {
    id: clientId,
    name: `Client ${String(number).padStart(2, "0")}`,
    photos: Array.from({ length: 7 }, (_, photoIndex) => {
      const photoNumber = photoIndex + 1;
      const isTrialPhoto = clientIndex === 0 && photoIndex === 0;

      return {
        id: `${clientId}-photo-${photoNumber}`,
        title: `Photo ${String(photoNumber).padStart(2, "0")}`,
        image: isTrialPhoto
          ? "/images/futa-class-25/client-01-photo-01.jpg"
          : placeholderImage,
        imageAlt: isTrialPhoto
          ? "Client 1 at the FUTA Class 25 graduation"
          : `Placeholder for ${clientId}, photo ${photoNumber}`,
        isPlaceholder: !isTrialPhoto,
      };
    }),
  };
});