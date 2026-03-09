"use client";

// hooks
import Link from "next/link";
import { useAuth } from "../../context/AuthContext";
import { useState } from "react";

// icons
import {
  FaUser,
  FaHeart,
  FaShoppingBag,
  FaShoppingCart,
  FaSignOutAlt,
  FaChevronRight,
} from "react-icons/fa";

// components
import MyPurchases from "../ProfileTabs/MyPurchases";
import Profile from "../ProfileTabs/Profile";
import Favorites from "../ProfileTabs/Favorites";

type Tab = "profile" | "favorites" | "purchases";

const tabs: { id: Tab; label: string; icon: React.ReactNode }[] = [
  { id: "profile", label: "Profile", icon: <FaUser /> },
  { id: "favorites", label: "Favorites", icon: <FaHeart /> },
  { id: "purchases", label: "My Purchases", icon: <FaShoppingBag /> },
];

const UserDashboardComponent = () => {
  const { user, logout, clearCart, cartItems, favs } = useAuth();
  const [activeTab, setActiveTab] = useState<Tab>("profile");

  const handleLogout = () => {
    clearCart();
    logout();
  };

  const initials = user?.name
    ? user.name
        .split(" ")
        .map((n) => n[0])
        .join("")
        .toUpperCase()
        .slice(0, 2)
    : "U";

  return (
    <div className="min-h-screen flex bg-slate-50">
      {/* Sidebar */}
      <aside className="w-72 bg-slate-900 text-white flex flex-col flex-shrink-0">
        {/* User Identity */}
        <div className="p-6 border-b border-slate-700/50">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-12 h-12 rounded-xl bg-blue-600 flex items-center justify-center text-lg font-bold flex-shrink-0">
              {initials}
            </div>
            <div className="min-w-0">
              <p className="font-semibold text-white truncate">
                {user?.name ?? "User"}
              </p>
              <p className="text-xs text-slate-400 truncate">{user?.email}</p>
            </div>
          </div>

          {/* Quick stats */}
          <div className="grid grid-cols-2 gap-2">
            <Link
              href="/cart"
              className="flex items-center gap-2 bg-slate-800 hover:bg-blue-600/20 rounded-xl p-2.5 transition-colors"
            >
              <FaShoppingCart className="text-blue-400 text-sm flex-shrink-0" />
              <div>
                <p className="text-sm font-bold text-white leading-tight">
                  {cartItems.length}
                </p>
                <p className="text-[10px] text-slate-400 leading-tight">Cart</p>
              </div>
            </Link>
            <button
              onClick={() => setActiveTab("favorites")}
              className="flex items-center gap-2 bg-slate-800 hover:bg-rose-500/20 rounded-xl p-2.5 transition-colors cursor-pointer w-full"
            >
              <FaHeart className="text-rose-400 text-sm flex-shrink-0" />
              <div className="text-left">
                <p className="text-sm font-bold text-white leading-tight">
                  {favs.length}
                </p>
                <p className="text-[10px] text-slate-400 leading-tight">
                  Saved
                </p>
              </div>
            </button>
          </div>
        </div>

        {/* Navigation */}
        <nav className="flex-1 p-4 space-y-1">
          <p className="text-[10px] font-semibold text-slate-500 uppercase tracking-widest px-3 mb-3">
            Navigation
          </p>
          {tabs.map((tab) => {
            const isActive = activeTab === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`w-full flex items-center justify-between px-3 py-3 rounded-xl font-medium text-sm transition-all duration-150 cursor-pointer ${
                  isActive
                    ? "bg-blue-600 text-white shadow-lg shadow-blue-500/20"
                    : "text-slate-300 hover:bg-slate-800 hover:text-white"
                }`}
              >
                <span className="flex items-center gap-3">
                  <span
                    className={`text-base ${isActive ? "text-white" : "text-slate-400"}`}
                  >
                    {tab.icon}
                  </span>
                  {tab.label}
                </span>
                {isActive && <FaChevronRight className="text-xs opacity-70" />}
              </button>
            );
          })}
        </nav>

        {/* Logout */}
        <div className="p-4 border-t border-slate-700/50">
          <Link
            href="/home"
            onClick={handleLogout}
            className="flex items-center gap-3 px-3 py-3 rounded-xl text-slate-300 hover:bg-red-500/10 hover:text-red-400 font-medium text-sm transition-all duration-150 w-full"
          >
            <FaSignOutAlt />
            Log out
          </Link>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-8 overflow-auto">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-2xl font-bold text-slate-900">
            {activeTab === "profile" &&
              `Welcome back, ${user?.name?.split(" ")[0] ?? "there"}!`}
            {activeTab === "favorites" && "My Favorites"}
            {activeTab === "purchases" && "My Purchases"}
          </h1>
          <p className="text-slate-400 text-sm mt-1">
            {activeTab === "profile" && "Here's an overview of your account"}
            {activeTab === "favorites" && "Products you've saved for later"}
            {activeTab === "purchases" && "Your complete order history"}
          </p>
        </div>

        {/* Tab Content */}
        <div className="bg-white rounded-2xl shadow-sm border border-slate-100 p-6">
          {activeTab === "profile" && <Profile />}
          {activeTab === "favorites" && <Favorites />}
          {activeTab === "purchases" && <MyPurchases />}
        </div>
      </main>
    </div>
  );
};

export default UserDashboardComponent;
