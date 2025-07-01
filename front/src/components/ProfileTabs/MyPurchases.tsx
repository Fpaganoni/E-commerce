// vedors
import { format } from "date-fns";

// hooks
import { useAuth } from "../../context/AuthContext";

const MyPurchases = () => {
  const { user } = useAuth();
  console.log(user?.orders);

  return (
    <div className="p-4">
      <h2 className="text-2xl font-semibold text-slate-800 mb-4">
        My purchases
      </h2>
      <div className="overflow-x-auto">
        <table className="min-w-full border border-gray-200 rounded-lg">
          <thead className="bg-slate-100 text-slate-700 text-sm">
            <tr>
              <th className="text-left px-4 py-2">#</th>
              <th className="text-left px-4 py-2">Status</th>
              <th className="text-left px-4 py-2">Date</th>
            </tr>
          </thead>
          <tbody>
            {user?.orders.map((order) => (
              <tr
                key={order.id}
                className="border-t border-gray-100 hover:bg-slate-50"
              >
                <td className="px-4 py-3 font-medium text-slate-800">
                  {order.id}
                </td>
                <td>
                  <span className="inline-block px-2 py-1 text-xs bg-green-100 text-green-800 rounded-full">
                    {order.status}
                  </span>
                </td>
                <td className="px-4 py-3 text-sm text-slate-600">
                  {format(new Date(order.date), "PPPpp")}
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
