// types
import { IProduct } from "../types/IProduct";

const fetchProducts = async (): Promise<IProduct[]> => {
  const res = await fetch("http://localhost:4001/products");

  if (!res.ok) throw new Error("Error fetching products");

  return res.json();
};

export default fetchProducts;
