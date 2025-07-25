import React, { useEffect, useState } from "react";
import TeamCard from "../components/TeamCard";
import SAMARTH from "../assets/team/samarth.jpeg";
import RUTIKA from "../assets/team/rutika.jpeg";
import AJAY from "../assets/team/ajay.jpeg";
import SADHANA from "../assets/team/sadhana.jpeg";
import SOHAN from "../assets/team/sohan.jpeg";
import ABHISHEK from "../assets/team/abhishek.jpeg";
import ROHIT from "../assets/team/rohit.jpeg";
import SEO from "../components/SEO";
import AnimatedBackground from "../components/AnimatedBackground";
import AnimatedSection from "../components/AnimatedSection";
import { bounceIn, zoomIn } from "../animations/sectionVariants";

const teamMembers = [
  {
    id: 1,
    name: "Samarth Kanthale",
    role: "Full Stack Developer",
    photo: SAMARTH,
    email: "mailto:samarth.syncrosoft@gmail.com",
    phone: "tel:+918446857060",
    github: "https://github.com/Samarth-SyncroSoft",
    portfolio: "https://demo.com",
    badge: "CEO",
  },
  {
    id: 2,
    name: "Ajay Kandhare",
    role: "Full Stack Developer",
    photo: AJAY,
    email: "mailto:ajay.syncrosoft@gmail.com",
    phone: "tel:+917559394187",
    github: "https://github.com/ajaysyncrosoft",
    portfolio: "https://portfolio-0-sigma.vercel.app",
    badge: "DEV",
  },
  {
    id: 3,
    name: "Rutika Ekshinge",
    role: "Project Manager",
    photo: RUTIKA,
    email: "mailto:rutika.syncrosoft@gmail.com",
    phone: "tel:+9145488758",
    badge: "Manager",
  },
  {
    id: 4,
    name: "Sadhana Jadhav",
    role: "Data Analyst",
    photo: SADHANA,
    email: "mailto:sadhana.syncrosoft@gmail.com",
    phone: "tel:+919561082845",
    badge: "Manager",
  },
  {
    id: 5,
    name: "Sohan Kendre",
    role: "Java Developer",
    photo: SOHAN,
    email: "mailto:sohan.syncrosoft@gmail.com",
    phone: "tel:+919322653708",
    badge: "Manager",
  },
  {
    id: 6,
    name: "Abhishek Jaiswar",
    role: "Nothing yet work",
    photo: ABHISHEK,
    email: "mailto:abhishek.syncrosoft@gmail.com",
    phone: "tel:+918530896645",
    badge: "Manager",
  },
  {
    id: 7,
    name: "Rohit Gaware",
    role: "Digital Marketing",
    photo: ROHIT,
    email: "mailto:rohit.syncrosoft@gmail.com",
    phone: "tel:+919657264056",
    badge: "Manager",
  },
];


const groupTeamMembers = (members, groupSize) => {
  const groups = [];
  for (let i = 0; i < members.length; i += groupSize) {
    groups.push(members.slice(i, i + groupSize));
  }
  return groups;
};

const Team = () => {
  const [groupedMembers, setGroupedMembers] = useState([]);

  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;
      if (width < 640) {
        setGroupedMembers(groupTeamMembers(teamMembers, 1));
      } else if (width < 1024) {
        setGroupedMembers(groupTeamMembers(teamMembers, 2));
      } else {
        setGroupedMembers(groupTeamMembers(teamMembers, 3));
      }
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <section
      id="team"
      className="bg-base-100 text-base-content h-screen overflow-y-auto overflow-x-hidden scroll-smooth scrollbar-hide"
    >
      <SEO
        title="Team"
        description="Meet our skilled and passionate development team at Syncrosoft."
        keywords="Team, Developers, Syncrosoft, Web Developers, Full Stack, MERN, UI/UX"
      />
      <AnimatedBackground />
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-8 lg:px-12 py-24 overflow-hidden">

        {/* Heading */}
        <AnimatedSection variants={bounceIn}>
          <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold text-center text-base-content mb-16">
            Meet Our{" "}
            <span className="text-primary inline-flex overflow-hidden">Team</span>
          </h1>
        </AnimatedSection>

        <div className="carousel w-full">
          {groupedMembers.map((group, index) => {
            const slideId = `slide${index + 1}`;
            const prevId = `#slide${(index - 1 + groupedMembers.length) % groupedMembers.length + 1}`;
            const nextId = `#slide${(index + 1) % groupedMembers.length + 1}`;

            return (
              <div
                key={index}
                id={slideId}
                className="carousel-item relative w-full flex justify-center"
              >
                <div className="w-full flex gap-6 justify-center flex-wrap px-2">
                  {group.map((member) => (
                    <div
                      key={member.id}
                      className="w-full sm:w-[80%] md:w-[45%] lg:w-[30%] max-w-sm"
                    >
                      <AnimatedSection variants={zoomIn}>
                        <TeamCard member={member} />
                      </AnimatedSection>
                    </div>
                  ))}
                </div>

                {/* Arrow buttons */}
                <div className="absolute z-40 left-5 right-5 top-1/2 flex justify-between transform -translate-y-1/2">
                  <a href={prevId} className="btn btn-circle">
                    ❮
                  </a>
                  <a href={nextId} className="btn btn-circle">
                    ❯
                  </a>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Team;