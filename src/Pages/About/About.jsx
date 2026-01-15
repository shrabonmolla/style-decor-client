import React from "react";
import Title from "../../Components/Shared/Title/Title";

export default function About() {
  return (
    <section className="py-16 max-w-5xl mx-auto px-4 space-y-8">
      <Title
        text="About StyleDecor"
        subText="Learn more about our Smart Home & Ceremony Decoration Booking System"
        align="center"
      />

      <div className="space-y-6 text-gray-700">
        <p>
          <strong>Welcome to StyleDecor</strong>, your modern solution for
          hassle-free home and ceremony decoration services. We’ve designed this
          platform to make booking, managing, and enjoying decoration services
          smooth and convenient for everyone — whether you’re planning a home
          makeover, a wedding, or a corporate event.
        </p>

        <p>
          <strong>Why StyleDecor?</strong> Local decoration businesses often
          face challenges like long waiting times, walk-in crowds, difficulty
          managing multiple decorators, and lack of online booking systems.
          StyleDecor solves these problems by offering smart appointment
          scheduling, decorator management, real-time project updates,
          integrated payments, and dashboards for analytics.
        </p>

        <p>
          <strong>How it works:</strong> Users can explore decoration packages,
          choose a date & time, select a service mode, and make payments
          directly through the platform. For on-site services, the admin assigns
          a decorator team, and users can follow the progress in real-time.
        </p>

        <p>
          <strong>Our Vision:</strong> At StyleDecor, our mission is to simplify
          the decoration experience for clients while helping decorators manage
          projects efficiently. We aim to bridge the gap between clients and
          decoration professionals by creating a smart, reliable, and intuitive
          system.
        </p>

        <p>
          <strong>Core Features:</strong> Dynamic services section with real
          images, top decorators with ratings, service coverage map, role-based
          dashboards, global loading/error handling, and mobile-responsive
          modern UI powered by Tailwind CSS and DaisyUI.
        </p>

        <p>
          Join us on our journey to make decorating homes, offices, and
          ceremonies effortless, enjoyable, and professional. With StyleDecor,
          your dream space is just a few clicks away!
        </p>
      </div>
    </section>
  );
}
