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
        className={`p-1 rounded-md cursor-pointer ${
          alreadyInCart
            ? "bg-gray-400 cursor-not-allowed"
            : "bg-[var(--buttons)] text-gray-50"
        }${className}`}
      >
        {alreadyInCart ? "In cart" : "Add cart"}
      </button>
      {showPopup && <PopUpAddCart />}
    </>
  );
};

export default AddToCartButton;
