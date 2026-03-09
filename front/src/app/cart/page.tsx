"use client";

import Link from "next/link";
import Image from "next/image";
import { FaShoppingCart, FaTrash, FaArrowLeft } from "react-icons/fa";
import { useAuth } from "../../context/AuthContext";

export default function CartPage() {
  const { cartItems, removeFromCart } = useAuth();

  const subtotal = cartItems.reduce((sum, item) => sum + item.price, 0);
  const shipping = subtotal === 0 ? 0 : subtotal >= 100 ? 0 : 5;
  const total = subtotal + shipping;

  if (cartItems.length === 0) {
    return (
      <div className="min-h-[70vh] flex flex-col items-center justify-center gap-6 px-4">
        <div className="w-24 h-24 rounded-full bg-blue-50 flex items-center justify-center">
          <FaShoppingCart className="text-4xl text-blue-400" />
        </div>
        <h1 className="text-2xl font-bold text-slate-800">
          Your cart is empty
        </h1>
        <p className="text-slate-500 text-center max-w-sm">
          Looks like you haven&apos;t added anything yet. Start shopping and
          find something you love!
        </p>
        <Link
          href="/home"
          className="inline-flex items-center gap-2 px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-xl transition-all shadow-lg shadow-blue-500/30 hover:-translate-y-0.5"
        >
          <FaArrowLeft />
          Continue Shopping
        </Link>
      </div>
    );
  }

  return (
    <div className="max-w-6xl mx-auto px-4 py-10">
      <div className="mb-8 flex items-center gap-3">
        <div className="w-10 h-10 rounded-xl bg-blue-600 flex items-center justify-center">
          <FaShoppingCart className="text-white text-lg" />
        </div>
        <div>
          <h1 className="text-2xl font-bold text-slate-900">Your Cart</h1>
          <p className="text-slate-500 text-sm">
            {cartItems.length} item{cartItems.length !== 1 ? "s" : ""}
          </p>
        </div>
      </div>

      <div className="grid md:grid-cols-3 gap-8">
        {/* Products */}
        <div className="md:col-span-2 space-y-4">
          {cartItems.map((item) => (
            <div
              key={item.id}
              className="flex items-center justify-between bg-white border border-slate-100 shadow-sm hover:shadow-md rounded-2xl p-4 transition-all duration-200"
            >
              <div className="flex items-center gap-4">
                <div className="w-20 h-20 rounded-xl bg-slate-50 border border-slate-100 overflow-hidden flex-shrink-0">
                  {item.image ? (
                    <Image
                      src={item.image}
                      alt={item.name}
                      width={80}
                      height={80}
                      className="w-full h-full object-cover"
                    />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center text-slate-300 text-2xl">
                      📦
                    </div>
                  )}
                </div>
                <div>
                  <h2 className="text-base font-semibold text-slate-800 leading-tight">
                    {item.name}
                  </h2>
                  <p className="text-xs text-slate-400 mt-0.5 line-clamp-2 max-w-[20ch]">
                    {item.description}
                  </p>
                  <span className="inline-block mt-1 text-xs text-slate-500 bg-slate-50 px-2 py-0.5 rounded-full border border-slate-100">
                    Qty: {item.quantity ?? 1}
                  </span>
                </div>
              </div>

              <div className="flex flex-col items-end gap-3">
                <p className="text-lg font-bold text-blue-600">
                  ${item.price.toFixed(2)}
                </p>
                <button
                  onClick={() => removeFromCart(item.id)}
                  className="flex items-center gap-1.5 text-xs text-red-500 hover:text-red-700 hover:bg-red-50 px-2 py-1 rounded-lg transition-colors cursor-pointer"
                >
                  <FaTrash />
                  Remove
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Order Summary */}
        <div className="bg-white border border-slate-100 shadow-sm rounded-2xl p-6 h-fit sticky top-24">
          <h2 className="text-lg font-bold text-slate-800 mb-5">
            Order Summary
          </h2>

          <div className="space-y-3 text-sm text-slate-600">
            <div className="flex justify-between">
              <span>Subtotal</span>
              <span className="font-medium text-slate-800">
                ${subtotal.toFixed(2)}
              </span>
            </div>
            <div className="flex justify-between">
              <span>Shipping</span>
              <span
                className={`font-medium ${shipping === 0 ? "text-green-600" : "text-slate-800"}`}
              >
                {shipping === 0 ? "Free 🎉" : `$${shipping.toFixed(2)}`}
              </span>
            </div>
            {subtotal > 0 && subtotal < 100 && (
              <p className="text-xs text-blue-500 bg-blue-50 rounded-lg px-3 py-2">
                Add ${(100 - subtotal).toFixed(2)} more for free shipping!
              </p>
            )}
          </div>

          <div className="mt-5 pt-5 border-t border-slate-100 flex justify-between items-center">
            <span className="font-bold text-slate-900">Total</span>
            <span className="text-xl font-bold text-blue-600">
              ${total.toFixed(2)}
            </span>
          </div>

          <Link
            href="/dashboard"
            className="mt-6 w-full block text-center bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-4 rounded-xl transition-all shadow-lg shadow-blue-500/20 hover:-translate-y-0.5"
          >
            Proceed to Checkout
          </Link>

          <Link
            href="/home"
            className="mt-3 w-full block text-center text-sm text-slate-500 hover:text-blue-600 transition-colors py-2"
          >
            ← Continue Shopping
          </Link>
        </div>
      </div>
    </div>
  );
}
