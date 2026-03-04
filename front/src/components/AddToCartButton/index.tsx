// vedors
import React, { useState } from "react";

// types
import CartItem from "../../types/CartTypes";

// components
import PopUpAddCart from "../PopUpAddCart";

// hooks
import { useAuth } from "../../context/AuthContext";

interface AddToCartButtonProps {
  product: CartItem;
  onAddToCart: (product: CartItem) => void;
  className: string;
}

const AddToCartButton: React.FC<AddToCartButtonProps> = ({
  product,
  onAddToCart,
  className,
}) => {
  const [showPopup, setShowPopup] = useState(false);
  const { isInCart } = useAuth();
  const alreadyInCart = isInCart(product.id);

  const handleClick = () => {
    if (alreadyInCart) return;
    onAddToCart(product);
    setShowPopup(true);
    setTimeout(() => setShowPopup(false), 2000);
  };

  return (
    <>
      <button
        disabled={alreadyInCart}
        onClick={handleClick}
        type="button"
        className={`rounded-md transition-all duration-300 cursor-pointer ${
          alreadyInCart
            ? "bg-slate-300 text-slate-500 dark:bg-slate-700 dark:text-slate-400 cursor-not-allowed shadow-none"
            : `bg-blue-600 text-white hover:bg-blue-700 ${className}`
        }`}
      >
        {alreadyInCart ? "In Cart" : "Add to Cart"}
      </button>
      {showPopup && <PopUpAddCart />}
    </>
  );
};

export default AddToCartButton;
