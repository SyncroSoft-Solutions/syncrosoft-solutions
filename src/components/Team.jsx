import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

import samarth from "../assets/team/samarth.jpeg";
import rutika from "../assets/team/rutika.jpeg";
import ajay from "../assets/team/ajay.jpeg";
import sadhana from "../assets/team/sadhana.jpeg";
import sohan from "../assets/team/sohan.jpeg";
import abhishek from "../assets/team/abhishek.jpeg";
import rohit from "../assets/team/rohit.jpeg";
import AnimatedSection from "./AnimatedSection";
import AnimatedBackground from "./AnimatedBackground";

const teamMembers = [
    { id: 1, name: "Samarth Kanthale", role: "Full Stack Developer", image: samarth },
    { id: 2, name: "Ajay Kandhare", role: "Full Stack Developer", image: ajay },
    { id: 3, name: "Rutika Ekshinge", role: "Project Manager", image: rutika },
    { id: 4, name: "Sadhana Jadhav", role: "Data Analyst", image: sadhana },
    { id: 5, name: "Sohan Kendre", role: "Frontend Developer", image: sohan },
    { id: 6, name: "Abhishek Jaiswar", role: "Full Stack Developer", image: abhishek },
    { id: 7, name: "Rohit Gaware", role: "Digital Marketing", image: rohit },
];

// Text animates in from left
const textVariants = {
    hidden: { opacity: 0, x: -40 },
    visible: {
        opacity: 1,
        x: 0,
        transition: { duration: 0.8, ease: "easeOut" },
    },
};

const Team = () => {
    return (
        <section className="flex items-center justify-center bg-base-100 text-base-content relative overflow-hidden">
            <div className="px-4 sm:px-8">
                <AnimatedSection index={2} >
                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.3 }}
                        variants={textVariants}
                        className="max-w-4xl text-center z-10"
                    >
                        {/* Text Block */}
                        <div>
                            <h2 className="text-4xl md:text-5xl font-bold text-base-content mb-4">
                                Our <span className="text-primary underline underline-offset-4">Team</span>
                            </h2>
                            <p className="text-xl md:text-2xl text-base-content/80 mb-6">
                                The <span className="text-accent font-semibold">People Behind</span> the Innovation
                            </p>
                            <div className="text-start lg:text-center">
                                <p className="text-xl md:text-2xl text-base-content/70 mb-4">
                                    At <span className="text-primary font-bold">SyncroSoft Solutions</span>, our strength lies in our{" "}
                                    <span className="text-success font-semibold">people</span>. We are a team of{" "}
                                    <span className="text-success font-semibold">passionate developers</span>,{" "}
                                    <span className="text-success font-semibold">creative designers</span>, and{" "}
                                    <span className="text-success font-semibold">strategic thinkers</span> dedicated to building{" "}
                                    <span className="text-success font-semibold">technology that works</span>.
                                </p>
                                <p className="text-xl md:text-2xl text-base-content/70 mb-4">
                                    <span className="text-success font-semibold">Collaboration</span>,{" "}
                                    <span className="text-success font-semibold">innovation</span>, and{" "}
                                    <span className="text-success font-semibold">transparency</span> are at the heart of everything we do.
                                    Our team works closely with clients to understand their goals and bring their ideas to life with{" "}
                                    <span className="text-success font-semibold">smart</span>,{" "}
                                    <span className="text-success font-semibold">scalable</span> solutions.
                                </p>
                            </div>
                            <div className="text-primary text-xl md:text-2xl font-bold flex items-center justify-center gap-2">
                                Together, we turn vision into <span className="text-warning">value</span>
                            </div>
                        </div>

                        {/* Team Grid */}
                        <motion.div
                            className="hidden sm:grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 md:gap-6 max-w-4xl mx-auto pt-8 pb-12"
                        >
                            {teamMembers.map((member) => (
                                <div
                                    key={member.id}
                                    className="flex flex-col gap-2 items-center text-center group transition-transform duration-300"
                                >
                                    <img
                                        src={member.image}
                                        alt={member.name}
                                        className="w-20 h-20 md:w-24 md:h-24 rounded-full object-cover shadow-lg ring-4 ring-primary ring-offset-2 ring-offset-base-100 group-hover:scale-105 transition-transform duration-300"
                                    />
                                    <div className="flex flex-col gap-0.5">
                                        <div className="font-semibold text-base-content text-sm md:text-base">
                                            {member.name}
                                        </div>
                                        <div className="text-xs md:text-sm text-base-content/70 font-medium">
                                            {member.role}
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </motion.div>

                        <Link to="/team">
                            <motion.button
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                className="mt-12 btn btn-primary rounded-full px-8 text-base font-semibold"
                            >
                                Meet Our Team
                            </motion.button>
                        </Link>
                    </motion.div>
                </AnimatedSection>
            </div>
        </section>
    );
};

export default Team;
