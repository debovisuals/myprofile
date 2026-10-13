import { ArrowUpRight } from "lucide-react";
import WhatsAppButton from "./WhatsAppButton.jsx";
import { siteConfig } from "../config/siteConfig.js";
import { bookingMessage } from "../utils/whatsapp.js";

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
              <a href={link.href} key={link.label} target="_blank" rel="noreferrer">
                {link.label}<ArrowUpRight size={14} />
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
