//HOOKS
import { useAuth } from "../../context/AuthContext";

const Profile = () => {
  const { cartItems } = useAuth();

  return (
    <div>
      <section className="bg-white p-6 rounded shadow-md">
        <h2 className="text-xl font-bold mb-4">Summary</h2>
        <div className="grid md:grid-cols-3 gap-4">
          <div className="p-4 bg-gray-50 rounded shadow text-center">
            <p className="text-gray-500">Products in cart</p>
            <p className="text-2xl font-bold">{cartItems.length || "0"}</p>
          </div>
          <div className="p-4 bg-gray-50 rounded shadow text-center">
            <p className="text-gray-500">Favorites</p>
            <p className="text-2xl font-bold">/</p>
          </div>
          <div className="p-4 bg-gray-50 rounded shadow text-center">
            <p className="text-gray-500">Last access</p>
            <p className="text-2xl font-bold">/</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Profile;
