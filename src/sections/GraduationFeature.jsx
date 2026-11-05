import { ArrowUpRight } from "lucide-react";

export default function GraduationFeature() {
  return (
    <section className="graduation-feature" aria-labelledby="graduation-feature-title">
      <div className="container">
        <div className="graduation-feature__panel">
          <div className="graduation-feature__mark" aria-hidden="true">
            <span>FUTA</span>
            <span>CLASS</span>
            <strong>25</strong>
          </div>
          <div className="graduation-feature__copy">
            <p className="eyebrow">A moment worth sharing</p>
            <h2 id="graduation-feature-title">FUTA Class 25 <em>Graduation Set</em></h2>
            <p>
              Celebrate the people, pride and memories of graduation. Visit the gallery
              and share it with friends and family.
            </p>
            <a className="button button--light" href="/futa-class-25/">
              Explore the graduation gallery <ArrowUpRight size={17} aria-hidden="true" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
