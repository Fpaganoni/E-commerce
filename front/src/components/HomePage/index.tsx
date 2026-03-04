"use client";

// types
import IProduct from "../../helpers/products";

// helper
import { productsToPreLoad } from "../../helpers/products";

// components
import Card from "./Card/Card";
import Hero from "./Hero";
import Link from "next/link";
import { FaMobileAlt, FaHeadphones, FaStar, FaStore } from "react-icons/fa";

const HomePage = () => {
  return (
    <div className="flex flex-col min-h-screen bg-background text-foreground transition-colors duration-300">
      <Hero />

      {/* Category Highlights */}
      <div
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 w-full animate-slide-up"
        style={{ animationDelay: "0.2s" }}
      >
        <h2 className="text-3xl font-extrabold text-slate-900 dark:text-slate-100 tracking-tight mb-8">
          Top Categories
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            {
              title: "Cell Phones",
              href: "/cell-phones",
              icon: <FaMobileAlt size={32} />,
            },
            {
              title: "Accessories",
              href: "/accessories",
              icon: <FaHeadphones size={32} />,
            },
            {
              title: "New Products",
              href: "/new-products",
              icon: <FaStar size={32} />,
            },
            {
              title: "Find a Store",
              href: "/find-a-store",
              icon: <FaStore size={32} />,
            },
          ].map((cat, i) => (
            <Link
              key={i}
              href={cat.href}
              className="group flex flex-col items-center justify-center p-8 bg-white dark:bg-slate-800 rounded-2xl shadow-sm border border-slate-100 dark:border-slate-700 hover:border-blue-500 hover:shadow-xl hover:-translate-y-2 transition-all duration-300 cursor-pointer"
            >
              <div className="bg-blue-50 dark:bg-blue-900/40 text-blue-600 dark:text-blue-400 p-4 rounded-full mb-4 group-hover:scale-110 group-hover:bg-blue-600 group-hover:text-white dark:group-hover:bg-blue-500 transition-all duration-300">
                {cat.icon}
              </div>
              <h3 className="font-semibold text-slate-800 dark:text-slate-200 text-lg group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                {cat.title}
              </h3>
            </Link>
          ))}
        </div>
      </div>

      <div
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-20 w-full animate-slide-up"
        style={{ animationDelay: "0.4s" }}
      >
        <div className="flex flex-col justify-between items-start mb-10 gap-2 border-b border-slate-200 dark:border-slate-800 pb-4">
          <h2 className="text-3xl font-extrabold text-slate-900 dark:text-slate-100 tracking-tight">
            Featured Products
          </h2>
          <p className="text-slate-500 dark:text-slate-400 font-medium">
            Discover our most popular picks of the month.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {productsToPreLoad?.slice(0, 8).map((prod: IProduct) => {
            return <Card key={prod.id} {...prod} />;
          })}
        </div>
      </div>
    </div>
  );
};

export default HomePage;
