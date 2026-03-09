"use client";

import Image from "next/image";
import { FaHeart, FaTrash } from "react-icons/fa";
import { useAuth } from "../../context/AuthContext";

const Favorites = () => {
  const { favs, toggleFavorites } = useAuth();

  if (favs.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center py-16 gap-4">
        <div className="w-20 h-20 rounded-full bg-rose-50 flex items-center justify-center">
          <FaHeart className="text-3xl text-rose-300" />
        </div>
        <h3 className="text-lg font-semibold text-slate-700">
          No favorites yet
        </h3>
        <p className="text-slate-400 text-sm text-center max-w-xs">
          Browse products and click the heart icon to save your favourites here.
        </p>
      </div>
    );
  }

  return (
    <div className="p-1">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-xl font-bold text-slate-800">My Favorites</h2>
        <span className="text-sm text-slate-400 bg-rose-50 font-medium px-3 py-1 rounded-full border border-rose-100">
          {favs.length} saved
        </span>
      </div>

      <div className="grid sm:grid-cols-2 xl:grid-cols-3 gap-4">
        {favs.map((product) => (
          <div
            key={product.id}
            className="group relative bg-white border border-slate-100 rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-all duration-200"
          >
            <div className="h-44 bg-slate-50 overflow-hidden">
              {product.image ? (
                <Image
                  src={product.image}
                  alt={product.name}
                  width={300}
                  height={176}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              ) : (
                <div className="w-full h-full flex items-center justify-center text-slate-300 text-4xl">
                  📦
                </div>
              )}
            </div>

            <div className="p-4">
              <h3 className="font-semibold text-slate-800 text-sm leading-tight line-clamp-2">
                {product.name}
              </h3>
              <p className="text-blue-600 font-bold text-base mt-1">
                ${product.price.toFixed(2)}
              </p>
            </div>

            <button
              onClick={() => toggleFavorites(product)}
              className="absolute top-3 right-3 w-8 h-8 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center shadow-sm hover:bg-red-50 hover:text-red-500 text-slate-400 transition-all cursor-pointer border border-slate-100"
              aria-label="Remove from favorites"
            >
              <FaTrash className="text-xs" />
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Favorites;
