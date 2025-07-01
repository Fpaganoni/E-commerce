"use client";

// vedors
import Image from "next/image";
import { useAuth } from "../../context/AuthContext";

// components
import CheckoutButton from "../CheckoutButton";

const ProductList = () => {
  const { cartItems } = useAuth();

  if (!cartItems || cartItems.length === 0) {
    return (
      <p className="text-center text-gray-500">No products in your order.</p>
    );
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 px-4 py-6">
      {cartItems.map((product) => (
        <div
          key={product.id}
          className="bg-white rounded-lg shadow-md border border-gray-200 overflow-hidden transition hover:shadow-lg"
        >
          <div className="relative w-full h-52 bg-gray-100">
            {product.image ? (
              <Image
                src={product.image}
                alt={product.name}
                fill
                className="object-contain p-4"
                sizes="(max-width: 768px) 100vw, 33vw"
              />
            ) : null}
          </div>
          <div className="p-4 flex flex-col gap-2">
            <h2 className="text-lg font-semibold text-gray-800">
              {product.name}
            </h2>
            <p className="text-sm text-gray-600 line-clamp-3">
              {product.description}
            </p>
            <div className="mt-2 flex justify-between items-center">
              <span className="text-blue-600 font-bold">${product.price}</span>
              <span className="text-xs text-gray-400">Quantity: 1</span>
            </div>
          </div>
        </div>
      ))}
      <div className="col-span-full flex justify-center">
        <CheckoutButton />
      </div>
    </div>
  );
};

export default ProductList;
