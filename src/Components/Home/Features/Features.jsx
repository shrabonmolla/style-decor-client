import React from "react";
import Title from "../../Shared/Title/Title";
import {
  FaClock,
  FaUserShield,
  FaMapMarkerAlt,
  FaDollarSign,
} from "react-icons/fa";

const features = [
  {
    icon: <FaClock size={32} className="text-[#b26e63]" />,
    title: "Smart Scheduling",
    description:
      "Book consultations or on-site decoration services quickly and efficiently with real-time availability.",
  },
  {
    icon: <FaUserShield size={32} className="text-[#b26e63]" />,
    title: "Verified Decorators",
    description:
      "All decorators are verified and their specialties are listed for easy selection and trust.",
  },
  {
    icon: <FaMapMarkerAlt size={32} className="text-[#b26e63]" />,
    title: "Service Coverage",
    description:
      "Know exactly where our services are available with a detailed coverage map for your convenience.",
  },
  {
    icon: <FaDollarSign size={32} className="text-[#b26e63]" />,
    title: "Secure Payments",
    description:
      "Integrated payment system ensures smooth and secure transactions with instant receipts.",
  },
];

export default function Features() {
  return (
    <section className="py-16 bg-gray-50">
      <Title
        text="Why Choose StyleDecor"
        subText="Our platform is designed to make decoration services easy, reliable, and enjoyable."
        align="center"
      />

      <div className="max-w-6xl mx-auto grid md:grid-cols-2 lg:grid-cols-4 gap-8 mt-12">
        {features.map((feature, index) => (
          <div
            key={index}
            className="bg-white rounded-xl p-6 shadow-lg border border-gray-100 hover:shadow-xl transition flex flex-col items-start space-y-4"
          >
            <div>{feature.icon}</div>
            <h3 className="text-xl font-semibold text-[#b26e63]">
              {feature.title}
            </h3>
            <p className="text-gray-600 text-sm">{feature.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
