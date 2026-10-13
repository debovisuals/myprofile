import Navbar from "./components/Navbar.jsx";
import Footer from "./components/Footer.jsx";
import Hero from "./sections/Hero.jsx";
import Services from "./sections/Services.jsx";
import Portfolio from "./sections/Portfolio.jsx";
import Packages from "./sections/Packages.jsx";
import About from "./sections/About.jsx";
import Contact from "./sections/Contact.jsx";

export default function App() {
  return (
    <>
      <a className="skip-link" href="#main-content">Skip to content</a>
      <Navbar />
      <main id="main-content">
        <Hero />
        <Services />
        <Portfolio />
        <Packages />
        <About />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
