import React, { useState } from "react";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import emailjs from "emailjs-com";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!formData.name || !formData.email || !formData.message) {
      toast.error("Please fill out all fields.", {
        position: "top-right",
        autoClose: 3000,
      });
      return;
    }

    try {
      setIsSubmitting(true);
     await emailjs.send(
       "service_8gun33x", // Replace with your Service ID
       "template_srp7yyk", // Replace with your Template ID
       formData,
       "POr8PxVjcg0j2Aoo5" // Replace with your User ID
     );
      toast.success("Message sent successfully!", {
        position: "top-right",
        autoClose: 3000,
      });
      setFormData({ name: "", email: "", message: "" });
    } catch (error) {
      console.error("Error sending email:", error);
      toast.error("Failed to send message. Please try again.", {
        position: "top-right",
        autoClose: 3000,
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="relative min-h-screen bg-gray-50 text-gray-800 py-20 px-6">
      {/* Background Shapes */}
      <div className="absolute top-0 -left-20 w-64 h-64 bg-blue-100 rounded-full blur-xl md:w-96 md:h-96"></div>
      <div className="absolute bottom-10 right-0 w-64 h-64 bg-pink-100 rounded-full blur-xl md:w-96 md:h-96"></div>

      {/* Container */}
      <div className="container mx-auto relative z-10">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-extrabold text-violet-600 mb-4">
            Contact Me
          </h2>
          <p className="text-lg md:text-xl text-gray-600">
            I'd love to hear from you! Feel free to reach out with any questions
            or just to say hi.
          </p>
        </div>

        {/* Contact Form */}
        <form
          onSubmit={handleSubmit}
          className="max-w-3xl mx-auto bg-white p-8 rounded-lg shadow-lg border-t-4 border-violet-500"
        >
          <div className="mb-6">
            <label
              htmlFor="name"
              className="block text-sm font-medium text-gray-700 mb-2"
            >
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="w-full bg-gray-100 text-gray-700 border rounded-lg p-4 focus:ring-2 focus:ring-violet-400 outline-none shadow-sm"
              placeholder="Your Full Name"
              required
            />
          </div>
          <div className="mb-6">
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-700 mb-2"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full bg-gray-100 text-gray-700 border rounded-lg p-4 focus:ring-2 focus:ring-violet-400 outline-none shadow-sm"
              placeholder="Your Email Address"
              required
            />
          </div>
          <div className="mb-6">
            <label
              htmlFor="message"
              className="block text-sm font-medium text-gray-700 mb-2"
            >
              Message
            </label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              rows="6"
              className="w-full bg-gray-100 text-gray-700 border rounded-lg p-4 focus:ring-2 focus:ring-violet-400 outline-none shadow-sm"
              placeholder="Write your message here..."
              required
            ></textarea>
          </div>
          <button
            type="submit"
            className="w-full bg-gradient-to-r from-blue-500 to-purple-500 text-lg font-medium text-white py-3 rounded-lg shadow-md hover:from-blue-600 hover:to-purple-600 transition-all duration-300"
            disabled={isSubmitting}
          >
            {isSubmitting ? "Sending..." : "Send Message"}
          </button>
        </form>
      </div>

      {/* Toast Notifications */}
      <ToastContainer />
    </section>
  );
};

export default Contact;
