"use client";

// Vedors
import { useState } from "react";
import {
  AiOutlineEye,
  AiOutlineEyeInvisible,
  AiOutlineLoading3Quarters,
} from "react-icons/ai";
import Link from "next/link";
import { useForm } from "react-hook-form";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";

// types
import ILoginData from "../../types/IUsers";

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
  const { mutate, isPending } = useLogin();

  const onSubmit = (data: ILoginData) => {
    mutate(data, {
      onSuccess: (result) => {
        toast.success("Login successful!");
        login(result.user, result.token);
        router.push("/home");
      },
      onError: (error) => {
        toast.error(error.message || "Login failed. Please try again.");
      },
    });
  };

  return (
    <div className="min-h-screen pt-24 pb-12 flex flex-col items-center justify-center bg-slate-50 dark:bg-slate-900 transition-colors duration-300 relative overflow-hidden">
      {/* Decorative Background Elements */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-400/20 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-400/20 rounded-full blur-3xl pointer-events-none"></div>

      <div className="w-full max-w-md px-6 z-10 animate-fade-in">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-extrabold text-slate-900 dark:text-white tracking-tight mb-2">
            Welcome Back
          </h1>
          <p className="text-slate-500 dark:text-slate-400 font-light">
            Sign in to continue to E-Commerce
          </p>
        </div>

        <form
          onSubmit={handleSubmit(onSubmit)}
          className="glass-panel p-8 rounded-3xl shadow-2xl relative w-full"
        >
          <Link
            href={"/"}
            className="absolute top-6 right-6 text-slate-400 hover:text-slate-600 dark:hover:text-slate-200 transition-colors"
          >
            <span className="text-xl font-bold">&times;</span>
          </Link>

          <div className="space-y-6">
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2"
              >
                Email Address
              </label>
              <input
                id="email"
                type="email"
                className="w-full px-4 py-3 bg-white/50 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500/50 text-slate-900 dark:text-white transition-all"
                placeholder="Ex. mail@example.com"
                {...register("email", {
                  required: "Email is required",
                })}
              />
              {errors.email && (
                <span className="text-red-500 text-xs mt-1 block font-medium">
                  {errors.email.message as string}
                </span>
              )}
            </div>

            <div>
              <div className="flex justify-between items-center mb-2">
                <label
                  htmlFor="password"
                  className="block text-sm font-medium text-slate-700 dark:text-slate-300"
                >
                  Password
                </label>
                <a
                  href="#"
                  className="text-xs text-blue-600 dark:text-blue-400 hover:underline font-medium"
                >
                  Forgot password?
                </a>
              </div>
              <div className="relative">
                <input
                  id="password"
                  type={showPassword ? "text" : "password"}
                  className="w-full px-4 py-3 bg-white/50 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500/50 text-slate-900 dark:text-white transition-all"
                  placeholder="Enter your password"
                  {...register("password", {
                    required: "Password is required",
                  })}
                />
                <button
                  type="button"
                  className="absolute inset-y-0 right-0 pr-3 flex items-center text-slate-400 hover:text-slate-600 dark:hover:text-slate-200 transition-colors"
                  onClick={() => setShowPassword((prev) => !prev)}
                  tabIndex={-1}
                >
                  {showPassword ? (
                    <AiOutlineEyeInvisible size={20} />
                  ) : (
                    <AiOutlineEye size={20} />
                  )}
                </button>
              </div>
              {errors.password && (
                <span className="text-red-500 text-xs mt-1 block font-medium">
                  {errors.password.message as string}
                </span>
              )}
            </div>

            <button
              type="submit"
              disabled={isPending}
              className="w-full bg-blue-600 hover:bg-blue-700 disabled:bg-blue-400 disabled:cursor-not-allowed text-white font-medium py-3 px-4 rounded-xl transition-all duration-300 shadow-lg shadow-blue-500/30 hover:-translate-y-0.5 cursor-pointer flex items-center justify-center gap-2"
            >
              {isPending && (
                <AiOutlineLoading3Quarters className="animate-spin" />
              )}
              {isPending ? "Signing In..." : "Sign In"}
            </button>
          </div>

          <div className="mt-8 pt-6 border-t border-slate-200 dark:border-slate-700/50">
            <p className="text-center text-sm text-slate-600 dark:text-slate-400">
              New to E-Commerce?{" "}
              <Link
                href="/signup"
                className="text-blue-600 dark:text-blue-400 font-semibold hover:underline"
              >
                Create an account
              </Link>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
