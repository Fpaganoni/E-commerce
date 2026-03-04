"use client";

import React from "react";
import { FaLaptop, FaHeart, FaShieldAlt } from "react-icons/fa";

const AboutUs: React.FC = () => {
  return (
    <div className="pt-24 pb-20 min-h-screen bg-slate-50 dark:bg-slate-900 text-slate-800 dark:text-slate-100 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header Section */}
        <div className="text-center mb-20 animate-slide-up">
          <span className="text-blue-600 dark:text-blue-400 font-semibold tracking-widest uppercase text-sm">
            Discover Our Story
          </span>
          <h1 className="text-4xl md:text-6xl font-extrabold mt-4 mb-6 bg-clip-text text-transparent bg-gradient-to-r from-slate-900 to-slate-600 dark:from-white dark:to-slate-400">
            About E-Commerce
          </h1>
          <p className="text-xl font-light text-slate-500 dark:text-slate-400 max-w-3xl mx-auto">
            We are passionate about technology and design. Our platform brings
            together innovation and user experience to offer you the latest
            gadgets with top-notch service.
          </p>
        </div>

        {/* Core Values / Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-24">
          {[
            {
              title: "Our Mission",
              icon: <FaLaptop size={40} />,
              color: "text-blue-500",
              bg: "bg-blue-50 dark:bg-blue-900/20",
              desc: "To connect people with the technology they love. From smartphones to accessories, we handpick each product to ensure you receive the best experience possible.",
            },
            {
              title: "What Sets Us Apart",
              icon: <FaHeart size={40} />,
              color: "text-rose-500",
              bg: "bg-rose-50 dark:bg-rose-900/20",
              desc: "We are more than just a tech store — we are a community. Our customer-first approach means every click, every delivery, and every message matters.",
            },
            {
              title: "Our Promise",
              icon: <FaShieldAlt size={40} />,
              color: "text-emerald-500",
              bg: "bg-emerald-50 dark:bg-emerald-900/20",
              desc: "Transparency, honesty, and building lasting relationships with our customers. We guarantee the quality of every product and support you along your tech journey.",
            },
          ].map((val, i) => (
            <div
              key={i}
              className="glass-panel p-8 rounded-3xl hover-lift flex flex-col items-center text-center animate-slide-up"
              style={{ animationDelay: `${i * 0.2 + 0.2}s` }}
            >
              <div
                className={`${val.bg} ${val.color} p-5 rounded-2xl mb-6 shadow-sm`}
              >
                {val.icon}
              </div>
              <h3 className="text-2xl font-bold mb-4">{val.title}</h3>
              <p className="text-slate-500 dark:text-slate-400 font-light leading-relaxed">
                {val.desc}
              </p>
            </div>
          ))}
        </div>

        {/* Vision Statement */}
        <div
          className="glass-panel rounded-3xl p-10 md:p-16 text-center max-w-4xl mx-auto shadow-2xl relative overflow-hidden animate-slide-up"
          style={{ animationDelay: "0.8s" }}
        >
          <div className="absolute top-0 right-0 -mt-20 -mr-20 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 left-0 -mb-20 -ml-20 w-64 h-64 bg-purple-500/10 rounded-full blur-3xl"></div>

          <h2 className="text-3xl font-bold mb-8 relative z-10">
            Our Vision for the Future
          </h2>
          <p className="text-lg md:text-xl font-light text-slate-600 dark:text-slate-300 leading-relaxed relative z-10">
            We aim to make the process smooth and enjoyable. Every element of
            our platform is designed to support your goals, from product
            comparisons to expert tips and responsive assistance whenever you
            need it. Shopping with us means being part of a brand that puts
            care, attention, and a personal touch into everything we do.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
