import React, { useState, useEffect } from "react";
import axios from "../api/axios";
import { MessageCircle } from "lucide-react";
import { toast } from "react-hot-toast";
import AnimatedBackground from "../components/AnimatedBackground";
import AnimatedSection from "../components/AnimatedSection";
import { bounceIn, bounceInUp, bounceStaggeredContainer, bounceStaggeredItem } from "../animations/sectionVariants";
import { Link } from "react-router-dom";

const Testimonials = () => {
    const [feedbacks, setFeedbacks] = useState([]);

    useEffect(() => {
        axios
            .get("/feedback")
            .then((res) => setFeedbacks(res.data.slice(0, 3))) // show latest 3
            .catch(() => toast.error("Failed to load feedbacks"));
    }, []);

    return (
        <section className="bg-base-100 text-base-content overflow-y-auto overflow-x-hidden scrollbar-hide">
            <div className="w-full max-w-7xl mx-auto px-4 sm:px-8 lg:px-12 py-10 overflow-hidden">
                <AnimatedBackground />

                {/* Heading */}
                <AnimatedSection variants={bounceIn}>
                    <h1 className="text-3xl md:text-5xl font-bold text-center mb-10">
                        What Our <span className="text-primary">Clients Say</span>
                        <hr className="border-primary max-w-72 mx-auto mt-2" />
                    </h1>
                </AnimatedSection>
                <AnimatedSection variants={bounceIn}>
                    <p className="text-center text-base-content/70 max-w-2xl mx-auto text-lg md:text-xl mb-16">
                        We’re proud to have built lasting relationships with clients who trust us to deliver high-quality digital products.
                    </p>
                </AnimatedSection>

                {/* Feedback Cards */}
                <AnimatedSection
                    variants={bounceStaggeredContainer}
                    initial="initial"
                    whileInView="animate"
                    viewport={{ once: true }}
                    className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6"
                >
                    {feedbacks.map((feedback, index) => (
                        <AnimatedSection
                            key={index}
                            variants={bounceStaggeredItem}
                            custom={index}
                            whileHover={{ scale: 1.02 }}
                            whileTap={{ scale: 0.96 }}
                        >
                            <div className="bg-base-200 p-6 rounded-2xl shadow-md hover:shadow-xl border border-base-300 h-full">
                                <div className="flex items-center gap-4 mb-4">
                                    <div className="w-12 h-12 rounded-full bg-primary text-primary-content flex items-center justify-center text-lg font-bold shadow-md">
                                        {feedback.name.charAt(0).toUpperCase()}
                                    </div>
                                    <div>
                                        <h3 className="text-lg font-semibold text-primary">{feedback.name}</h3>
                                        <p className="text-sm text-base-content/60">Client Feedback</p>
                                    </div>
                                </div>
                                <p className="text-base-content/80 leading-relaxed text-sm">
                                    “{feedback.message}”
                                </p>
                            </div>
                        </AnimatedSection>
                    ))}
                </AnimatedSection>

                {/* Feedback Button */}
                <AnimatedSection variants={bounceInUp}>
                    <div className="mt-16 text-center">
                        <Link to="/testimonials">
                            <button className="btn btn-primary rounded-full px-6 py-2 text-base font-semibold flex items-center gap-2">
                                <MessageCircle size={18} />
                                Leave Feedback
                            </button>
                        </Link>
                    </div>
                </AnimatedSection>
            </div>
        </section>
    );
};

export default Testimonials;
