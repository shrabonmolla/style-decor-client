import React from "react";
import Title from "../../Shared/Title/Title";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";

// Swiper styles
import "swiper/css";

const reviews = [
  {
    name: "Hafsa Ahmed",
    role: "Home Owner",
    review:
      "The decoration service was amazing! The team was professional and transformed my living room beautifully.",
    rating: 5,
  },
  {
    name: "Likhan Roy",
    role: "Event Organizer",
    review:
      "StyleDecor made our wedding event unforgettable. Highly recommend for weddings and ceremonies!",
    rating: 5,
  },
  {
    name: "Rahim Khan",
    role: "Home Owner",
    review:
      "Smooth booking process and excellent service. The decorators were on time and very creative.",
    rating: 4,
  },
  {
    name: "Fatema Noor",
    role: "Office Manager",
    review:
      "Professional, punctual, and creative. Our office space looks fantastic after their decoration.",
    rating: 5,
  },
  {
    name: "Shuvo Das",
    role: "Ceremony Planner",
    review:
      "They handle everything from consultation to setup perfectly. Love the attention to detail!",
    rating: 5,
  },
];

export default function Reviews() {
  return (
    <section className="py-16 relative">
      <Title
        text="What Our Clients Say"
        subText="Real reviews from happy clients who used our Smart Home & Ceremony Decoration Booking System."
        align="center"
      />

      <div className="max-w-6xl mx-auto">
        <Swiper
          modules={[Autoplay]} // Only Autoplay, no Pagination or Navigation
          spaceBetween={24}
          slidesPerView={2}
          loop={true}
          autoplay={{ delay: 4000, disableOnInteraction: false }}
          breakpoints={{
            640: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 2 },
          }}
        >
          {reviews.map((review, i) => (
            <SwiperSlide key={i}>
              <div className="p-6 bg-white rounded-xl shadow-lg border border-gray-100 hover:shadow-xl transition">
                <p className="text-gray-700 mb-4">"{review.review}"</p>
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="font-bold text-[#b26e63]">{review.name}</h3>
                    <p className="text-sm text-gray-500">{review.role}</p>
                  </div>
                  <div className="text-yellow-400 font-bold">
                    {`⭐`.repeat(review.rating)}
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}
