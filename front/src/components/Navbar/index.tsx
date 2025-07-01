"use client";

// vedors
import Link from "next/link";

// icons
import {
  FaUser,
  FaSearch,
  FaHeart,
  FaShoppingCart,
  FaSignOutAlt,
  FaUserPlus,
} from "react-icons/fa";

// context
import { useAuth } from "../../context/AuthContext";

const Navbar = () => {
  const { isLoggedIn, logout, clearCart } = useAuth();

  const handleLogout = () => {
    clearCart();
    logout();
  };

  return (
    <header className="flex flex-col items-center p-7  bg-slate-300 text-black font-bold">
      <nav className="w-full flex items-center justify-between px-8 py-4 shadow-sm bg-white">
        {/* Logo */}
        <div className="text-lg font-semibold tracking-widest">E -COMMERCE</div>

        {/* Nav Links */}
        <div className="hidden md:flex gap-6 text-sm font-medium group">
          {[
            "Home",
            "About Us",
            "Cell Phones",
            "Contacts",
            "Accessories",
            "New Products",
            "Find a store",
          ].map((label, i) => (
            <Link
              key={i}
              href={`/${label.toLowerCase().replace(/\s/g, "-")}`}
              className="transition-colors duration-200 group-hover:text-gray-400 hover:text-black"
            >
              {label}
            </Link>
          ))}
        </div>

        {/* Right icons */}
        <div className="flex items-center gap-4">
          {isLoggedIn ? (
            <>
              <Link
                href="/home"
                className="flex items-center gap-2 rounded-full border border-transparent px-4 py-2 text-sm hover:bg-gray-100 hover:border-slate-300 group"
                onClick={clearCart}
              >
                <FaSignOutAlt className="text-gray-400 text-xl group-hover:text-slate-900" />
                <span
                  onClick={handleLogout}
                  className="text-gray-400 group-hover:text-slate-900"
                >
                  Logout
                </span>
              </Link>
              <button aria-label="Search" className="cursor-pointer">
                <FaSearch className="text-gray-400 text-xl hover:text-slate-900 transition duration-200" />
              </button>

              <button aria-label="Favorites" className="cursor-pointer">
                <FaHeart className="text-gray-400 text-xl hover:text-slate-900 transition duration-200" />
              </button>

              <Link className="w-[20px] h-[20px]" href={"/dashboard"}>
                <button aria-label="Cart" className="cursor-pointer">
                  <FaShoppingCart className="text-gray-400 text-xl hover:text-slate-900 transition duration-200" />
                </button>
              </Link>
            </>
          ) : (
            <>
              <Link
                href="/signup"
                className="flex items-center gap-2 rounded-full border border-transparent px-4 py-2 text-sm hover:bg-gray-100 hover:border-slate-300 group"
              >
                <FaUserPlus className="text-gray-400 text-xl group-hover:text-slate-900" />
                <span className="text-gray-400 group-hover:text-slate-900">
                  Signup
                </span>
              </Link>
              <Link
                href="/login"
                className="flex items-center gap-2 rounded-full border border-transparent px-4 py-2 text-sm hover:bg-gray-100 hover:border-slate-300 group "
              >
                <FaUser className="text-gray-400 text-lg  group-hover:text-slate-900" />
                <span className="text-gray-400 group-hover:text-slate-900">
                  Login
                </span>
              </Link>
            </>
          )}
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
