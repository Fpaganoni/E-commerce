"use client";

import { useEffect, useState } from "react";
import { FaCheck, FaShoppingCart } from "react-icons/fa";

const PopUpAddCart = () => {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setVisible(false), 2000);
    return () => clearTimeout(timer);
  }, []);

  if (!visible) return null;

  return (
    <div className="fixed bottom-6 right-6 z-[1000] animate-slide-up">
      <div className="flex items-center gap-3 bg-slate-900 text-white px-5 py-3.5 rounded-2xl shadow-2xl border border-slate-700">
        <div className="w-8 h-8 rounded-full bg-green-500 flex items-center justify-center flex-shrink-0">
          <FaCheck className="text-white text-sm" />
        </div>
        <div>
          <p className="font-semibold text-sm leading-tight">Added to cart!</p>
          <p className="text-slate-400 text-xs">View it in your cart →</p>
        </div>
        <FaShoppingCart className="text-slate-400 text-lg ml-1" />
      </div>
    </div>
  );
};

export default PopUpAddCart;
