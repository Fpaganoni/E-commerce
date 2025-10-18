"use client";

// hooks
// import useProducts from "../../hooks/useProducts";

// types
// import { IProduct } from "../../types/IProduct";
import IProduct from "../../helpers/products";

//helper
import { productsToPreLoad } from "../../helpers/products";

// component
import Card from "./Card/Card";

const HomePage = () => {
  return (
    <div className="flex flex-wrap justify-center gap-5 m-3 md:m-0">
      {productsToPreLoad?.map((prod: IProduct) => {
        return <Card key={prod.id} {...prod} />;
      })}
    </div>
  );
};

export default HomePage;
