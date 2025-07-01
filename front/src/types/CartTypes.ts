export type CartItem = {
  productId: number;
  quantity: number;
};

export type CartContextType = {
  cartItems: CartItem[];
  addToCart: (item: CartItem) => void;
  removeFromCart: (id: number) => void;
  clearCart: () => void;
};

export default interface ICart {
  id: number;
  description: string;
  name: string;
  price: number;
  quantity?: number;
  image?: string;
  stock: number;
}
