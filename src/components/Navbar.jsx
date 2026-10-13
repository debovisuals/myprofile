import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import WhatsAppButton from "./WhatsAppButton.jsx";
import { bookingMessage } from "../utils/whatsapp.js";

const links = [
  ["Home", "#home"],
  ["Services", "#services"],
  ["Portfolio", "#work"],
  ["Packages", "#packages"],
  ["About", "#about"],
  ["Contact", "#contact"],
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  function closeMenu() {
    setMenuOpen(false);
  }

  return (
    <header className="site-header">
      <div className="container nav-bar">
        <a className="wordmark" href="#home" aria-label="DeboVIsuals home" onClick={closeMenu}>
          Debo<span>VIsuals</span>
          <small>PHOTOGRAPHY · AERIAL · FILM</small>
        </a>
        <nav className="desktop-nav" aria-label="Main navigation">
          {links.map(([label, href]) => (
            <a href={href} key={href}>
              {label}
            </a>
          ))}
        </nav>
        <WhatsAppButton className="nav-book" message={bookingMessage}>
          Book now
        </WhatsAppButton>
        <button
          className="menu-toggle"
          type="button"
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          aria-expanded={menuOpen}
          aria-controls="mobile-navigation"
          onClick={() => setMenuOpen((open) => !open)}
        >
          {menuOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>
      <AnimatePresence>
        {menuOpen && (
          <motion.nav
            className="mobile-nav"
            id="mobile-navigation"
            aria-label="Mobile navigation"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.22 }}
          >
            {links.map(([label, href]) => (
              <a href={href} key={href} onClick={closeMenu}>
                {label}
              </a>
            ))}
            <WhatsAppButton message={bookingMessage} className="mobile-book" onClick={closeMenu}>
              Book a session
            </WhatsAppButton>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
}
