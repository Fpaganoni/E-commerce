//styles
import "../../../app/globals.css";

// vedors
import React from "react";
import Image from "next/image";
import Link from "next/link";

//hooks
import { useAuth } from "../../../context/AuthContext";
// import { useState } from "react";

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
    <div className="sm:w-full md:w-72 bg-white shadow-md rounded-lg overflow-hidden sm:mx-6 hover:shadow-lg transition-shadow duration-300">
      {product.image ? (
        <Image
          src={imgUrl}
          alt={product.name}
          width={170}
          height={170}
          className="w-full h-48 object-contain"
        />
      ) : null}
      <div className="p-6 flex flex-col gap-2 bg-[var(--mustard)]">
        <h2 className="text-lg font-semibold text-gray-800">{product.name}</h2>
        <p className="text-sm text-gray-600 line-clamp-3">
          {product.description}
        </p>
        <div className="flex justify-between text-sm text-gray-700 mt-2">
          <span>Quantity - {product.stock} </span>
          <span>Price - {product.price}</span>
        </div>

        <div className="w-full flex items-center justify-between pt-3">
          <Link
            className="text-slate-900 font-bold hover:text-gray-700 "
            href={`/product/${product.id}`}
          >
            See more...
          </Link>
          {isLoggedIn && (
            <AddToCartButton
              product={product}
              onAddToCart={addToCart}
              className="p-1 bg-[var(--buttons)] text-gray-50 rounded-md cursor-pointer"
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default Card;
