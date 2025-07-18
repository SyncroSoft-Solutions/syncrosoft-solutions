import React, { useRef, useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { ChevronLeft, ChevronRight } from "lucide-react";

// Define the route order
const routeOrder = [
  { path: "/", label: "Home" },
  { path: "/about", label: "About" },
  { path: "/services", label: "Services" },
  { path: "/projects", label: "Projects" },
  { path: "/team", label: "Team" },
  { path: "/testimonials", label: "Testimonials" },
  { path: "/contact", label: "Contact" },
];

const RouteChanger = ({ className = "" }) => {
  const navigate = useNavigate();
  const location = useLocation();
  const boxRef = useRef(null);

  const currentIndex = routeOrder.findIndex(
    (route) => route.path === location.pathname
  );
  if (currentIndex === -1) return null;

  const prevLabel =
    routeOrder[(currentIndex - 1 + routeOrder.length) % routeOrder.length].label;
  const nextLabel =
    routeOrder[(currentIndex + 1) % routeOrder.length].label;

  const [position, setPosition] = useState({ x: window.innerWidth / 2 - 80, y: window.innerHeight - 100 });
  const [isDragging, setIsDragging] = useState(false);
  const offset = useRef({ x: 0, y: 0 });

  const handleMouseDown = (e) => {
    setIsDragging(true);
    offset.current = {
      x: e.clientX - position.x,
      y: e.clientY - position.y,
    };
    document.body.style.userSelect = "none";
  };

  const handleMouseMove = (e) => {
    if (isDragging) {
      setPosition({
        x: e.clientX - offset.current.x,
        y: e.clientY - offset.current.y,
      });
    }
  };

  const handleMouseUp = () => {
    setIsDragging(false);
    document.body.style.userSelect = "auto";
  };

  useEffect(() => {
    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("mouseup", handleMouseUp);
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseup", handleMouseUp);
    };
  }, [isDragging]);

  const handleNavigate = (direction) => {
    const nextIndex =
      (currentIndex + direction + routeOrder.length) % routeOrder.length;
    navigate(routeOrder[nextIndex].path);
  };

  return (
    <div
      ref={boxRef}
      onMouseDown={handleMouseDown}
      className={`fixed z-50 pointer-events-auto cursor-move ${className}`}
      style={{
        left: position.x,
        top: position.y,
      }}
    >
      <div className="backdrop-blur-3xl bg-base-200/60 shadow-xl rounded-full p-2 flex gap-3">
        <button
          onClick={() => handleNavigate(-1)}
          className="btn btn-circle btn-sm btn-outline hover:scale-110 transition-all"
          title={`Go to ${prevLabel}`}
          aria-label={`Go to ${prevLabel}`}
        >
          <ChevronLeft />
        </button>

        <button
          onClick={() => handleNavigate(1)}
          className="btn btn-circle btn-sm btn-outline hover:scale-110 transition-all"
          title={`Go to ${nextLabel}`}
          aria-label={`Go to ${nextLabel}`}
        >
          <ChevronRight />
        </button>
      </div>
    </div>
  );
};

export default RouteChanger;
