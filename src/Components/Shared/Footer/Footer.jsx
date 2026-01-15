import {
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaWhatsapp,
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="mt-20 ">
      <div
        className="w-full  text-white"
        style={{
          background: "linear-gradient(135deg, #b26e63, #f1e4e2)",
        }}
      >
        {/* Main Footer Content */}
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4 px-8 py-14">
          {/* Brand / About */}
          <div>
            <h2 className="text-2xl font-bold mb-4">Style Decor</h2>
            <p className="text-gray-200 text-sm leading-relaxed">
              We provide premium decoration services for weddings, birthdays,
              corporate events, and special occasions. Your vision, beautifully
              designed.
            </p>
          </div>

          {/* Contact Details */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Us</h3>

            <ul className="space-y-3 text-sm text-gray-200">
              <li className="flex items-center gap-3">
                <FaPhoneAlt />
                <span>+880 17XX-XXXXXX</span>
              </li>
              <li className="flex items-center gap-3">
                <FaEnvelope />
                <span>contact@dreamdecor.com</span>
              </li>
              <li className="flex items-center gap-3">
                <FaMapMarkerAlt />
                <span>Dhaka, Bangladesh</span>
              </li>
            </ul>
          </div>

          {/* Working Hours */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Working Hours</h3>

            <ul className="text-sm text-gray-200 space-y-2">
              <li>
                Saturday – Thursday: <strong>9:00 AM – 9:00 PM</strong>
              </li>
              <li>
                Friday: <strong>Closed</strong>
              </li>
              <li className="mt-2 text-sky-300">
                24/7 Online Booking Available
              </li>
            </ul>
          </div>

          {/* Social Media */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Follow Us</h3>

            <div className="flex gap-4">
              <a className="btn btn-circle btn-outline text-white hover:bg-white hover:text-[#03045e]">
                <FaFacebookF />
              </a>
              <a className="btn btn-circle btn-outline text-white hover:bg-white hover:text-[#03045e]">
                <FaInstagram />
              </a>
              <a className="btn btn-circle btn-outline text-white hover:bg-white hover:text-[#03045e]">
                <FaTwitter />
              </a>
              <a className="btn btn-circle btn-outline text-white hover:bg-white hover:text-[#03045e]">
                <FaWhatsapp />
              </a>
            </div>

            {/* Extra info */}
            <p className="text-sm text-gray-200 mt-4">
              Trusted by <strong>500+</strong> happy clients ⭐
            </p>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-white/20"></div>

        {/* Bottom Bar */}
        <div className="px-8 py-5 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-200">
          <p>© {new Date().getFullYear()} Dream Decor. All rights reserved.</p>

          <div className="flex gap-4">
            <a className="hover:text-sky-300 transition">Privacy Policy</a>
            <a className="hover:text-sky-300 transition">Terms & Conditions</a>
            <a className="hover:text-sky-300 transition">Refund Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
