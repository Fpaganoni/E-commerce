"use client";

// hooks
// import useProducts from "../../hooks/useProducts";
import { useAuth } from "../../context/AuthContext";

// components
// import Loader from "../Loader/index"

//helper
import { productsToPreLoad } from "../../helpers/products";

// types
interface productDetailProp {
  id: string;
}

// components
import AddToCartButton from "../AddToCartButton";

// vendors
import { FC } from "react";
import Image from "next/image";
import Link from "next/link";
import { FaHeart } from "react-icons/fa";

const ProductDetailComponent: FC<productDetailProp> = ({
  id,
}: productDetailProp) => {
  const { isLoggedIn, addToCart, toggleFavorites, favs } = useAuth();

  // if (isLoading) return <Loader />;

  // if (error) throw new Error("Error fetching product id");

  const product = productsToPreLoad?.find((p) => String(p.id) === id);

  if (!product) return <div>No product to show</div>;

  return (
    <div className="min-h-screen pt-24 pb-12 bg-slate-50 dark:bg-slate-900 transition-colors duration-300 relative overflow-hidden">
      {/* Decorative Background Elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-blue-400/20 rounded-full blur-3xl pointer-events-none -translate-y-1/2 translate-x-1/2"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-purple-400/20 rounded-full blur-3xl pointer-events-none translate-y-1/2 -translate-x-1/2"></div>

      <div className="w-[90%] max-w-6xl mx-auto z-10 relative animate-fade-in">
        <Link
          href="/home"
          className="inline-flex items-center text-slate-500 hover:text-blue-600 dark:hover:text-blue-400 mb-8 font-medium transition-colors"
        >
          <span className="mr-2">&larr;</span> Back to catalog
        </Link>

        <div className="glass-panel rounded-3xl p-8 md:p-12 shadow-xl border border-slate-200 dark:border-slate-800">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Image Section */}
            <div className="bg-white dark:bg-slate-800 rounded-2xl p-6 shadow-sm border border-slate-100 dark:border-slate-700 aspect-square flex items-center justify-center relative group overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-tr from-blue-50/50 to-purple-50/50 dark:from-blue-900/10 dark:to-purple-900/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <Image
                width={500}
                height={500}
                src={
                  product.image ||
                  "https://png.pngtree.com/png-clipart/20200224/original/pngtree-question-mark-icon-for-your-project-png-image_5214036.jpg"
                }
                alt={product.name || "Product Image"}
                className="object-contain w-full h-[80%] group-hover:scale-105 transition-transform duration-500 z-10"
              />
            </div>

            {/* Content Section */}
            <div className="flex flex-col justify-center">
              <span className="text-xs font-bold tracking-wider text-slate-400 uppercase mb-2">
                PRODUCT ID: {product.id}
              </span>
              <h1 className="text-4xl md:text-5xl font-extrabold text-slate-900 dark:text-white mb-6 tracking-tight leading-tight">
                {product.name}
              </h1>

              <div className="h-px w-full bg-slate-200 dark:bg-slate-700/50 mb-6"></div>

              <p className="text-lg text-slate-600 dark:text-slate-300 mb-8 leading-relaxed font-light">
                {product.description}
              </p>

              <div className="text-4xl font-black text-blue-600 dark:text-blue-400 mb-10">
                ${product.price}
              </div>

              {isLoggedIn ? (
                <div className="flex items-center gap-3">
                  <AddToCartButton
                    product={product}
                    onAddToCart={addToCart}
                    className="flex-1 py-4 px-10 text-lg rounded-xl shadow-lg shadow-blue-500/30 hover:-translate-y-1 transition-all duration-300 font-semibold uppercase tracking-wide"
                  />
                  <button
                    onClick={() => toggleFavorites(product)}
                    aria-label={
                      favs.some((f) => f.id === product.id)
                        ? "Remove from favorites"
                        : "Add to favorites"
                    }
                    className={`p-4 rounded-xl border-2 transition-all duration-200 cursor-pointer flex-shrink-0 ${
                      favs.some((f) => f.id === product.id)
                        ? "bg-rose-500 border-rose-500 text-white shadow-lg shadow-rose-500/30"
                        : "border-slate-200 dark:border-slate-700 text-slate-400 hover:border-rose-300 hover:text-rose-500 hover:bg-rose-50 dark:hover:bg-rose-900/10"
                    }`}
                  >
                    <FaHeart className="text-xl" />
                  </button>
                </div>
              ) : (
                <div className="bg-amber-50 dark:bg-amber-900/20 border border-amber-200 dark:border-amber-700/50 rounded-xl p-5 flex items-start">
                  <span className="text-amber-500 mr-3 text-xl">&#9888;</span>
                  <div>
                    <h3 className="text-amber-800 dark:text-amber-400 font-semibold mb-1">
                      Authentication Required
                    </h3>
                    <p className="text-amber-700 dark:text-amber-500 text-sm">
                      To add this premium product to your cart, please log in or
                      create an account.
                    </p>
                    <Link
                      href="/login"
                      className="inline-block mt-3 text-sm font-bold text-amber-700 dark:text-amber-400 hover:text-amber-900 dark:hover:text-amber-200 transition-colors uppercase tracking-wide"
                    >
                      Go to Login &rarr;
                    </Link>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetailComponent;
