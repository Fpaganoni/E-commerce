"use client";

import { productsToPreLoad } from "../../helpers/products";
import Card from "../../components/HomePage/Card/Card";

export default function NewProductsPage() {
  // Reversing the list or just taking a slice to mock 'new' products
  const newProducts = [...productsToPreLoad].reverse().slice(0, 8);

  return (
    <div className="min-h-screen bg-background pt-8 pb-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto mt-8">
        <div className="inline-block px-3 py-1 bg-blue-100 text-blue-700 font-semibold rounded-full text-sm mb-4">
          Just Arrived
        </div>
        <h1 className="text-4xl font-extrabold text-slate-900 mb-2 tracking-tight">
          New Products
        </h1>
        <p className="text-slate-500 mb-12 font-light text-lg">
          The latest additions to our premium collection.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {newProducts.map((prod) => (
            <Card key={prod.id} {...prod} />
          ))}
        </div>
      </div>
    </div>
  );
}
