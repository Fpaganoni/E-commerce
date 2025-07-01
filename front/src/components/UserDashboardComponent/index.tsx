"use client";

// hooks
import Link from "next/link";
import { useAuth } from "../../context/AuthContext";
import { useState } from "react";

// component
import MyOrders from "../ProfileTabs/MyOrders";
import MyPurchases from "../ProfileTabs/MyPurchases";
import Profile from "../ProfileTabs/Profile";

const UserDashboardComponent = () => {
  const { user, logout, clearCart } = useAuth();

  const handleLogout = () => {
    clearCart();
    logout();
  };

  const [activeTab, setActiveTab] = useState("profile");

  return (
    <div className="min-h-screen flex">
      <main className="flex-1 bg-gray-100 p-8">
        {
          <h1 className="text-3xl font-semibold mb-6 text-center">
            Welcome, {user?.name}
          </h1>
        }

        <div className="flex-1 p-6 bg-white">
          {activeTab === "profile" && <Profile />}
          {activeTab === "cart" && <MyOrders />}
          {activeTab === "purchases" && <MyPurchases />}
        </div>
      </main>

      <aside className="bg-slate-900 text-white p-4 w-80">
        <h2 className="text-2xl font-bold mb-4 ml-3.5">My account</h2>
        <ul className="text-lg ml-2.5">
          <li
            className={`cursor-pointer mb-2 ${
              activeTab === "profile" ? "font-bold" : ""
            }`}
            onClick={() => setActiveTab("profile")}
          >
            Profile
          </li>
          <li
            className={`cursor-pointer mb-2 ${
              activeTab === "cart" ? "font-bold" : ""
            }`}
            onClick={() => setActiveTab("cart")}
          >
            Shopping Cart
          </li>
          <li
            className={`cursor-pointer mb-2 ${
              activeTab === "purchases" ? "font-bold" : ""
            }`}
            onClick={() => setActiveTab("purchases")}
          >
            My purchases
          </li>
          <li className="cursor-pointer mb-2">
            <Link
              onClick={handleLogout}
              href="/home"
              className="block hover:bg-gray-700 px-3 py-2 rounded"
            >
              Log out
            </Link>
          </li>
        </ul>
      </aside>
    </div>
  );
};

export default UserDashboardComponent;
