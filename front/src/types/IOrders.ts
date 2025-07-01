export default interface IProductOrder {
  id: number;
  name: string;
  description: string;
  price: number;
  stock: number;
  image: string;
  categoryId: number;
}

export default interface IUserOrder {
  id: number;
  name: string;
  email?: string;
  address?: string;
  phone?: string;
  role?: "user" | "admin";
  orders?: IProductOrder[];
  credential?: {
    id: number;
    email: string;
    password: string;
  };
}
