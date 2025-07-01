import IUserObject from "./IUserObject";
// import IProductOrder from "./IOrders";
import ICart from "./CartTypes";

type Product = {
  id: number;
  name: string;
  description: string;
  price: number;
  stock: number;
  image: string;
  categoryId: number;
};

export type User = {
  id?: number;
  name?: string;
  email?: string;
  address?: string;
  phone?: string;
  role?: "user" | "admin";
  orders?: Product[];
  credential?: {
    id: number;
    email: string;
    password: string;
  };
};

export default interface IAuthContext {
  user: IUserObject | null;
  token: string | null;
  login: (user: IUserObject, token: string) => void;
  logout: () => void;
  isLoggedIn: boolean;
  addToCart: (product: ICart) => void;
  setUser: (user: IUserObject | null) => void;
  clearCart: () => void;
  cartItems: ICart[];
  isInCart: (productId: number) => boolean;
  toggleFavorites: (product: Product) => void;
}
