// vendors
import { format } from "date-fns";

// hooks
import { useAuth } from "../../context/AuthContext";

const MyPurchases = () => {
  const { user } = useAuth();

  if (!user?.orders || user.orders.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center py-16 gap-4">
        <div className="w-20 h-20 rounded-full bg-blue-50 flex items-center justify-center text-4xl">
          🛍️
        </div>
        <h3 className="text-lg font-semibold text-slate-700">
          No purchases yet
        </h3>
        <p className="text-slate-400 text-sm text-center max-w-xs">
          Your completed orders will appear here once you&apos;ve made a
          purchase.
        </p>
      </div>
    );
  }

  return (
    <div className="p-1">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-xl font-bold text-slate-800">My Purchases</h2>
        <span className="text-sm font-medium px-3 py-1 rounded-full bg-blue-50 text-blue-600 border border-blue-100">
          {user.orders.length} order{user.orders.length !== 1 ? "s" : ""}
        </span>
      </div>

      <div className="overflow-x-auto rounded-2xl border border-slate-100 shadow-sm">
        <table className="min-w-full">
          <thead>
            <tr className="bg-blue-600 text-white text-sm">
              <th className="text-left px-5 py-3.5 font-semibold rounded-tl-2xl">
                #
              </th>
              <th className="text-left px-5 py-3.5 font-semibold">Product</th>
              <th className="text-left px-5 py-3.5 font-semibold">Status</th>
              <th className="text-left px-5 py-3.5 font-semibold rounded-tr-2xl">
                Date
              </th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-slate-50">
            {user.orders.map((order, index) => (
              <tr
                key={order.id}
                className="hover:bg-slate-50 transition-colors duration-150"
              >
                <td className="px-5 py-4 text-sm font-mono text-slate-500">
                  #{index + 1}
                </td>
                <td className="px-5 py-4 font-medium text-slate-800 text-sm font-mono">
                  #{order.id}
                </td>
                <td className="px-5 py-4">
                  <span className="inline-flex items-center gap-1.5 px-2.5 py-1 text-xs bg-green-50 text-green-700 rounded-full font-medium border border-green-100 capitalize">
                    <span className="w-1.5 h-1.5 rounded-full bg-green-500"></span>
                    {order.status}
                  </span>
                </td>
                <td className="px-5 py-4 text-sm text-slate-500">
                  {format(new Date(order.date), "MMM d, yyyy")}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyPurchases;
