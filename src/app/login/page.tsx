// src/app/login/page.tsx
"use client";

import { useAuth } from "../providers/auth-context";
import { useRouter } from "next/navigation";

export default function Login() {
  const { login } = useAuth();
  const router = useRouter();

  const handleLogin = () => {
    login(); // Set authenticated state
    router.push("/dashboard"); // Redirect to dashboard
  };

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <h1 className="text-3xl font-bold text-gray-800">Login</h1>
      <p className="mt-2 text-gray-600">Please log in to access the dashboard.</p>
      <button
        className="mt-4 px-4 py-2 bg-blue-600 text-white rounded"
        onClick={handleLogin}
      >
        Log In
      </button>
    </div>
  );
}
