"use client";

//vedors
import {
  createContext,
  useContext,
  useState,
  useEffect,
  ReactNode,
} from "react";

// types
import IAuthContext from "../types/IAuthContext";
import IUserObject from "../types/IUserObject";
import ICart from "../types/CartTypes";

const AuthContext = createContext<IAuthContext | undefined>(undefined);

export default function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<IUserObject | null>(null);
  const [token, setToken] = useState<string | null>(null);
  const [cartItems, setCartItems] = useState<ICart[]>([]);
  const [favs, setFavs] = useState<ICart[]>([]);

  useEffect(() => {
    localStorage.setItem("Favorites", JSON.stringify(favs));
  }, [favs]);

  useEffect(() => {
    const storedUser = localStorage.getItem("user");
    const storedToken = localStorage.getItem("token");
    const storedCart = localStorage.getItem("cart");

    if (storedUser && storedToken) {
      setUser(JSON.parse(storedUser));
      setToken(storedToken);
    }

    if (storedCart) {
      setCartItems(JSON.parse(storedCart));
    }
  }, []);

  // Guardar cambios del carrito en localStorage
  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cartItems));
  }, [cartItems]);

  useEffect(() => {
    const storedUser = localStorage.getItem("user");
    const storedToken = localStorage.getItem("token");

    if (storedUser && storedToken) {
      setUser(JSON.parse(storedUser));
      setToken(storedToken);
    }
  }, []);

  const toggleFavorites = (product: ICart) => {
    if (favs.some((item) => item.id === product.id)) {
      setFavs((prev) => prev.filter((item) => item.id !== product.id));
    }

    if (!favs.some((item) => item.id === product.id)) {
      setFavs((prev) => [...prev, product]);
    }
  };

  const isInCart = (productId: number): boolean => {
    return cartItems.some((item) => item.id === productId);
  };

  // Agregar producto al carrito
  const addToCart = (product: ICart) => {
    setCartItems((prev) => [...prev, product]);
  };

  // Limpiar carrito después de comprar
  const clearCart = () => {
    setCartItems([]);
    localStorage.removeItem("cart");
  };

  const login = (user: IUserObject, token: string) => {
    setUser(user);
    setToken(token);

    localStorage.setItem("user", JSON.stringify(user));
    localStorage.setItem("token", token);
  };

  const logout = () => {
    setUser(null);
    setToken(null);

    localStorage.removeItem("user");
    localStorage.removeItem("token");
  };

  const isLoggedIn = !!token;

  return (
    <AuthContext.Provider
      value={{
        setUser,
        user,
        token,
        login,
        logout,
        isLoggedIn,
        addToCart,
        clearCart,
        cartItems,
        isInCart,
        toggleFavorites,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export const useAuth = () => {
  const context = useContext(AuthContext);

  if (!context) throw new Error("useAuth must be used within an AuthProvider");

  return context;
};
