"use client";

// hooks
// import useProducts from "../../hooks/useProducts";
import { useAuth } from "../../context/AuthContext";

// components
// import Loader from "../Loader/index";

//helper
import { productsToPreLoad } from "../../helpers/products";

// types
interface productDetailProp {
  id: string;
}

// components
import AddToCartButton from "../AddToCartButton";

// vedors
import { FC } from "react";
import Image from "next/image";

const ProductDetailComponent: FC<productDetailProp> = ({
  id,
}: productDetailProp) => {
  // const { data: products, isLoading, error } = useProducts();

  const { isLoggedIn, addToCart } = useAuth();

  // if (isLoading) return <Loader />;

  // if (error) throw new Error("Error fetching product id");

  const product = productsToPreLoad?.find((p) => String(p.id) === id);

  if (!product) return <div>No product to show</div>;

  return (
    <div className="w-[90%] max-w-6xl mx-auto px-20 py-8 bg-gray-50">
      <h1 className="text-2xl font-bold mb-4">{product.name}</h1>
      <p className="text-gray-500 mb-6">ID del producto: {product.id}</p>

      <div className="grid md:grid-cols-2 gap-8">
        <Image
          width={400}
          height={400}
          src={
            product.image ||
            "https://png.pngtree.com/png-clipart/20200224/original/pngtree-question-mark-icon-for-your-project-png-image_5214036.jpg"
          }
          alt={product.name || "image"}
          className="rounded-lg object-contain w-full h-64"
        />

        <div>
          <p className="text-gray-700 mb-4">{product.description}</p>
          <div className="text-2xl font-bold mb-4">${product.price}</div>
          {isLoggedIn ? (
            <AddToCartButton
              product={product}
              onAddToCart={addToCart}
              className="py-2 px-4 bg-[var(--buttons)] text-gray-50 rounded-md cursor-pointer"
            />
          ) : (
            <span className="block text-sm text-yellow-800 bg-yellow-100 border border-yellow-300 rounded-md px-4 py-2 mt-2">
              To add this product, please login
            </span>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProductDetailComponent;
