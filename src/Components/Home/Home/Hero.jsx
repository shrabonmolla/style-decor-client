import {
  LazyMotion,
  domAnimation,
  m,
  useScroll,
  useTransform,
} from "framer-motion";

const Hero = () => {
  // Scroll-based parallax
  const { scrollY } = useScroll();
  const yText = useTransform(scrollY, [0, 300], [0, -50]);
  const yImage = useTransform(scrollY, [0, 300], [0, 80]);

  return (
    <LazyMotion features={domAnimation}>
      <section
        className="relative overflow-hidden"
        style={{
          background: "linear-gradient(135deg, #03045e, #023e8a)",
        }}
      >
        {/* Glow shapes (parallax) */}
        <m.div
          style={{ y: yImage }}
          className="absolute -top-24 -left-24 w-96 h-96 bg-white/10 rounded-full blur-3xl"
        />
        <m.div
          style={{ y: yImage }}
          className="absolute bottom-0 right-0 w-96 h-96 bg-white/10 rounded-full blur-3xl"
        />

        <div className="container mx-auto px-6 py-28 relative z-10">
          <div className="grid lg:grid-cols-2 gap-14 items-center">
            {/* TEXT */}
            <m.div
              style={{ y: yText }}
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="text-white"
            >
              <m.h1
                initial={{ opacity: 0, x: -40 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.2 }}
                className="text-4xl md:text-5xl xl:text-6xl font-extrabold leading-tight"
              >
                Elevate Your Events
                <span className="block text-sky-300">
                  With Stunning Decorations
                </span>
              </m.h1>

              <m.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.4 }}
                className="mt-6 max-w-xl text-gray-200"
              >
                Book professional decoration services for weddings, birthdays,
                corporate events, and special occasions — crafted with elegance
                and care.
              </m.p>

              {/* Single CTA */}
              <m.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 }}
                className="mt-8"
              >
                <button className="btn btn-lg bg-white text-[#03045e] hover:bg-gray-100 border-none shadow-lg">
                  Book Decoration Service
                </button>
              </m.div>
            </m.div>

            {/* IMAGE */}
            <m.div
              style={{ y: yImage }}
              initial={{ opacity: 0, scale: 0.92 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.4 }}
              className="relative"
            >
              <div className="rounded-3xl overflow-hidden shadow-2xl border border-white/10">
                <img
                  src="https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9"
                  alt="Event Decoration"
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Floating badge */}
              <m.div
                animate={{ y: [0, -10, 0] }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="absolute -bottom-6 -left-6 bg-white text-[#03045e] px-5 py-3 rounded-xl shadow-xl font-semibold"
              >
                ⭐ Trusted by 500+ Clients
              </m.div>
            </m.div>
          </div>
        </div>
      </section>
    </LazyMotion>
  );
};

export default Hero;
