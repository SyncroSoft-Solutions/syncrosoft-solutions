import React, { useState, useEffect } from "react";
import axios from "../api/axios";
import SEO from "../components/SEO";
import { Send } from "lucide-react";
import { toast } from "react-hot-toast";
import AnimatedBackground from "../components/AnimatedBackground";
import AnimatedSection from '../components/AnimatedSection';
import { bounceIn, bounceStaggeredContainer, bounceStaggeredItem } from "../animations/sectionVariants";

const Testimonials = () => {
  const [feedbacks, setFeedbacks] = useState([]);
  const [formData, setFormData] = useState({ name: "", message: "" });

  // Fetch feedbacks from API on load
  useEffect(() => {
    axios
      .get("/feedback")
      .then((res) => setFeedbacks(res.data))
      .catch(() => toast.error("Failed to load feedbacks"));
  }, []);

  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { name, message } = formData;

    if (!name.trim() || !message.trim()) {
      toast.error("Both name and message are required.");
      return;
    }

    try {
      const res = await axios.post("/feedback", formData);
      setFeedbacks([res.data, ...feedbacks]);
      setFormData({ name: "", message: "" });
      toast.success("Thank you for your feedback!");
    } catch (err) {
      toast.error(err.response?.data?.error || "Something went wrong.");
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter" && !e.shiftKey) {
      handleSubmit(e);
    }
  };

  return (
    <section className="h-screen bg-base-100 text-base-content overflow-y-auto overflow-x-hidden scrollbar-hide">
      <SEO
        title="Client Review"
        description="Client feedbacks and testimonials"
        keywords="Client Review, Testimonials, Feedback"
      />
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-8 lg:px-12 py-24 overflow-hidden">
        <AnimatedBackground />
        <AnimatedSection variants={bounceIn}>
          <h1
            initial={{ y: 40, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl font-bold text-center mb-12"
          >
            What Our <span className="text-primary">Clients Say</span>
          </h1>
        </AnimatedSection>

        {/* Feedback Form */}
        <AnimatedSection
          variants={bounceIn}
        >
          <div className="max-w-xl mx-auto card bg-base-300 shadow-xl p-6 mb-12">
            <h2 className="text-xl font-semibold mb-4">Leave Your Feedback</h2>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <input
                  type="text"
                  name="name"
                  placeholder="Your Name"
                  value={formData.name}
                  onChange={handleChange}
                  className="input input-bordered w-full"
                  onKeyDown={handleKeyDown}
                />
              </div>
              <div>
                <textarea
                  name="message"
                  rows="4"
                  placeholder="Your Message"
                  value={formData.message}
                  onChange={handleChange}
                  onKeyDown={handleKeyDown}
                  className="textarea textarea-bordered w-full"
                ></textarea>
              </div>
              <button
                type="submit"
                className="btn btn-primary flex items-center gap-2"
              >
                Submit <Send size={16} />
              </button>
            </form>
          </div>
        </AnimatedSection>

        {/* Testimonials */}
        <AnimatedSection
          variants={bounceStaggeredContainer}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {feedbacks.map((feedback, index) => {
            return (
              <AnimatedSection
                key={index}
                variants={bounceStaggeredItem}
                custom={index}
                whileHover={{ scale: 1 }}
                whileTap={{ scale: 0.95 }}
              >
                <div className="bg-base-300 p-6 rounded-2xl shadow-md hover:shadow-xl border border-base-300" >
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-12 h-12 rounded-full bg-primary text-primary-content flex items-center justify-center text-lg font-bold shadow-md">
                      {feedback.name.charAt(0).toUpperCase()}
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-primary">
                        {feedback.name}
                      </h3>
                      <p className="text-sm text-base-content/60">Client Feedback</p>
                    </div>
                  </div>
                  <p className="text-base-content/80 leading-relaxed text-sm">
                    “{feedback.message}”
                  </p>
                </div>
              </AnimatedSection>
            );
          })}
        </AnimatedSection>
      </div>
    </section>
  );
};

export default Testimonials;
