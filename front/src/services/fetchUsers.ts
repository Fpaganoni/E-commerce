//types
import IUsers from "../types/IUsers";

const fetchUsers = async (data: IUsers): Promise<IUsers> => {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_BACKEND_URL}/users/register`,
    {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    }
  );

  if (!response.ok) throw new Error("Error, we couldn't registered you");

  return response.json();
};

export default fetchUsers;
