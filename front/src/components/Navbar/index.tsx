"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

// icons
import {
  FaUser,
  FaSearch,
  FaHeart,
  FaShoppingCart,
  FaSignOutAlt,
  FaBars,
  FaTimes,
} from "react-icons/fa";

// context
import { useAuth } from "../../context/AuthContext";

const NAV_LINKS = [
  "Home",
  "About Us",
  "Cell Phones",
  "Contacts",
  "Accessories",
  "New Products",
  "Find a store",
];

const Navbar = () => {
  const { isLoggedIn, logout, clearCart, cartItems, favs } = useAuth();
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleLogout = () => {
    clearCart();
    logout();
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? "bg-white/80 backdrop-blur-lg shadow-sm py-3"
            : "bg-white py-5"
        }`}
      >
        <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full flex items-center justify-between">
          {/* Logo */}
          <Link href="/home" className="flex items-center gap-2">
            <div className="w-8 h-8 bg-primary-600 rounded-lg flex items-center justify-center text-white font-bold text-xl leading-none">
              E
            </div>
            <span className="text-xl font-bold tracking-tight text-slate-900 hidden sm:block">
              COMMERCE
            </span>
          </Link>

          {/* Desktop Nav Links */}
          <div className="hidden lg:flex items-center gap-8">
            {NAV_LINKS.map((label) => {
              const href =
                label === "Home"
                  ? "/home"
                  : `/${label.toLowerCase().replace(/\s/g, "-")}`;
              const isActive = pathname === href;
              return (
                <Link
                  key={label}
                  href={href}
                  className={`text-sm font-medium transition-colors hover:text-primary-600 ${
                    isActive ? "text-primary-600" : "text-slate-600"
                  }`}
                >
                  {label}
                </Link>
              );
            })}
          </div>

          {/* Right icons */}
          <div className="flex items-center gap-2 sm:gap-3">
            <button
              aria-label="Search"
              className="p-2 text-slate-500 hover:text-primary-600 hover:bg-slate-50 rounded-full transition-all"
            >
              <FaSearch className="text-lg" />
            </button>

            {isLoggedIn ? (
              <>
                {/* Favorites icon with badge */}
                <Link
                  href="/dashboard"
                  aria-label="Favorites"
                  className="hidden sm:flex p-2 text-slate-500 hover:text-rose-500 hover:bg-rose-50 rounded-full transition-all relative"
                >
                  <FaHeart className="text-lg" />
                  {favs.length > 0 && (
                    <span className="absolute -top-0.5 -right-0.5 min-w-[16px] h-4 bg-rose-500 text-white text-[10px] font-bold rounded-full flex items-center justify-center px-0.5 leading-none">
                      {favs.length > 99 ? "99+" : favs.length}
                    </span>
                  )}
                </Link>

                {/* Cart icon with badge */}
                <Link
                  href="/cart"
                  aria-label="Cart"
                  className="p-2 text-slate-500 hover:text-primary-600 hover:bg-blue-50 rounded-full transition-all relative"
                >
                  <FaShoppingCart className="text-lg" />
                  {cartItems.length > 0 && (
                    <span className="absolute -top-0.5 -right-0.5 min-w-[16px] h-4 bg-blue-600 text-white text-[10px] font-bold rounded-full flex items-center justify-center px-0.5 leading-none">
                      {cartItems.length > 99 ? "99+" : cartItems.length}
                    </span>
                  )}
                </Link>

                {/* User profile */}
                <Link
                  href="/dashboard"
                  className="hidden sm:flex p-2 text-slate-500 hover:text-primary-600 hover:bg-slate-50 rounded-full transition-all"
                  aria-label="Profile"
                >
                  <FaUser className="text-lg" />
                </Link>

                {/* Logout button */}
                <button
                  onClick={handleLogout}
                  className="hidden sm:flex items-center gap-2 ml-1 px-4 py-2 text-sm font-medium text-slate-600 bg-slate-100 hover:bg-red-50 hover:text-red-600 rounded-full transition-colors cursor-pointer"
                >
                  <FaSignOutAlt />
                  <span>Logout</span>
                </button>
              </>
            ) : (
              <div className="hidden sm:flex items-center gap-3">
                <Link
                  href="/login"
                  className="px-4 py-2 text-sm font-medium text-slate-700 hover:text-primary-600 transition-colors"
                >
                  Log in
                </Link>
                <Link
                  href="/signup"
                  className="px-4 py-2 text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 rounded-full transition-colors shadow-md shadow-blue-500/20 whitespace-nowrap"
                >
                  Sign up
                </Link>
              </div>
            )}

            {/* Mobile menu toggle */}
            <button
              className="p-2 lg:hidden text-slate-600"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? (
                <FaTimes className="text-xl" />
              ) : (
                <FaBars className="text-xl" />
              )}
            </button>
          </div>
        </nav>

        {/* Mobile Nav */}
        {mobileMenuOpen && (
          <div className="lg:hidden absolute top-full left-0 right-0 bg-white border-t border-slate-100 shadow-xl py-4 px-4 flex flex-col gap-3">
            {NAV_LINKS.map((label) => {
              const href =
                label === "Home"
                  ? "/home"
                  : `/${label.toLowerCase().replace(/\s/g, "-")}`;
              return (
                <Link
                  key={label}
                  href={href}
                  className="text-base font-medium text-slate-700 hover:text-primary-600 py-2"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {label}
                </Link>
              );
            })}
            {!isLoggedIn && (
              <div className="flex flex-col gap-2 mt-4 pt-4 border-t border-slate-100">
                <Link
                  href="/login"
                  className="w-full py-3 px-4 text-center rounded-xl border border-slate-200 font-medium text-slate-700"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Log in
                </Link>
                <Link
                  href="/signup"
                  className="w-full py-3 px-4 text-center rounded-xl bg-blue-600 font-medium text-white"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Sign up
                </Link>
              </div>
            )}
            {isLoggedIn && (
              <div className="flex flex-col gap-2 mt-4 pt-4 border-t border-slate-100">
                <Link
                  href="/cart"
                  className="flex items-center justify-between py-2 text-slate-700 font-medium"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  <span>Cart</span>
                  {cartItems.length > 0 && (
                    <span className="bg-blue-600 text-white text-xs font-bold px-2 py-0.5 rounded-full">
                      {cartItems.length}
                    </span>
                  )}
                </Link>
                <Link
                  href="/dashboard"
                  className="py-2 text-slate-700 font-medium"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  My Account
                </Link>
                <button
                  onClick={() => {
                    handleLogout();
                    setMobileMenuOpen(false);
                  }}
                  className="w-full flex justify-center items-center gap-2 mt-2 py-3 text-red-600 bg-red-50 rounded-xl font-medium cursor-pointer"
                >
                  <FaSignOutAlt />
                  <span>Logout</span>
                </button>
              </div>
            )}
          </div>
        )}
      </header>

      {/* Spacer to prevent content from jumping due to fixed header */}
      <div className="h-[80px]"></div>
    </>
  );
};

export default Navbar;
