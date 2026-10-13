import SectionHeading from "../components/SectionHeading.jsx";
import PackageCard from "../components/PackageCard.jsx";
import { packages } from "../data/packages.js";

export default function Packages() {
  return (
    <section className="section section--packages" id="packages">
      <div className="container">
        <SectionHeading
          eyebrow="Packages"
          title="A place to begin."
          description="Every story is different. These sample starting points can be shaped around your brief, timing and vision."
        />
        <div className="package-grid">
          {packages.map((packageInfo) => <PackageCard package={packageInfo} key={packageInfo.id} />)}
        </div>
        <p className="packages-note">Sample packages · pricing and deliverables are placeholders and will be confirmed for each enquiry.</p>
      </div>
    </section>
  );
}
