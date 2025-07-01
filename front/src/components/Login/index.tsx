"use client";

// Vedors
import { useState } from "react";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import Image from "next/image";
import Link from "next/link";
import { useForm } from "react-hook-form";
import { useRouter } from "next/navigation";

//components
import AlertMessage from "../AlertMessage";

// types
import ILoginData from "../../types/IUsers";

// icons
import iconsExit from "../../../public/iconsExit.png";

// hooks
import useLogin from "../../hooks/useLogin";
import { useAuth } from "../../context/AuthContext";

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ILoginData>();

  const { login } = useAuth();
  const router = useRouter();
  const { mutate, isError, isSuccess } = useLogin();

  const onSubmit = (data: ILoginData) => {
    console.log(data);
    mutate(data, {
      onSuccess: (result) => {
        login(result.user, result.token);
        router.push("/home");
      },
    });
    reset();
  };

  return (
    <div className="my-12 z-50 flex flex-col items-center justify-center">
      <h1 className="text-2xl font-bold mb-4 text-slate-900">Login</h1>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="bg-white p-6 rounded shadow-md w-96 relative"
      >
        <Link href={"/"} className="absolute  top-0 right-0 w-[30px] h-[30px]">
          <Image width={30} height={30} src={iconsExit} alt="exit icon" />
        </Link>
        <div className="mb-4">
          <label
            htmlFor="email"
            className="block text-sm font-medium text-gray-700 mb-2"
          >
            Email
          </label>
          <input
            id="email"
            type="email"
            className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring focus:ring-blue-500"
            placeholder="Enter your email"
            {...register("email", {
              required: "Email is required",
            })}
          />
          {errors.email && (
            <span className="text-red-500 text-sm">
              {errors.email.message as string}
            </span>
          )}
        </div>
        <div className="mb-4 ">
          <label
            htmlFor="password"
            className="block text-sm font-medium text-gray-700 mb-2"
          >
            Password
          </label>
          <div className="relative">
            <input
              id="password"
              type={showPassword ? "text" : "password"}
              className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring focus:ring-blue-500"
              placeholder="Enter your password"
              {...register("password", {
                required: "Password is required",
              })}
            />
            <span
              className="absolute inset-y-0 right-2 flex items-center text-slate-700 cursor-pointer text-2xl"
              onClick={() => setShowPassword((prev) => !prev)}
              tabIndex={-1}
            >
              {showPassword ? <AiOutlineEyeInvisible /> : <AiOutlineEye />}
            </span>
          </div>
          {errors.password && (
            <span className="text-red-500 text-sm">
              {errors.password.message as string}
            </span>
          )}
        </div>
        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition duration-200 cursor-pointer"
        >
          Login
        </button>

        <div className="flex items-center gap-2 my-6">
          <div className="flex-grow h-px bg-gray-300"></div>
          <span className="text-sm text-gray-600 whitespace-nowrap">
            ¿Are you new in E-Commerce?
          </span>
          <div className="flex-grow h-px bg-gray-300"></div>
        </div>

        <Link href={"/signup"}>
          <button className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition duration-200 cursor-pointer">
            Create your account
          </button>
        </Link>
      </form>
      {isError && <AlertMessage type="login" status="error" />}
      {isSuccess && <AlertMessage type="login" status="success" />}
    </div>
  );
};

export default Login;
