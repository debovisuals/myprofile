const placeholderImage = "/images/image-fallback.svg";

export const graduationClients = Array.from({ length: 10 }, (_, clientIndex) => {
  const number = clientIndex + 1;
  const clientId = `client-${String(number).padStart(2, "0")}`;

  return {
    id: clientId,
    name: `Client ${String(number).padStart(2, "0")}`,
    photos: Array.from({ length: 7 }, (_, photoIndex) => {
      const photoNumber = photoIndex + 1;
      return {
        id: `${clientId}-photo-${photoNumber}`,
        title: `Photo ${String(photoNumber).padStart(2, "0")}`,
        image: placeholderImage,
        imageAlt: `Placeholder for ${clientId}, photo ${photoNumber}`,
      };
    }),
  };
});
