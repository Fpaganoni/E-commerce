"use client";

import { useAuth } from "../../context/AuthContext";
import {
  FaShoppingCart,
  FaHeart,
  FaEnvelope,
  FaPhone,
  FaMapMarkerAlt,
  FaUserCircle,
} from "react-icons/fa";

const Profile = () => {
  const { cartItems, favs, user } = useAuth();

  const initials = user?.name
    ? user.name
        .split(" ")
        .map((n) => n[0])
        .join("")
        .toUpperCase()
        .slice(0, 2)
    : "U";

  return (
    <div className="space-y-6">
      {/* User Identity Card */}
      <div className="flex items-center gap-5 p-5 bg-gradient-to-r from-blue-600 to-blue-700 rounded-2xl text-white shadow-lg shadow-blue-500/20">
        <div className="w-16 h-16 rounded-2xl bg-white/20 backdrop-blur-sm flex items-center justify-center text-2xl font-extrabold flex-shrink-0">
          {initials}
        </div>
        <div>
          <h2 className="text-xl font-bold leading-tight">
            {user?.name ?? "User"}
          </h2>
          <p className="text-blue-100 text-sm mt-0.5">{user?.email}</p>
          {user?.role && (
            <span className="inline-block mt-1.5 text-xs bg-white/20 px-2.5 py-0.5 rounded-full font-medium capitalize">
              {user.role}
            </span>
          )}
        </div>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-2 gap-4">
        <div className="bg-white border border-slate-100 rounded-2xl p-5 flex items-center gap-4 shadow-sm">
          <div className="w-11 h-11 rounded-xl bg-blue-50 flex items-center justify-center flex-shrink-0">
            <FaShoppingCart className="text-blue-600 text-lg" />
          </div>
          <div>
            <p className="text-2xl font-extrabold text-slate-800">
              {cartItems.length}
            </p>
            <p className="text-xs text-slate-400 mt-0.5">Items in cart</p>
          </div>
        </div>

        <div className="bg-white border border-slate-100 rounded-2xl p-5 flex items-center gap-4 shadow-sm">
          <div className="w-11 h-11 rounded-xl bg-rose-50 flex items-center justify-center flex-shrink-0">
            <FaHeart className="text-rose-500 text-lg" />
          </div>
          <div>
            <p className="text-2xl font-extrabold text-slate-800">
              {favs.length}
            </p>
            <p className="text-xs text-slate-400 mt-0.5">Saved favorites</p>
          </div>
        </div>
      </div>

      {/* Contact Info */}
      <div className="bg-white border border-slate-100 rounded-2xl p-5 shadow-sm">
        <h3 className="text-sm font-semibold text-slate-500 uppercase tracking-wide mb-4">
          Contact Information
        </h3>
        <ul className="space-y-3">
          <li className="flex items-center gap-3 text-sm text-slate-700">
            <FaEnvelope className="text-blue-400 flex-shrink-0" />
            <span>{user?.email ?? "—"}</span>
          </li>
          <li className="flex items-center gap-3 text-sm text-slate-700">
            <FaPhone className="text-blue-400 flex-shrink-0" />
            <span>{user?.phone ?? "—"}</span>
          </li>
          <li className="flex items-center gap-3 text-sm text-slate-700">
            <FaMapMarkerAlt className="text-blue-400 flex-shrink-0" />
            <span>{user?.address ?? "—"}</span>
          </li>
          <li className="flex items-center gap-3 text-sm text-slate-700">
            <FaUserCircle className="text-blue-400 flex-shrink-0" />
            <span className="capitalize">{user?.role ?? "—"}</span>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Profile;
