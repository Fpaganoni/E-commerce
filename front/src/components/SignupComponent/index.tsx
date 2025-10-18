"use client";

// vedors
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import { useForm } from "react-hook-form";
import { useRouter } from "next/navigation";

// hooks
import useRegister from "../../hooks/useRegister";

// components
import AlertMessage from "../AlertMessage";

// icons
import iconsExit from "../../../public/iconsExit.png";

//types
import IUsers from "../../types/IUsers";

const SignupComponent = () => {
  const [showPassword, setShowPassword] = useState(false);

  const { mutate, isError, isSuccess } = useRegister();

  const router = useRouter();

  const {
    register,
    reset,
    handleSubmit,
    formState: { errors },
  } = useForm<IUsers>();

  const onSubmit = (data: IUsers) => {
    console.log(data);
    mutate(data, {
      onSuccess: () => {
        router.push("/login");
      },
    });
    reset();
  };

  return (
    <div className="w-[90%] m-0 mx-auto md:w-max flex flex-col items-center justify-center md:my-12 bg-slate-300">
      <h1 className="text-2xl font-bold mb-4">Sign Up</h1>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="bg-white p-6 rounded shadow-md w-[95%] md:w-96 relative"
      >
        <Link href={"/"} className="absolute  top-0 right-0 w-[30px] h-[30px]">
          <Image width={30} height={30} src={iconsExit} alt="exit icon" />
        </Link>
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Name
          </label>
          <input
            type="text"
            className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring focus:ring-blue-500"
            placeholder="Enter your username"
            {...register("name", {
              required: "Name is required",
            })}
          />
          {errors.name && (
            <span className="text-red-500 text-sm">
              {errors.name.message as string}
            </span>
          )}
        </div>
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Email
          </label>
          <input
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
        <div className="mb-4 relative">
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Password
          </label>
          <div className="relative">
            <input
              type={showPassword ? "text" : "password"}
              className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring focus:ring-blue-500 "
              placeholder="Enter your password"
              {...register("password", {
                required: "Password is required",
              })}
            />

            <span
              onClick={() => setShowPassword((prev) => !prev)}
              className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-700 cursor-pointer text-2xl"
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

        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Address
          </label>
          <input
            type="text"
            className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring focus:ring-blue-500"
            placeholder="Enter your address"
            {...register("address", {
              required: "Address is required",
            })}
          />
          {errors.address && (
            <span className="text-red-500 text-sm">
              {errors.address.message as string}
            </span>
          )}
        </div>

        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Phone
          </label>
          <input
            type="number"
            className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring focus:ring-blue-500"
            placeholder="Enter your phone"
            {...register("phone", {
              required: "Phone is required",
            })}
          />
          {errors.phone && (
            <span className="text-red-500 text-sm">
              {errors.phone.message as string}
            </span>
          )}
        </div>

        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition duration-200 cursor-pointer"
        >
          Sign Up
        </button>

        <div className="flex items-center gap-2 my-6">
          <div className="flex-grow h-px bg-gray-300"></div>
          <span className="text-sm text-gray-600 whitespace-nowrap">
            ¿already have an account?
          </span>
          <div className="flex-grow h-px bg-gray-300"></div>
        </div>

        <Link href={"/login"}>
          <button className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition duration-200 cursor-pointer">
            Login
          </button>
        </Link>
      </form>
      {isError && <AlertMessage type="register" status="error" />}
      {isSuccess && <AlertMessage type="register" status="success" />}
    </div>
  );
};

export default SignupComponent;
