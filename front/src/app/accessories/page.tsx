"use client";

import { productsToPreLoad } from "../../helpers/products";
import Card from "../../components/HomePage/Card/Card";

export default function AccessoriesPage() {
  // Assuming categories 13 and 18 are accessories (watches, airpods, homepod etc)
  const accessories = productsToPreLoad.filter((p) =>
    [13, 16, 18].includes(p.categoryId),
  );

  return (
    <div className="min-h-screen bg-background pt-8 pb-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto mt-8">
        <h1 className="text-4xl font-extrabold text-slate-900 mb-2 tracking-tight">
          Accessories
        </h1>
        <p className="text-slate-500 mb-12 font-light text-lg">
          Enhance your devices with premium accessories.
        </p>

        {accessories.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {accessories.map((prod) => (
              <Card key={prod.id} {...prod} />
            ))}
          </div>
        ) : (
          <div className="text-center py-20 bg-white rounded-2xl shadow-sm border border-slate-100">
            <h3 className="text-xl font-medium text-slate-700">
              No accessories available currently.
            </h3>
          </div>
        )}
      </div>
    </div>
  );
}
