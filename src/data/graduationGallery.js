const placeholderImage = "/images/image-fallback.svg";

export const graduationPhotos = Array.from({ length: 15 }, (_, index) => {
  const number = index + 1;
  const photoNumber = String(number).padStart(2, "0");

  return {
    id: `futa-class-25-photo-${photoNumber}`,
    title: `Photo ${photoNumber}`,
    image: placeholderImage,
    imageAlt: `Placeholder for FUTA Class 25 graduation photo ${number}`,
    category: "FUTA Class 25 Graduation",
    location: "FUTA",
    description: "FUTA Class 25 Graduation Set",
    type: "image",
    isPlaceholder: true,
  };
});
