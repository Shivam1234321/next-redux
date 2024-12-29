// src/app/dashboard/page.tsx
import ProtectedRoute from "../components/protected-route";

export default function Dashboard() {
  return (
    <ProtectedRoute>
      <div className="p-6 bg-gray-100 min-h-screen">
        <h1 className="text-3xl font-bold text-gray-800">Dashboard</h1>
        <p className="mt-2 text-gray-600">Welcome to your dashboard!</p>
      </div>
    </ProtectedRoute>
  );
}
