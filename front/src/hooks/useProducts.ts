// hooks
import { useQuery } from "@tanstack/react-query";

// services
import fetchProducts from "../services/fetchProducts";

//types
import { IProduct } from "../types/IProduct";

export const useProducts = () => {
  return useQuery<IProduct[]>({
    queryKey: ["products"],
    queryFn: fetchProducts,
  });
};

export default useProducts;
