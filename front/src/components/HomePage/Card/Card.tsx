//styles
import "../../../app/globals.css";

// vendors
import React from "react";
import Image from "next/image";
import Link from "next/link";

//hooks
import { useAuth } from "../../../context/AuthContext";

// types
import CartItem from "../../../types/CartTypes";

// component
import AddToCartButton from "../../AddToCartButton";

const Card: React.FC<CartItem> = (product: CartItem) => {
  const imgUrl =
    product.image ||
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRVqcELaCwfquL5TiIed_hfx2kjlEJfFbjDqg&s";

  const { isLoggedIn, addToCart } = useAuth();

  return (
    <div className="group flex flex-col bg-white rounded-2xl overflow-hidden hover-lift border border-slate-100 shadow-sm">
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
      </div>

      {/* Content */}
      <div className="p-5 flex flex-col flex-grow bg-white">
        <div className="flex justify-between items-start gap-2 mb-2">
          <Link href={`/product/${product.id}`}>
            <h2 className="text-lg font-semibold text-slate-800 line-clamp-1 hover:text-primary-600 transition-colors">
              {product.name}
            </h2>
          </Link>
          <span className="font-bold text-slate-900 bg-slate-100 px-2 py-1 rounded text-sm whitespace-nowrap">
            ${product.price}
          </span>
        </div>

        <p className="text-sm text-slate-500 line-clamp-2 mb-4 flex-grow font-light">
          {product.description}
        </p>

        <div className="flex items-center justify-between pt-4 border-t border-slate-100 mt-auto">
          <span className="text-xs font-medium text-slate-400 uppercase tracking-wider">
            In Stock: <span className="text-slate-600">{product.stock}</span>
          </span>

          {isLoggedIn ? (
            <AddToCartButton
              product={product}
              onAddToCart={addToCart}
              className="px-4 py-2 bg-primary-600 hover:bg-primary-700 text-white text-sm font-medium rounded-full transition-colors duration-200 shadow-sm"
            />
          ) : (
            <Link
              href="/login"
              className="text-primary-600 hover:text-primary-700 text-sm font-medium transition-colors"
            >
              Sign in to buy
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};

export default Card;
