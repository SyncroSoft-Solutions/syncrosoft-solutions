import React, { useRef, useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { ChevronLeft, ChevronRight } from "lucide-react";

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

  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isDragging, setIsDragging] = useState(false);
  const offset = useRef({ x: 0, y: 0 });

  // ✅ Set bottom center initially
  useEffect(() => {
    const boxWidth = boxRef.current?.offsetWidth || 150;
    const boxHeight = boxRef.current?.offsetHeight || 60;

    setPosition({
      x: window.innerWidth / 2 - boxWidth / 2,
      y: window.innerHeight - boxHeight - 20,
    });
  }, []);

  // --- MOUSE DRAG ---
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

  // --- TOUCH DRAG ---
  const handleTouchStart = (e) => {
    const touch = e.touches[0];
    offset.current = {
      x: touch.clientX - position.x,
      y: touch.clientY - position.y,
    };
    setIsDragging(true);
  };
  const handleTouchMove = (e) => {
    if (!isDragging) return;
    const touch = e.touches[0];
    setPosition({
      x: touch.clientX - offset.current.x,
      y: touch.clientY - offset.current.y,
    });
  };
  const handleTouchEnd = () => {
    setIsDragging(false);
  };

  // ✅ Add global listeners for mouse & touch drag
  useEffect(() => {
    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("mouseup", handleMouseUp);
    window.addEventListener("touchmove", handleTouchMove);
    window.addEventListener("touchend", handleTouchEnd);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseup", handleMouseUp);
      window.removeEventListener("touchmove", handleTouchMove);
      window.removeEventListener("touchend", handleTouchEnd);
    };
  }, [isDragging]);

  const handleNavigate = (direction) => {
    const nextIndex =
      (currentIndex + direction + routeOrder.length) % routeOrder.length;
    navigate(routeOrder[nextIndex].path);
  };

  const prevLabel =
    routeOrder[(currentIndex - 1 + routeOrder.length) % routeOrder.length].label;
  const nextLabel =
    routeOrder[(currentIndex + 1) % routeOrder.length].label;

  return (
    <div
      ref={boxRef}
      onMouseDown={handleMouseDown}
      onTouchStart={handleTouchStart}
      className={`fixed z-50 pointer-events-auto cursor-move ${className}`}
      style={{
        left: `${position.x}px`,
        top: `${position.y}px`,
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
