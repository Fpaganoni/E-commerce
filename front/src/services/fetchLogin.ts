// types
import ILoginData from "../types/IUsers";

const fetchLogin = async (data: ILoginData) => {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_BACKEND_URL}/users/login`,
    {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ ...data }),
    }
  );

  const userLogged = await response.json();

  if (!response.ok) {
    throw new Error(userLogged.message || "Error login");
  }

  localStorage.setItem("token", userLogged.token);
  localStorage.setItem("user", JSON.stringify(userLogged.user));

  return userLogged;
};

export default fetchLogin;
