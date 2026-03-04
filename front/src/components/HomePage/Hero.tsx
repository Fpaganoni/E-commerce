"use client";

import Link from "next/link";
import { FaArrowRight } from "react-icons/fa";

const Hero = () => {
  return (
    <div className="relative w-full h-[80vh] min-h-[600px] flex items-center bg-slate-900 overflow-hidden">
      {/* Background with gradient overlay */}
      <div
        className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat opacity-50"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1550029402-226115b7c579?q=80&w=2069&auto=format&fit=crop')",
        }}
      ></div>
      <div className="absolute inset-0 z-0 bg-gradient-to-r from-slate-950 via-slate-900/80 to-transparent"></div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 w-full">
        <div className="max-w-2xl space-y-8">
          <span className="inline-block py-1 px-3 rounded-full bg-primary-600/20 text-primary-400 font-semibold text-sm tracking-wider uppercase border border-primary-500/30">
            Next Generation Tech
          </span>
          <h1 className="text-5xl md:text-7xl font-extrabold text-white leading-tight tracking-tight">
            Elevate Your <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-500">
              Digital Life
            </span>
          </h1>
          <p className="text-lg md:text-xl text-slate-300 leading-relaxed font-light max-w-xl">
            Discover our premium curated collection of cutting-edge smartphones,
            accessories, and gadgets designed for tomorrow.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 pt-4">
            <Link
              href="/cell-phones"
              className="flex items-center justify-center gap-2 bg-primary-600 hover:bg-primary-500 text-white px-8 py-4 rounded-full font-medium transition-all duration-300 shadow-[0_0_20px_rgba(37,99,235,0.4)] hover:shadow-[0_0_30px_rgba(37,99,235,0.6)] hover:-translate-y-1"
            >
              Shop New Arrivals
              <FaArrowRight className="text-sm" />
            </Link>
            <Link
              href="/accessories"
              className="flex items-center justify-center gap-2 bg-white/10 hover:bg-white/20 text-white border border-white/20 px-8 py-4 rounded-full font-medium transition-all duration-300 backdrop-blur-sm hover:-translate-y-1"
            >
              View Accessories
            </Link>
          </div>
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute bottom-0 left-0 w-full h-24 bg-gradient-to-t from-background to-transparent z-10"></div>
    </div>
  );
};

export default Hero;
