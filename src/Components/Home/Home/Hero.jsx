import { Link } from "react-router";

const Hero = () => {
  return (
    <section className="bg-base-100 py-14 lg:py-20">
      <div className="container mx-auto   grid lg:grid-cols-2 gap-12 items-center">
        {/* LEFT CONTENT */}
        <div className="text-center lg:text-left">
          <h1 className="font-heading text-4xl sm:text-5xl lg:text-6xl font-bold text-[#2b1d1b] leading-tight">
            Style Your <br />
            <span className="italic font-semibold">Home & Ceremony.</span>
          </h1>

          <p className="mt-5 text-gray-600 max-w-md mx-auto lg:mx-0">
            StyleDecor is a smart booking platform for home and ceremony
            decoration services. Book consultations, choose packages, and track
            your decoration project in real-time.
          </p>

          <div className="mt-7 flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
            <Link
              to="/services"
              className="btn rounded-full w-fit mx-auto lg:mx-0 bg-[#b26e63] text-white hover:bg-[#9c5f55] border-none px-6"
            >
              Book Decoration Service
            </Link>

            <Link
              to="/services"
              className="btn btn-ghost text-[#b26e63] hover:bg-[#f5ebe9] px-6"
            >
              Explore Services →
            </Link>
          </div>
        </div>

        {/* RIGHT CONTENT */}
        <div className="text-center lg:text-left space-y-6">
          <h3 className="text-base sm:text-lg font-semibold text-[#2b1d1b]">
            Smart Home & Ceremony Decoration
          </h3>

          {/* Feature Pills */}
          <div className="flex flex-wrap gap-3 justify-center lg:justify-start">
            {[
              "Custom Design",
              "On-site Service",
              "Live Project Tracking",
              "Secure Payments",
            ].map((item, index) => (
              <span
                key={index}
                className="px-5 py-2 rounded-full bg-[#b26e63] text-white text-sm font-medium"
              >
                {item}
              </span>
            ))}
          </div>

          <p className="text-gray-600 max-w-md mx-auto lg:mx-0">
            Browse decoration packages, check decorator availability, make
            payments, and get beautifully designed spaces with professional
            decorators.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Hero;
