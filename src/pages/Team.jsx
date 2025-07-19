import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import TeamCard from "../components/TeamCard";
import SAMARTH from "../assets/team/samarth.jpeg";
import RUTIKA from "../assets/team/rutika.jpeg";
import AJAY from "../assets/team/ajay.jpeg";
import SADHANA from "../assets/team/sadhana.jpeg";
import SOHAN from "../assets/team/sohan.jpeg";
import ABHISHEK from "../assets/team/abhishek.jpeg";
import ROHIT from "../assets/team/rohit.jpeg";
import SEO from "../components/SEO";

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
  },
  {
    id: 3,
    name: "Rutika Ekshinge",
    role: "Content Writer",
    photo: RUTIKA,
    email: "mailto:rutika.syncrosoft@gmail.com",
    phone: "tel:+9145488758",
    github: "https://github.com/temp",
    portfolio: "https://demo.com",
  },
  {
    id: 4,
    name: "Sadhana Jadhav",
    role: "Content Writer",
    photo: SADHANA,
    email: "mailto:sadhana.syncrosoft@gmail.com",
    phone: "tel:+919561082845",
    github: "https://github.com/Sadhanasyncro",
    portfolio: "https://demo.com",
  },
  {
    id: 5,
    name: "Sohan Kendre",
    role: "Web Developer",
    photo: SOHAN,
    email: "mailto:sohan.syncrosoft@gmail.com",
    phone: "tel:+919322653708",
    github: "https://github.com/Sohansyncrosoft",
    portfolio: "https://demo.com",
  },
  {
    id: 6,
    name: "Abhishek Jaiswar",
    role: "Nothing yet work",
    photo: ABHISHEK,
    email: "mailto:abhishek.syncrosoft@gmail.com",
    phone: "tel:+918530896645",
    github: "https://github.com/SycroAbhi",
    portfolio: "https://demo.com",
  },
  {
    id: 7,
    name: "Rohit Gaware",
    role: "Digital Marketing",
    photo: ROHIT,
    email: "mailto:rohit.syncrosoft@gmail.com",
    phone: "tel:+919657264056",
    github: "https://github.com/demo",
    portfolio: "https://demo.com",
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
      className="w-full min-h-screen px-6 md:px-16 py-20 bg-base-100 text-base-content"
    >
      <SEO
        title="Team"
        description="Meet our skilled and passionate development team at Syncrosoft."
        keywords="Team, Developers, Syncrosoft, Web Developers, Full Stack, MERN, UI/UX"
      />

      {/* Heading */}
      <motion.h1
        initial={{ y: 60, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
        viewport={{ once: true }}
        className="text-4xl md:text-5xl lg:text-6xl font-bold text-center text-base-content mb-16"
      >
        Meet Our{" "}
        <span className="text-primary inline-flex overflow-hidden">Team</span>
      </motion.h1>

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
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.8, ease: "easeInOut" }}
                viewport={{ once: true }}
                className="w-full flex gap-6 justify-center flex-wrap px-2"
              >
                {group.map((member) => (
                  <div
                    key={member.id}
                    className="w-full sm:w-[80%] md:w-[45%] lg:w-[30%] max-w-sm"
                  >
                    <TeamCard member={member} />
                  </div>
                ))}
              </motion.div>

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
    </section>
  );
};

export default Team;