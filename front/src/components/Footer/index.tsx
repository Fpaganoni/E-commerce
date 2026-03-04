import "../../app/globals.css";
import { FaFacebook, FaInstagram, FaTiktok } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="w-full bg-slate-950 text-slate-300 py-16 mt-auto border-t border-slate-900">
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex flex-col md:flex-row justify-between gap-12">
        <div className="w-full md:w-1/2 flex flex-col sm:flex-row justify-between gap-8 md:gap-16">
          <div className="flex-1">
            <h2 className="font-bold tracking-wider text-lg mb-6 text-white">
              Company
            </h2>
            <ul className="text-sm flex flex-col gap-4 text-slate-400 font-light">
              <li className="hover:text-primary-400 transition-colors cursor-pointer">
                Shop Electronic
              </li>
              <li className="hover:text-primary-400 transition-colors cursor-pointer">
                Gift Cards
              </li>
              <li className="hover:text-primary-400 transition-colors cursor-pointer">
                For Business
              </li>
              <li className="hover:text-primary-400 transition-colors cursor-pointer">
                Stores
              </li>
            </ul>
          </div>
          <div className="flex-1">
            <h2 className="font-bold tracking-wider text-lg mb-6 text-white">
              Follow us
            </h2>
            <ul className="text-sm flex flex-col gap-4 text-slate-400 font-light">
              <li className="flex items-center gap-2 hover:text-primary-400 transition-colors cursor-pointer">
                <FaFacebook /> Facebook
              </li>
              <li className="flex items-center gap-2 hover:text-primary-400 transition-colors cursor-pointer">
                <FaInstagram /> Instagram
              </li>
              <li className="flex items-center gap-2 hover:text-primary-400 transition-colors cursor-pointer">
                <FaTiktok /> TikTok
              </li>
            </ul>
          </div>
          <div className="flex-1">
            <h2 className="font-bold tracking-wider text-lg mb-6 text-white">
              Support
            </h2>
            <ul className="text-sm flex flex-col gap-4 text-slate-400 font-light">
              <li className="hover:text-primary-400 transition-colors cursor-pointer">
                FAQ
              </li>
              <li className="hover:text-primary-400 transition-colors cursor-pointer">
                Chat with us
              </li>
              <li className="hover:text-primary-400 transition-colors cursor-pointer">
                Accessibility
              </li>
              <li className="hover:text-primary-400 transition-colors cursor-pointer">
                Privacy Choices
              </li>
            </ul>
          </div>
        </div>

        <div className="w-full md:w-1/3 bg-slate-900 p-8 rounded-2xl border border-slate-800 shadow-xl">
          <h1 className="font-bold tracking-wider text-xl mb-3 text-white">
            Stay up to date
          </h1>
          <p className="text-slate-400 text-sm mb-6 leading-relaxed">
            Join the e-commerce family! Be the first to know about exclusive
            deals and latest arrivals.
          </p>
          <form className="w-full flex">
            <input
              name="email"
              id="email"
              type="email"
              placeholder="Enter your email"
              className="p-3 w-full bg-slate-950 border border-slate-800 rounded-l-lg text-white placeholder-slate-500 focus:outline-none focus:border-primary-500 transition-colors"
            />
            <button
              type="button"
              className="py-3 px-6 bg-primary-600 hover:bg-primary-500 text-white font-medium rounded-r-lg transition-colors cursor-pointer whitespace-nowrap"
            >
              Subscribe
            </button>
          </form>
        </div>
      </div>
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex flex-col md:flex-row items-center justify-between text-xs text-slate-500 mt-16 pt-8 border-t border-slate-800 gap-4">
        <ul className="flex flex-wrap justify-center gap-6">
          <li className="hover:text-slate-300 transition-colors cursor-pointer">
            Privacy Policy
          </li>
          <li className="hover:text-slate-300 transition-colors cursor-pointer">
            Cookie Policy
          </li>
          <li className="hover:text-slate-300 transition-colors cursor-pointer">
            Terms Of Use
          </li>
          <li className="hover:text-slate-300 transition-colors cursor-pointer">
            Accessibility
          </li>
        </ul>
        <span>Patent - Copyright © {new Date().getFullYear()} E-Commerce</span>
      </div>
    </footer>
  );
};

export default Footer;
