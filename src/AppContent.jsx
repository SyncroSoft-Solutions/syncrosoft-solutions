import { Routes, Route, useNavigate, useLocation } from "react-router-dom";
import { useEffect } from "react";
import Navbar from "./components/Navbar.jsx";
import Home from "./pages/Home.jsx";
import About from "./pages/About.jsx";
import Services from "./pages/Services.jsx";
import Contact from "./pages/Contact.jsx";
import Projects from "./pages/Projects.jsx";
import Testimonials from "./pages/Testimonials.jsx";
import Team from "./pages/Team.jsx";

function AppContent() {
  const navigate = useNavigate();
  const location = useLocation();

  const pages = ["/", "/about", "/services", "/projects", "/team", "/testimonials", "/contact"];

  const getNextPage = () => {
    const currentIndex = pages.indexOf(location.pathname);
    return pages[(currentIndex + 1) % pages.length];
  };

  const getPrevPage = () => {
    const currentIndex = pages.indexOf(location.pathname);
    return pages[(currentIndex - 1 + pages.length) % pages.length];
  };

  const navigateToNext = () => {
    navigate(getNextPage());
  };

  const navigateToPrev = () => {
    navigate(getPrevPage());
  };

  // Desktop arrow key navigation
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "ArrowDown") {
        navigateToNext();
      } else if (e.key === "ArrowUp") {
        navigateToPrev();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [location.pathname]);

  useEffect(() => {
  window.scrollTo(0, 0);
}, [location.pathname]);

  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/team" element={<Team />} />
        <Route path="/testimonials" element={<Testimonials />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </>
  );
}

export default AppContent;
