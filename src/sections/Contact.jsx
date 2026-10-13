import { useState } from "react";
import { ArrowUpRight, Mail, MapPin } from "lucide-react";
import SectionHeading from "../components/SectionHeading.jsx";
import WhatsAppButton from "../components/WhatsAppButton.jsx";
import { siteConfig } from "../config/siteConfig.js";

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  function updateField(event) {
    setForm((current) => ({ ...current, [event.target.name]: event.target.value }));
  }

  function handleSubmit(event) {
    event.preventDefault();
    const subject = `Project enquiry from ${form.name}`;
    const body = `Name: ${form.name}\nEmail: ${form.email}\n\nProject details:\n${form.message}`;
    window.location.href = `mailto:${siteConfig.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  }

  return (
    <section className="section section--contact" id="contact">
      <div className="container">
        <SectionHeading
          eyebrow="Get in touch"
          title="Let’s tell your story."
          description="Have an idea, a date in mind or simply want to talk it through? I’d love to hear about it."
        />
        <div className="contact-grid">
          <div className="contact-intro">
            <p>For bookings, collaborations and enquiries, WhatsApp is the quickest way to reach me.</p>
            <WhatsAppButton message="Hello DeboVIsuals! I'd love to talk about a project. I'll share a few details shortly." icon="chat">
              Chat on WhatsApp
            </WhatsAppButton>
            <div className="contact-details">
              <a href={`mailto:${siteConfig.email}`}><Mail size={17} />{siteConfig.email}</a>
              <span><MapPin size={17} />Available for projects · {siteConfig.location}</span>
            </div>
          </div>
          <form className="contact-form" onSubmit={handleSubmit}>
            <p className="contact-form__heading">Or send a quick enquiry</p>
            <label htmlFor="contact-name">Your name</label>
            <input id="contact-name" name="name" autoComplete="name" required value={form.name} onChange={updateField} />
            <label htmlFor="contact-email">Email address</label>
            <input id="contact-email" name="email" type="email" autoComplete="email" required value={form.email} onChange={updateField} />
            <label htmlFor="contact-message">A little about your project</label>
            <textarea id="contact-message" name="message" rows="3" required value={form.message} onChange={updateField} />
            <button className="button button--dark" type="submit">Compose email <ArrowUpRight size={17} /></button>
            <span className="contact-form__note">Your email app will open with your enquiry — it isn’t stored on this website.</span>
          </form>
        </div>
      </div>
    </section>
  );
}
