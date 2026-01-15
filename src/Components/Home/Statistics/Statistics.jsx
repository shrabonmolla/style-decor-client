import React from "react";
import Title from "../../Shared/Title/Title";
import {
  FaUsers,
  FaStar,
  FaRegHandshake,
  FaCalendarCheck,
} from "react-icons/fa";

const stats = [
  {
    icon: <FaRegHandshake size={32} className="text-[#b26e63]" />,
    number: 500,
    label: "Services Completed",
  },
  {
    icon: <FaUsers size={32} className="text-[#b26e63]" />,
    number: 50,
    label: "Top Decorators",
  },
  {
    icon: <FaStar size={32} className="text-[#b26e63]" />,
    number: 1000,
    label: "Happy Clients",
  },
  {
    icon: <FaCalendarCheck size={32} className="text-[#b26e63]" />,
    number: 1200,
    label: "Bookings Made",
  },
];

export default function Statistics() {
  return (
    <section
      className="py-16"
      style={{
        background:
          "radial-gradient(circle at top left, rgba(178,110,99,0.05), transparent 70%)",
      }}
    >
      <Title
        text="Our Achievements"
        subText="Numbers speak louder than words. See how StyleDecor has helped our clients."
        align="center"
      />

      <div className="max-w-6xl mx-auto grid md:grid-cols-2 lg:grid-cols-4 gap-8 mt-12 text-center">
        {stats.map((stat, index) => (
          <div
            key={index}
            className="bg-white p-6 rounded-xl shadow-lg border border-gray-100 hover:shadow-xl transition flex flex-col items-center space-y-4"
          >
            <div>{stat.icon}</div>
            <h3 className="text-3xl font-bold text-[#b26e63]">
              {stat.number}+
            </h3>
            <p className="text-gray-600">{stat.label}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
