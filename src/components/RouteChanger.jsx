import React from "react";
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
  const currentIndex = routeOrder.findIndex((route) => route.path === location.pathname);

  const handleNavigate = (direction) => {
    const nextIndex = (currentIndex + direction + routeOrder.length) % routeOrder.length;
    navigate(routeOrder[nextIndex].path);
  };

  const prevLabel = routeOrder[(currentIndex - 1 + routeOrder.length) % routeOrder.length].label;
  const nextLabel = routeOrder[(currentIndex + 1) % routeOrder.length].label;

  return (
    <div
    className={`fixed bottom-6 left-1/2 -translate-x-1/2 z-50 pointer-events-none ${className}`}
    >
    <div className="backdrop-blur-3xl bg-base-200/60 shadow-lg rounded-full p-2 flex gap-3 pointer-events-auto">
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
