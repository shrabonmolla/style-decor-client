import React from "react";
import Title from "../../Shared/Title/Title";

const faqs = [
  {
    question: "What is StyleDecor?",
    answer:
      "StyleDecor is a modern appointment management system for a local decoration company, offering in-studio consultations and on-site decoration services for homes and ceremonies.",
  },
  {
    question: "How do users book a decoration service?",
    answer:
      "Users can browse services, select a preferred date & time, check decorator availability, make payment, and receive confirmation. On-site services are assigned to decorators by the admin.",
  },
  {
    question: "What are the different user roles?",
    answer:
      "There are three roles: Admin (manage decorators, services, bookings), Decorator (view assigned projects, update status), and User (book services, view history, make payments).",
  },
  {
    question: "How is payment handled?",
    answer:
      "Stripe is used for payment processing. Transactions are stored on the server, and users can see payment receipts in their dashboard.",
  },
  {
    question: "What features are available on the dashboards?",
    answer:
      "Admin: Manage decorators, services, bookings, assign projects, track revenue and analytics. Decorator: Update project status, check today's schedule, view earnings. User: View bookings, update/cancel bookings, check payment history.",
  },
];

export default function FAQ() {
  return (
    <section className="py-12 container w-11/12 mx-auto">
      <Title
        text="Frequently Asked Questions"
        subText="Find answers to the most common queries about our Smart Home & Ceremony Decoration Booking System."
        align="center"
      />

      <div className="max-w-3xl mx-auto space-y-4">
        {faqs.map((faq, index) => (
          <div
            key={index}
            tabIndex={0}
            className="collapse collapse-arrow border border-gray-300 rounded-lg bg-white"
          >
            <div
              className="collapse-title text-lg font-medium"
              style={{ color: "#b26e63" }}
            >
              {faq.question}
            </div>
            <div className="collapse-content text-gray-700">
              <p>{faq.answer}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
