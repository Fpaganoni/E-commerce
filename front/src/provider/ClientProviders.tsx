"use client";

// vedors
import Provider from "./Provider";
import AuthProvider from "../context/AuthContext";
import { ReactNode } from "react";

export default function ClientProviders({ children }: { children: ReactNode }) {
  return (
    <AuthProvider>
      <Provider>{children}</Provider>
    </AuthProvider>
  );
}
