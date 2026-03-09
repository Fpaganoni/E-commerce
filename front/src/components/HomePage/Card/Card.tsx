"use client";

// styles
import "../../../app/globals.css";

// vendors
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { FaHeart, FaShoppingCart, FaCheck } from "react-icons/fa";

// hooks
import { useAuth } from "../../../context/AuthContext";

// types
import CartItem from "../../../types/CartTypes";

const Card: React.FC<CartItem> = (product: CartItem) => {
  const [addedFeedback, setAddedFeedback] = useState(false);

  const imgUrl =
    product.image ||
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRVqcELaCwfquL5TiIed_hfx2kjlEJfFbjDqg&s";

  const { isLoggedIn, addToCart, isInCart, toggleFavorites, favs } = useAuth();

  const alreadyInCart = isInCart(product.id);
  const isFavorite = favs.some((f) => f.id === product.id);

  const handleAddToCart = () => {
    if (alreadyInCart) return;
    addToCart(product);
    setAddedFeedback(true);
    setTimeout(() => setAddedFeedback(false), 1800);
  };

  const handleToggleFav = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    toggleFavorites(product);
  };

  return (
    <div className="group flex flex-col bg-white rounded-2xl overflow-hidden border border-slate-100 shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
      {/* Image container */}
      <div className="relative w-full aspect-square bg-slate-50 overflow-hidden p-6 flex items-center justify-center">
        <Link
          href={`/product/${product.id}`}
          className="block w-full h-full relative"
        >
          <Image
            src={imgUrl}
            alt={product.name}
            fill
            className="object-contain transition-transform duration-500 group-hover:scale-105"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
          />
        </Link>

        {/* Favorites button — top right overlay */}
        {isLoggedIn && (
          <button
            onClick={handleToggleFav}
            aria-label={
              isFavorite ? "Remove from favorites" : "Add to favorites"
            }
            className={`absolute top-3 right-3 w-9 h-9 rounded-full flex items-center justify-center border transition-all duration-200 cursor-pointer shadow-sm z-10 ${
              isFavorite
                ? "bg-rose-500 border-rose-500 text-white shadow-rose-200"
                : "bg-white/90 backdrop-blur-sm border-slate-100 text-slate-300 hover:text-rose-500 hover:border-rose-200"
            }`}
          >
            <FaHeart className="text-sm" />
          </button>
        )}
      </div>

      {/* Content */}
      <div className="p-5 flex flex-col flex-grow">
        <div className="flex justify-between items-start gap-2 mb-2">
          <Link href={`/product/${product.id}`}>
            <h2 className="text-base font-semibold text-slate-800 line-clamp-1 hover:text-blue-600 transition-colors">
              {product.name}
            </h2>
          </Link>
          <span className="font-bold text-blue-600 text-sm whitespace-nowrap">
            ${product.price}
          </span>
        </div>

        <p className="text-sm text-slate-500 line-clamp-2 mb-4 flex-grow font-light">
          {product.description}
        </p>

        <div className="flex items-center justify-between pt-4 border-t border-slate-100 mt-auto gap-2">
          <span className="text-xs font-medium text-slate-400 uppercase tracking-wider">
            Stock:{" "}
            <span
              className={product.stock > 0 ? "text-green-600" : "text-red-400"}
            >
              {product.stock > 0 ? product.stock : "Out"}
            </span>
          </span>

          {isLoggedIn ? (
            <button
              onClick={handleAddToCart}
              disabled={alreadyInCart}
              className={`flex items-center gap-1.5 px-3 py-1.5 text-sm font-medium rounded-full transition-all duration-200 cursor-pointer flex-shrink-0 ${
                alreadyInCart
                  ? "bg-green-50 text-green-600 border border-green-200 cursor-default"
                  : addedFeedback
                    ? "bg-green-500 text-white scale-95"
                    : "bg-blue-600 text-white hover:bg-blue-700 shadow-sm shadow-blue-500/20"
              }`}
            >
              {alreadyInCart ? (
                <>
                  <FaCheck className="text-xs" />
                  In Cart
                </>
              ) : addedFeedback ? (
                <>
                  <FaCheck className="text-xs" />
                  Added!
                </>
              ) : (
                <>
                  <FaShoppingCart className="text-xs" />
                  Add to Cart
                </>
              )}
            </button>
          ) : (
            <Link
              href="/login"
              className="text-blue-600 hover:text-blue-700 text-sm font-medium transition-colors"
            >
              Sign in to buy →
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};

export default Card;
