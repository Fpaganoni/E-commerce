"use client";

import React from "react";
import {
  FaEnvelope,
  FaPhoneAlt,
  FaMapMarkerAlt,
  FaComments,
} from "react-icons/fa";

const ContactsSection: React.FC = () => {
  return (
    <div className="pt-24 pb-20 min-h-screen bg-slate-50 dark:bg-slate-900 text-slate-800 dark:text-slate-100 flexitems-center justify-center transition-colors duration-300">
      <div className="max-w-4xl mx-auto px-6 w-full">
        <div className="text-center mb-16 animate-slide-up">
          <span className="text-blue-600 dark:text-blue-400 font-semibold tracking-widest uppercase text-sm">
            Get In Touch
          </span>
          <h1 className="text-4xl md:text-5xl font-extrabold mt-4 mb-4">
            Contact Us
          </h1>
          <p className="text-lg text-slate-500 dark:text-slate-400 max-w-2xl mx-auto font-light">
            Have questions about our products or need support? We&apos;re here
            to help. Reach out via any of the channels below.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Main Contact Card */}
          <div
            className="glass-panel p-10 rounded-3xl shadow-xl hover-lift animate-slide-up"
            style={{ animationDelay: "0.2s" }}
          >
            <div className="flex items-center gap-4 mb-8">
              <div className="bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 p-4 rounded-full">
                <FaComments size={28} />
              </div>
              <div>
                <h2 className="text-2xl font-bold">
                  We&apos;d love to hear from you
                </h2>
                <p className="text-sm text-slate-500 dark:text-slate-400">
                  Our friendly team is always here.
                </p>
              </div>
            </div>

            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="mt-1 text-slate-400">
                  <FaEnvelope size={20} />
                </div>
                <div>
                  <h3 className="font-semibold text-slate-800 dark:text-slate-200">
                    Email
                  </h3>
                  <a
                    href="mailto:hello@ecommerce.com"
                    className="text-blue-600 dark:text-blue-400 hover:underline"
                  >
                    hello@ecommerce.com
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="mt-1 text-slate-400">
                  <FaPhoneAlt size={20} />
                </div>
                <div>
                  <h3 className="font-semibold text-slate-800 dark:text-slate-200">
                    Phone
                  </h3>
                  <a
                    href="tel:+1234567890"
                    className="text-blue-600 dark:text-blue-400 hover:underline"
                  >
                    +1 (234) 567-890
                  </a>
                  <p className="text-sm text-slate-500 mt-1">
                    Mon-Fri from 8am to 5pm
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="mt-1 text-slate-400">
                  <FaMapMarkerAlt size={20} />
                </div>
                <div>
                  <h3 className="font-semibold text-slate-800 dark:text-slate-200">
                    Office
                  </h3>
                  <p className="text-slate-600 dark:text-slate-400">
                    123 Innovation Drive
                    <br />
                    Tech District, NY 10001
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Optional Form / Secondary Card */}
          <div
            className="bg-blue-600 dark:bg-blue-800 p-10 rounded-3xl text-white shadow-xl flex flex-col justify-center animate-slide-up relative overflow-hidden"
            style={{ animationDelay: "0.4s" }}
          >
            <div className="absolute top-0 right-0 -mt-10 -mr-10 w-40 h-40 bg-white/10 rounded-full blur-2xl"></div>

            <h3 className="text-3xl font-bold mb-4">Fast Assistance</h3>
            <p className="text-blue-100 font-light mb-8 leading-relaxed">
              Need immediate help with an order? Check out our FAQ section or
              log into your account to track your shipment directly.
            </p>

            <button
              aria-label="FAQ"
              className="bg-white text-blue-600 hover:bg-blue-50 font-semibold py-3 px-6 rounded-full transition-colors self-start shadow-md"
            >
              Visit Help Center
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactsSection;
