"use client";

import { useAuth } from "../../context/AuthContext";
import toast from "react-hot-toast";

const CheckoutButton = () => {
  const { user, setUser, token, clearCart, cartItems } = useAuth();

  const handleCheckout = async () => {
    if (!cartItems || cartItems.length === 0) return null;
    if (!user) return null;

    try {
      console.log("Enviando orden:", {
        userId: user.id,
        products: cartItems,
      });

      const res = await fetch("http://localhost:4001/orders", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: token ?? "",
        },
        body: JSON.stringify({
          products: cartItems.map((p) => p.id),
        }),
      });

      if (!res.ok) throw new Error("Error en el servidor");

      const resData = await res.json();

      const newOrder = {
        id: resData.id,
        status: resData.status,
        date: resData.date,
      };

      toast.success("Purchase registered successfully ✅");

      // Limpiar carrito
      clearCart();
      const updatedUser = { ...user, orders: [...user.orders, newOrder] };
      setUser(updatedUser);
      localStorage.setItem("user", JSON.stringify(updatedUser));
    } catch (err) {
      toast.error("Hubo un problema al finalizar la compra ");
      console.error(err);
    }
  };

  return (
    <button
      onClick={handleCheckout}
      className="mt-6 bg-blue-600 text-white font-medium px-6 py-3 rounded-md hover:bg-blue-700 transition cursor-pointer"
    >
      Proceed to checkout
    </button>
  );
};

export default CheckoutButton;
