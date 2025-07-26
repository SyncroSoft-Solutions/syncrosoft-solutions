import React, { useState } from "react";
import toast from "react-hot-toast";
import emailjs from "emailjs-com";
import SEO from '../components/SEO';
import AnimatedBackground from "../components/AnimatedBackground.jsx";
import AnimatedSection from "../components/AnimatedSection";
import { bounceIn } from "../animations/sectionVariants.js";

const Contact = () => {
  const [form, setForm] = useState({
    user_name: "",
    user_email: "",
    user_phone: "",
    message: "",
  });

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!form.user_name || !form.user_email || !form.user_phone || !form.message) {
      toast.error("Please fill out all fields!");
      return;
    }

    if (!/\S+@\S+\.\S+/.test(form.user_email)) {
      toast.error("Please enter a valid email address!");
      return;
    }

    emailjs
      .send("service_tslitio", "template_sf4lqi6", form, "juI-kUY0pvSq6XNDx")
      .then(() => {
        toast.success("Message sent successfully! 🚀");
        setForm({ user_name: "", user_email: "", user_phone: "", message: "" });
      })
      .catch((error) => {
        console.error("EmailJS Error:", error);
        toast.error("Something went wrong. Try again later.");
      });
  };

  return (
    <section id="contact" className="bg-base-100 text-base-content h-screen overflow-y-auto overflow-x-hidden scroll-smooth scrollbar-hide">
      <SEO
        title="Conctact"
        description=""
        keywords=""
      />
      <div className="w-full z-10 h-full flex items-center justify-center px-5 lg:px-16 bg-base-100 relative">
        <AnimatedBackground />
        <div className="relative z-10 w-full max-w-xl">
          <div className="card bg-base-200 shadow-xl p-8 space-y-6">
            <AnimatedSection variants={bounceIn}>
              <h1 className="text-3xl md:text-5xl font-bold text-base-content">
                Get in{" "}
                <span className="text-primary inline-flex overflow-hidden">Touch</span>
              </h1>
            </AnimatedSection>

            <AnimatedSection variants={bounceIn}>
              <p className="text-base-content/80">
                We'd love to hear about your project ideas, collaborations, or just a friendly hello.
                Fill out the form and we'll get back to you soon!
              </p>
            </AnimatedSection>

            <AnimatedSection
              variants={bounceIn}
            >
              <form className="space-y-4" onSubmit={handleSubmit}>
                {["user_name", "user_email", "user_phone"].map((field) => (
                  <input
                    key={field}
                    type={field.includes("email") ? "email" : "text"}
                    name={field}
                    placeholder={field === "user_name" ? "Your Name" : field === "user_email" ? "Your Email" : "Your Phone"}
                    className="input input-bordered w-full transition duration-300 focus:ring-2 focus:ring-primary"
                    value={form[field]}
                    onChange={handleChange}
                  />
                ))}

                <textarea
                  rows="4"
                  name="message"
                  placeholder="Your Message"
                  className="textarea textarea-bordered w-full transition duration-300 focus:ring-2 focus:ring-primary"
                  value={form.message}
                  onChange={handleChange}
                />

                <button
                  type="submit"
                  className="btn btn-primary rounded-full px-8 text-base relative overflow-hidden group"
                >
                  <span className="relative z-10">Send Message</span>
                  <span className="absolute inset-0 bg-gradient-to-r from-primary via-accent to-secondary opacity-0 group-hover:opacity-20 blur-2xl transition duration-500"></span>
                </button>
              </form>
            </AnimatedSection>
          </div>
        </div>
      </div>

    </section>
  );
};

export default Contact;
