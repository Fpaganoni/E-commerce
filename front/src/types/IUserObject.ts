type Order = {
  date: string;
  id: number;
  status: string;
};

export default interface IUserObject {
  id: number;
  name: string;
  orders: Order[];
  credentials: object;
  email: string;
  phone: string;
  address: string;
  role: "user" | "admin";
}
