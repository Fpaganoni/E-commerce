// types
import { IProduct } from "../types/IProduct";

const fetchProducts = async (): Promise<IProduct[]> => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/products`);

  if (!res.ok) throw new Error("Error fetching products");

  return res.json();
};

export default fetchProducts;
