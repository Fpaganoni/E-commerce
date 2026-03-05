"use client";

// vedors
import Link from "next/link";
import { useState } from "react";
import {
  AiOutlineEye,
  AiOutlineEyeInvisible,
  AiOutlineLoading3Quarters,
} from "react-icons/ai";
import { useForm } from "react-hook-form";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";

// hooks
import useRegister from "../../hooks/useRegister";

//types
import IUsers from "../../types/IUsers";

const SignupComponent = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const { mutate, isPending } = useRegister();

  const router = useRouter();

  const {
    register,
    reset,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<IUsers & { confirmPassword?: string }>();

  const onSubmit = (data: IUsers & { confirmPassword?: string }) => {
    const { confirmPassword, ...userData } = data;
    mutate(userData, {
      onSuccess: () => {
        toast.success("Account created successfully!");
        reset();
        router.push("/login");
      },
      onError: (error) => {
        toast.error(error.message || "Registration failed. Please try again.");
      },
    });
  };

  return (
    <div className="min-h-screen pt-24 pb-12 flex flex-col items-center justify-center bg-slate-50 dark:bg-slate-900 transition-colors duration-300 relative overflow-hidden">
      {/* Decorative Background Elements */}
      <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-blue-400/20 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute bottom-1/4 left-1/4 w-96 h-96 bg-emerald-400/20 rounded-full blur-3xl pointer-events-none"></div>

      <div className="w-full max-w-md px-6 z-10 animate-fade-in">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-extrabold text-slate-900 dark:text-white tracking-tight mb-2">
            Create Account
          </h1>
          <p className="text-slate-500 dark:text-slate-400 font-light">
            Join E-Commerce today
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

          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1.5">
                Full Name
              </label>
              <input
                type="text"
                className="w-full px-4 py-2.5 bg-white/50 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500/50 text-slate-900 dark:text-white transition-all"
                placeholder="Ex. John Doe"
                {...register("name", {
                  required: "Name is required",
                })}
              />
              {errors.name && (
                <span className="text-red-500 text-xs mt-1 block font-medium">
                  {errors.name.message as string}
                </span>
              )}
            </div>

            <div>
              <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1.5">
                Email Address
              </label>
              <input
                type="email"
                className="w-full px-4 py-2.5 bg-white/50 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500/50 text-slate-900 dark:text-white transition-all"
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
              <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1.5">
                Password
              </label>
              <div className="relative">
                <input
                  type={showPassword ? "text" : "password"}
                  className="w-full px-4 py-2.5 bg-white/50 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500/50 text-slate-900 dark:text-white transition-all pr-10"
                  placeholder="Create a password"
                  {...register("password", {
                    required: "Password is required",
                  })}
                />
                <button
                  type="button"
                  className="absolute inset-y-0 right-0 pr-3 flex items-center text-slate-400 hover:text-slate-600 dark:hover:text-slate-200 transition-colors"
                  onClick={() => setShowPassword((prev) => !prev)}
                >
                  {showPassword ? (
                    <AiOutlineEye size={20} />
                  ) : (
                    <AiOutlineEyeInvisible size={20} />
                  )}
                </button>
              </div>
              {errors.password && (
                <span className="text-red-500 text-xs mt-1 block font-medium">
                  {errors.password.message as string}
                </span>
              )}
            </div>

            <div>
              <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1.5">
                Confirm Password
              </label>
              <div className="relative">
                <input
                  type={showConfirmPassword ? "text" : "password"}
                  className="w-full px-4 py-2.5 bg-white/50 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500/50 text-slate-900 dark:text-white transition-all pr-10"
                  placeholder="Confirm your password"
                  {...register("confirmPassword", {
                    required: "Please confirm your password",
                    validate: (value) =>
                      value === watch("password") || "Passwords do not match",
                  })}
                />
                <button
                  type="button"
                  className="absolute inset-y-0 right-0 pr-3 flex items-center text-slate-400 hover:text-slate-600 dark:hover:text-slate-200 transition-colors"
                  onClick={() => setShowConfirmPassword((prev) => !prev)}
                >
                  {showConfirmPassword ? (
                    <AiOutlineEye size={20} />
                  ) : (
                    <AiOutlineEyeInvisible size={20} />
                  )}
                </button>
              </div>
              {errors.confirmPassword && (
                <span className="text-red-500 text-xs mt-1 block font-medium">
                  {errors.confirmPassword.message as string}
                </span>
              )}
            </div>

            <div>
              <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1.5">
                Shipping Address
              </label>
              <input
                type="text"
                className="w-full px-4 py-2.5 bg-white/50 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500/50 text-slate-900 dark:text-white transition-all"
                placeholder="Ex. 123 Main St"
                {...register("address", {
                  required: "Address is required",
                })}
              />
              {errors.address && (
                <span className="text-red-500 text-xs mt-1 block font-medium">
                  {errors.address.message as string}
                </span>
              )}
            </div>

            <div>
              <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1.5">
                Phone Number
              </label>
              <input
                type="tel"
                className="w-full px-4 py-2.5 bg-white/50 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500/50 text-slate-900 dark:text-white transition-all"
                placeholder="Ex. +1 (123) 456-7890"
                {...register("phone", {
                  required: "Phone is required",
                })}
              />
              {errors.phone && (
                <span className="text-red-500 text-xs mt-1 block font-medium">
                  {errors.phone.message as string}
                </span>
              )}
            </div>

            <button
              type="submit"
              disabled={isPending}
              className="w-full bg-blue-600 hover:bg-blue-700 disabled:bg-blue-400 disabled:cursor-not-allowed text-white font-medium py-3 px-4 mt-4 rounded-xl transition-all duration-300 shadow-lg shadow-blue-500/30 hover:-translate-y-0.5 cursor-pointer flex items-center justify-center gap-2"
            >
              {isPending && (
                <AiOutlineLoading3Quarters className="animate-spin" />
              )}
              {isPending ? "Creating Account..." : "Create Account"}
            </button>
          </div>

          <div className="mt-8 pt-6 border-t border-slate-200 dark:border-slate-700/50">
            <p className="text-center text-sm text-slate-600 dark:text-slate-400">
              Already have an account?{" "}
              <Link
                href="/login"
                className="text-blue-600 dark:text-blue-400 font-semibold hover:underline cursor-pointer"
              >
                Sign in
              </Link>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SignupComponent;
