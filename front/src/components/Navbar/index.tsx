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
  const { isLoggedIn, logout, clearCart } = useAuth();
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
          <div className="flex items-center gap-2 sm:gap-4">
            <button
              aria-label="Search"
              className="p-2 text-slate-500 hover:text-primary-600 hover:bg-slate-50 rounded-full transition-all"
            >
              <FaSearch className="text-lg" />
            </button>

            {isLoggedIn ? (
              <>
                <button
                  aria-label="Favorites"
                  className="hidden sm:block p-2 text-slate-500 hover:text-primary-600 hover:bg-slate-50 rounded-full transition-all"
                >
                  <FaHeart className="text-lg" />
                </button>

                <Link
                  href="/cart"
                  className="p-2 text-slate-500 hover:text-primary-600 hover:bg-slate-50 rounded-full transition-all relative"
                >
                  <FaShoppingCart className="text-lg" />
                  {/* Mock cart badge */}
                  <span className="absolute top-0 right-0 w-2 h-2 bg-primary-600 rounded-full"></span>
                </Link>

                <Link
                  href="/dashboard"
                  className="hidden sm:block p-2 text-slate-500 hover:text-primary-600 hover:bg-slate-50 rounded-full transition-all"
                >
                  <FaUser className="text-lg" />
                </Link>

                <button
                  onClick={handleLogout}
                  className="hidden sm:flex items-center gap-2 ml-2 px-4 py-2 text-sm font-medium text-slate-600 bg-slate-100 hover:bg-slate-200 rounded-full transition-colors"
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
                  className="px-4 py-2 text-sm font-medium text-white bg-slate-900 hover:bg-slate-800 rounded-full transition-colors whitespace-nowrap"
                >
                  Sign up
                </Link>
              </div>
            )}

            {/* Mobile menu toggle */}
            <button
              className="p-2 lg:hidden text-slate-600"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              <FaBars className="text-xl" />
            </button>
          </div>
        </nav>

        {/* Mobile Nav */}
        {mobileMenuOpen && (
          <div className="lg:hidden absolute top-full left-0 right-0 bg-white border-t border-slate-100 shadow-xl py-4 px-4 flex flex-col gap-4">
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
                  className="w-full py-3 px-4 text-center rounded-lg border border-slate-200 font-medium text-slate-700"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Log in
                </Link>
                <Link
                  href="/signup"
                  className="w-full py-3 px-4 text-center rounded-lg bg-slate-900 font-medium text-white"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Sign up
                </Link>
              </div>
            )}
            {isLoggedIn && (
              <button
                onClick={() => {
                  handleLogout();
                  setMobileMenuOpen(false);
                }}
                className="w-full flex justify-center items-center gap-2 mt-4 pt-4 border-t border-slate-100 py-3 text-slate-600 font-medium"
              >
                <FaSignOutAlt />
                <span>Logout</span>
              </button>
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
