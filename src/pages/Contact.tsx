import React, { useState } from "react";
import { motion } from "framer-motion";
import { Phone, Mail, MapPin } from "lucide-react";
import { toast } from "react-toastify";
import emailjs from "@emailjs/browser";
import { companyInfo } from "../data/content";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    organization: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // 1️⃣ Send confirmation email to the user
      await emailjs.send(
        "service_6744gjq", // Replace with your EmailJS Service ID
        "template_user_confirmation", // Template for user confirmation email
        {
          from_name: formData.name,
          from_email: formData.email,
          to_email: formData.email, // Sends confirmation email to user
        },
        "v4JbuC3C5pTYfTvCr" // Replace with your EmailJS Public Key
      );

      // 2️⃣ Send form submission to admin
      await emailjs.send(
        "service_6744gjq", // Replace with your EmailJS Service ID
        "template_admin", // Template for admin notification
        {
          from_name: formData.name,
          from_email: formData.email,
          phone: formData.phone,
          organization: formData.organization,
          message: formData.message,
          to_email: companyInfo.email, // Sends form details to admin
        },
        "v4JbuC3C5pTYfTvCr" // Replace with your EmailJS Public Key
      );

      toast.success("Message sent successfully! You will receive a confirmation email.");
      setFormData({
        name: "",
        email: "",
        phone: "",
        organization: "",
        message: "",
      });
    } catch (error) {
      toast.error("Failed to send message. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="hero-pattern text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 tracking-tight">Contact Us</h1>
            <p className="text-xl font-medium">Get in touch with us for any inquiries</p>
          </motion.div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {/* Contact Information */}
            <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.2 }}>
              <h2 className="text-3xl font-bold mb-8 tracking-tight">Get in Touch</h2>
              <div className="space-y-6">
                <div className="flex items-start">
                  <Phone className="h-6 w-6 text-emerald-600 mt-1 mr-4" />
                  <div>
                    <h3 className="font-semibold mb-1">Phone</h3>
                    <p className="text-gray-600">{companyInfo.phone}</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <Mail className="h-6 w-6 text-emerald-600 mt-1 mr-4" />
                  <div>
                    <h3 className="font-semibold mb-1">Email</h3>
                    <p className="text-gray-600">{companyInfo.email}</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <MapPin className="h-6 w-6 text-emerald-600 mt-1 mr-4" />
                  <div>
                    <h3 className="font-semibold mb-1">Address</h3>
                    <p className="text-gray-600">{companyInfo.address}</p>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Contact Form */}
            <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.4 }}>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700">Name *</label>
                  <input type="text" name="name" required value={formData.name} onChange={handleChange}
                         className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-emerald-500 focus:ring-emerald-500" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700">Email *</label>
                  <input type="email" name="email" required value={formData.email} onChange={handleChange}
                         className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-emerald-500 focus:ring-emerald-500" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700">Phone Number *</label>
                  <input type="tel" name="phone" required value={formData.phone} onChange={handleChange}
                         className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-emerald-500 focus:ring-emerald-500" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700">Organization *</label>
                  <input type="text" name="organization" required value={formData.organization} onChange={handleChange}
                         className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-emerald-500 focus:ring-emerald-500" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700">Message</label>
                  <textarea name="message" rows={4} value={formData.message} onChange={handleChange}
                            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-emerald-500 focus:ring-emerald-500" />
                </div>
                <div>
                  <button type="submit" disabled={isSubmitting}
                          className="w-full btn-primary disabled:opacity-50">
                    {isSubmitting ? "Sending..." : "Send Message"}
                  </button>
                </div>
              </form>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
