export default function SectionHeading({ eyebrow, title, description, light = false }) {
  return (
    <div className={`section-heading${light ? " section-heading--light" : ""}`}>
      <div>
        {eyebrow && <p className="eyebrow">{eyebrow}</p>}
        <h2>{title}</h2>
      </div>
      {description && <p className="section-heading__description">{description}</p>}
    </div>
  );
}
