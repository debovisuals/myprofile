import { Instagram } from "lucide-react";
import WhatsAppButton from "./WhatsAppButton.jsx";
import { siteConfig } from "../config/siteConfig.js";
import { bookingMessage } from "../utils/whatsapp.js";

function SocialIcon({ label }) {
  if (label === "Instagram") return <Instagram size={20} aria-hidden="true" />;
  if (label === "TikTok") {
    return (
      <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor" aria-hidden="true">
        <path d="M19.6 6.7a5.6 5.6 0 0 1-3.8-4.4V2h-4v13.7a3 3 0 1 1-3-3c.4 0 .8.1 1.2.2v-4a7 7 0 1 0 5.8 6.9V9.2a9.5 9.5 0 0 0 5.6 1.8V7a5.7 5.7 0 0 1-1.8-.3Z" />
      </svg>
    );
  }
  return (
    <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor" aria-hidden="true">
      <path d="M18.9 1.2h3.7l-8 9.2L24 22.8h-7.4l-5.8-7.6-6.6 7.6H.5l8.6-9.8L0 1.2h7.6l5.2 6.9 6.1-6.9Zm-1.3 19.5h2L6.5 3.2H4.3l13.3 17.5Z" />
    </svg>
  );
}

const footerLinks = [
  ["Home", "#home"],
  ["Services", "#services"],
  ["Portfolio", "#work"],
  ["Packages", "#packages"],
  ["About", "#about"],
  ["Contact", "#contact"],
];

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="container">
        <div className="footer-main">
          <div>
            <a className="wordmark wordmark--footer" href="#home">
              Debo<span>VIsuals</span><small>{siteConfig.tagline.toUpperCase()}</small>
            </a>
            <p>Good stories deserve to be seen from every angle.</p>
          </div>
          <nav className="footer-nav" aria-label="Footer navigation">
            {footerLinks.map(([label, href]) => <a href={href} key={href}>{label}</a>)}
          </nav>
          <div className="footer-social">
            {siteConfig.socialLinks.filter((link) => link.href).map((link) => (
              <a
                href={link.href}
                key={link.label}
                target="_blank"
                rel="noreferrer"
                aria-label={`Follow ${siteConfig.brand} on ${link.label}`}
                title={link.label}
              >
                <SocialIcon label={link.label} />
              </a>
            ))}
          </div>
          <WhatsAppButton message={bookingMessage} variant="light">
            Start a project
          </WhatsAppButton>
        </div>
        <div className="footer-bottom">
          <span>© {new Date().getFullYear()} {siteConfig.brand}. All rights reserved.</span>
          <span>Made with care in {siteConfig.location}</span>
        </div>
      </div>
    </footer>
  );
}
