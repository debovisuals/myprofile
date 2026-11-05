import Navbar from "./components/Navbar.jsx";
import Footer from "./components/Footer.jsx";
import Hero from "./sections/Hero.jsx";
import Services from "./sections/Services.jsx";
import Portfolio from "./sections/Portfolio.jsx";
import Packages from "./sections/Packages.jsx";
import About from "./sections/About.jsx";
import Contact from "./sections/Contact.jsx";
import GalleryPage from "./sections/GalleryPage.jsx";
import ClientGalleryPage from "./sections/ClientGalleryPage.jsx";
import GraduationGalleryPage from "./sections/GraduationGalleryPage.jsx";
import GraduationFeature from "./sections/GraduationFeature.jsx";

export default function App() {
  const pathname = window.location.pathname.replace(/\/+$/, "") || "/";
  const isGalleryPage = pathname === "/gallery";
  const isClientGalleryPage = pathname === "/client-gallery";
  const isGraduationGalleryPage = pathname === "/futa-class-25";

  return (
    <>
      <a className="skip-link" href="#main-content">Skip to content</a>
      <Navbar />
      <main id="main-content">
        {isGalleryPage ? (
          <GalleryPage />
        ) : isClientGalleryPage ? (
          <ClientGalleryPage />
        ) : isGraduationGalleryPage ? (
          <GraduationGalleryPage />
        ) : (
          <>
            <Hero />
            <Services />
            <Portfolio />
            <GraduationFeature />
            <Packages />
            <About />
            <Contact />
          </>
        )}
      </main>
      <Footer />
    </>
  );
}
