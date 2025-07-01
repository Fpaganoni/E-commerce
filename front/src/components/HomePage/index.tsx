"use client";

// hooks
import useProducts from "../../hooks/useProducts";

// types
import { IProduct } from "../../types/IProduct";

// component
import Card from "./Card/Card";
import Loader from "../../components/Loader";

const HomePage = () => {
  const { data, isLoading, error } = useProducts();

  if (isLoading) return <Loader />;

  if (error) return <div>Error al cargar productos</div>;

  return (
    <div className="flex flex-wrap justify-center gap-5 p-4 my-10">
      {data?.map((prod: IProduct) => {
        return <Card key={prod.id} {...prod} />;
      })}
    </div>
  );
};

export default HomePage;
