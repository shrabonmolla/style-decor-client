import React from "react";
import Title from "../../Components/Shared/Title/Title";

export default function Contact() {
  return (
    <section className="py-16 bg-gray-50">
      <Title
        text="Get In Touch"
        subText="Have questions or want to book a decoration service? Contact us!"
        align="center"
      />

      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 px-4">
        {/* Contact Info */}
        <div className="space-y-6">
          <h3 className="text-2xl font-bold text-[#b26e63]">
            Contact Information
          </h3>
          <p className="text-gray-700">
            We’re here to answer your questions and help you book the perfect
            decoration service.
          </p>

          <div className="space-y-4">
            <div>
              <h4 className="font-semibold">📍 Address</h4>
              <p className="text-gray-600">
                123 StyleDecor Street, Dhaka, Bangladesh
              </p>
            </div>
            <div>
              <h4 className="font-semibold">📞 Phone</h4>
              <p className="text-gray-600">+880 123 456 789</p>
            </div>
            <div>
              <h4 className="font-semibold">✉️ Email</h4>
              <p className="text-gray-600">info@styledecor.com</p>
            </div>
            <div>
              <h4 className="font-semibold">⏰ Working Hours</h4>
              <p className="text-gray-600">Mon - Sat: 9:00 AM - 6:00 PM</p>
            </div>
          </div>

          <div className="flex space-x-4 mt-4">
            <a
              href="#"
              className="text-[#b26e63] hover:text-[#933d37] transition"
            >
              <i className="fab fa-facebook-f"></i> Facebook
            </a>
            <a
              href="#"
              className="text-[#b26e63] hover:text-[#933d37] transition"
            >
              <i className="fab fa-instagram"></i> Instagram
            </a>
            <a
              href="#"
              className="text-[#b26e63] hover:text-[#933d37] transition"
            >
              <i className="fab fa-linkedin-in"></i> LinkedIn
            </a>
          </div>
        </div>

        {/* Contact Form */}
        <div>
          <form className="space-y-4 bg-white p-6 rounded-xl shadow-lg border border-gray-100">
            <div>
              <label className="block text-gray-700 font-semibold mb-1">
                Name
              </label>
              <input
                type="text"
                placeholder="Your Name"
                className="input input-bordered w-full border-gray-300 focus:border-[#b26e63]"
              />
            </div>

            <div>
              <label className="block text-gray-700 font-semibold mb-1">
                Email
              </label>
              <input
                type="email"
                placeholder="Your Email"
                className="input input-bordered w-full border-gray-300 focus:border-[#b26e63]"
              />
            </div>

            <div>
              <label className="block text-gray-700 font-semibold mb-1">
                Message
              </label>
              <textarea
                placeholder="Your Message"
                className="textarea textarea-bordered w-full border-gray-300 focus:border-[#b26e63]"
                rows={5}
              />
            </div>

            <button
              type="submit"
              className="bg-[#b26e63] hover:bg-[#933d37] text-white font-semibold py-3 px-6 rounded-lg transition"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
