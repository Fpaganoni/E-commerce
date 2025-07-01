export interface IProduct {
  id: number;
  name: string;
  description: string;
  price: number;
  stock: number;
  image: string;
  categoryId: number;
}

export interface ProductPageProps {
  params: Promise<{ id: string }> | { id: string };
}
