"use client";

import { FaMapMarkerAlt, FaPhone, FaEnvelope } from "react-icons/fa";

export default function FindAStorePage() {
  return (
    <div className="min-h-screen bg-background pt-8 pb-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto mt-8">
        <h1 className="text-4xl font-extrabold text-slate-900 mb-2 tracking-tight">
          Find a Store
        </h1>
        <p className="text-slate-500 mb-12 font-light text-lg">
          Visit us in person to try out our premium products.
        </p>

        <div className="bg-white rounded-3xl p-8 shadow-sm border border-slate-100 mb-12">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="space-y-8">
              <div>
                <h3 className="text-2xl font-bold text-slate-800 mb-4">
                  Flagship Store
                </h3>
                <p className="text-slate-600 mb-6 leading-relaxed">
                  Experience the pinnacle of technology at our main flagship
                  location. Our experts are ready to assist you.
                </p>

                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <FaMapMarkerAlt className="text-primary-600 mt-1" />
                    <div>
                      <p className="font-medium text-slate-900">
                        123 Tech Avenue
                      </p>
                      <p className="text-slate-500 text-sm">
                        Innovation District, NY 10001
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center gap-3">
                    <FaPhone className="text-primary-600" />
                    <p className="font-medium text-slate-900">
                      +1 (555) 123-4567
                    </p>
                  </div>

                  <div className="flex items-center gap-3">
                    <FaEnvelope className="text-primary-600" />
                    <p className="font-medium text-slate-900">
                      flagship@ecommerce.com
                    </p>
                  </div>
                </div>
              </div>

              <div>
                <h4 className="font-semibold text-slate-900 mb-2">
                  Opening Hours
                </h4>
                <ul className="text-sm text-slate-600 space-y-1">
                  <li className="flex justify-between">
                    <span>Mon - Fri:</span> <span>9:00 AM - 8:00 PM</span>
                  </li>
                  <li className="flex justify-between">
                    <span>Saturday:</span> <span>10:00 AM - 6:00 PM</span>
                  </li>
                  <li className="flex justify-between">
                    <span>Sunday:</span> <span>Closed</span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="bg-slate-100 rounded-2xl h-64 md:h-auto flex items-center justify-center overflow-hidden relative">
              {/* This is a placeholder for a real map component */}
              <div className="absolute inset-0 opacity-50 bg-[url('https://images.unsplash.com/photo-1524661135-423995f22d0b?q=80&w=2074&auto=format&fit=crop')] bg-cover bg-center"></div>
              <div className="relative z-10 bg-white/90 backdrop-blur-sm px-6 py-3 rounded-lg shadow-sm font-medium text-slate-800 flex items-center gap-2">
                <FaMapMarkerAlt className="text-primary-600" /> View on Map
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
