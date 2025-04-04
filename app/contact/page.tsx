"use client";

import { useState } from 'react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className="relative max-w-6xl mx-auto px-4 py-12">
      <div className="bg-default-50 p-6 rounded-lg shadow-lg">
        <h2 className="text-2xl font-bold text-primary mb-4">Get in Touch</h2>
        <p className="text-default-700 mb-4">
          I'm always open to new opportunities and collaborations. Feel free to reach out!
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Contact Form */}
        <div className="md:col-span-2 bg-default-50 p-6 rounded-lg shadow-lg">
          <h3 className="text-xl font-bold text-primary mb-6">Send a Message</h3>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <label htmlFor="name" className="block text-sm font-medium text-default-700">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 rounded-lg bg-default-100 border border-default-200 focus:outline-none focus:border-primary"
                />
              </div>
              <div className="space-y-2">
                <label htmlFor="email" className="block text-sm font-medium text-default-700">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 rounded-lg bg-default-100 border border-default-200 focus:outline-none focus:border-primary"
                />
              </div>
            </div>

            <div className="space-y-2">
              <label htmlFor="subject" className="block text-sm font-medium text-default-700">
                Subject
              </label>
              <input
                type="text"
                id="subject"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 rounded-lg bg-default-100 border border-default-200 focus:outline-none focus:border-primary"
              />
            </div>

            <div className="space-y-2">
              <label htmlFor="message" className="block text-sm font-medium text-default-700">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows={6}
                className="w-full px-4 py-2 rounded-lg bg-default-100 border border-default-200 focus:outline-none focus:border-primary resize-none"
              ></textarea>
            </div>

            <button
              type="submit"
              className="px-6 py-2 bg-primary text-white rounded-lg hover:bg-primary/90 transition-colors"
            >
              Send Message
            </button>
          </form>
        </div>

        {/* Contact Information */}
        <div className="bg-default-50 p-6 rounded-lg shadow-lg space-y-6">
          <h3 className="text-xl font-bold text-primary mb-4">Contact Information</h3>
          
          <div>
            <h4 className="font-medium mb-2 text-default-700">Location</h4>
            <p className="text-default-600">San Francisco, CA</p>
          </div>

          <div>
            <h4 className="font-medium mb-2 text-default-700">Email</h4>
            <a href="mailto:contact@example.com" className="text-primary hover:underline">
              contact@example.com
            </a>
          </div>

          <div>
            <h4 className="font-medium mb-2 text-default-700">Social Media</h4>
            <div className="space-y-2">
              <a href="#" className="block text-primary hover:underline">LinkedIn</a>
              <a href="#" className="block text-primary hover:underline">Twitter</a>
              <a href="#" className="block text-primary hover:underline">GitHub</a>
            </div>
          </div>

          <div>
            <h4 className="font-medium mb-2 text-default-700">Working Hours</h4>
            <p className="text-default-600">Monday - Friday</p>
            <p className="text-default-600">9:00 AM - 6:00 PM PST</p>
          </div>
        </div>
      </div>
    </div>
  );
} 