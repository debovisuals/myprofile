import { motion, useReducedMotion } from "framer-motion";
import { ArrowDown, ArrowUpRight } from "lucide-react";
import WhatsAppButton from "../components/WhatsAppButton.jsx";
import { bookingMessage } from "../utils/whatsapp.js";
import { siteConfig } from "../config/siteConfig.js";

const heroText = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12 } },
};
const heroLine = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.65, ease: [0.22, 1, 0.36, 1] } },
};

export default function Hero() {
  const reduceMotion = useReducedMotion();
  return (
    <section className="hero" id="home">
      <div className="container hero__grid">
        <div className="hero__copy">
          <motion.p className="eyebrow hero__eyebrow" initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }}>
            Visual production · {siteConfig.location}
          </motion.p>
          <motion.h1 variants={heroText} initial="hidden" animate="visible">
            <motion.span variants={heroLine}>Capturing</motion.span>
            <motion.span variants={heroLine}>perspectives.</motion.span>
            <motion.span variants={heroLine}><em>Creating</em> visual stories.</motion.span>
          </motion.h1>
          <motion.p
            className="hero__intro"
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.5 }}
          >
            Thoughtful photography, aerial imagery and film for people, places and brands with a story to tell.
          </motion.p>
          <motion.div className="hero__actions" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.7 }}>
            <a className="button button--dark" href="#work">Explore my work <ArrowUpRight size={17} /></a>
            <WhatsAppButton message={bookingMessage} variant="outline">Book a session</WhatsAppButton>
          </motion.div>
          <a className="hero__scroll" href="#services"><ArrowDown size={15} /> Scroll to explore</a>
        </div>
        <motion.div
          className="hero__visual"
          initial={reduceMotion ? false : { opacity: 0, scale: 1.035 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.1, ease: "easeOut" }}
        >
          <img
            src="/images/hero/hero-landscape.jpg"
            alt="Cinematic landscape seen from above"
            fetchPriority="high"
            onError={(event) => {
              event.currentTarget.src = "/images/image-fallback.svg";
            }}
          />
          <div className="hero__image-caption"><span>01 / 05</span><span>See the world a little differently</span></div>
          <div className="hero__vertical-label">DEBOVISUALS · {siteConfig.location.toUpperCase()}</div>
        </motion.div>
      </div>
    </section>
  );
}
