import React from "react";

type AlertType = "login" | "register";
type AlertStatus = "success" | "error";

interface AlertMessageProps {
  type: AlertType;
  status: AlertStatus;
}

const messages = {
  login: {
    success: "Login successful!",
    error: "Login failed. Please try again.",
  },
  register: {
    success: "Registration successful!",
    error: "Registration failed. Please try again.",
  },
};

const AlertMessage: React.FC<AlertMessageProps> = ({ type, status }) => {
  const isSuccess = status === "success";

  return (
    <div
      className={`mt-4 px-4 py-2 rounded-md text-sm font-medium border ${
        isSuccess
          ? "bg-[var(--buttons)] text-gray-50 border-green-300"
          : "bg-[var(--error-form)] text-gray-50 border-red-300"
      }`}
    >
      {messages[type][status]}
    </div>
  );
};

export default AlertMessage;
