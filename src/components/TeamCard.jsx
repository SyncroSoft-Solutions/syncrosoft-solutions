import React from "react";
import { Mail, Phone, Github, FolderOpen, Star } from "lucide-react";

const TeamCard = ({ member }) => {
  return (
    <div className="card bg-base-200 border-2 border-base-content/5 shadow-xl hover:shadow-2xl transition-all duration-300 group relative rounded-xl overflow-hidden">
      {/* Profile Image */}
      <div className="relative overflow-hidden">
        <img
          src={member.photo}
          alt={member.name}
          className="w-full max-h-80 sm:max-h-96 object-cover rounded-t-xl transition-transform duration-500 group-hover:scale-110"
        />

        {/* Overlay Glow */}
        <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-60 transition-opacity duration-500 z-10 rounded-t-xl" />

        {/* Name Label */}
        <h2 className="absolute top-3 left-3 z-20 text-white bg-accent-content/70 px-3 py-1 rounded-lg text-sm font-semibold shadow">
          {member.name}
        </h2>

        {/* Badge (e.g., CEO) */}
        {member.badge && (
          <div className="absolute top-3 right-3 bg-primary text-white px-2 py-1 text-xs font-semibold rounded shadow flex items-center gap-1 animate-pulse-glow z-20">
            <Star size={14} /> {member.badge}
          </div>
        )}
      </div>

      {/* Card Body */}
      <div className="card-body text-center space-y-4">
        <p className="text-primary font-bold text-lg">{member.role}</p>

        {/* Action Buttons */}
        <div className="flex justify-center flex-wrap gap-3 pt-2">
          {member.email && (
            <a
              href={`mailto:${member.email}`}
              className="btn btn-sm btn-primary btn-circle"
              title="Email"
              aria-label={`Send email to ${member.name}`}
            >
              <Mail size={18} />
            </a>
          )}
          {member.phone && (
            <a
              href={`tel:${member.phone}`}
              className="btn btn-sm btn-primary btn-circle"
              title="Call"
              aria-label={`Call ${member.name}`}
            >
              <Phone size={18} />
            </a>
          )}
          {member.github && (
            <a
              href={member.github}
              target="_blank"
              rel="noreferrer"
              className="btn btn-sm btn-primary btn-circle"
              title="GitHub"
              aria-label={`GitHub of ${member.name}`}
            >
              <Github size={18} />
            </a>
          )}
          {member.portfolio && (
            <a
              href={member.portfolio}
              target="_blank"
              rel="noreferrer"
              className="btn btn-sm btn-primary btn-circle"
              title="Portfolio"
              aria-label={`Portfolio of ${member.name}`}
            >
              <FolderOpen size={18} />
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

export default TeamCard;
