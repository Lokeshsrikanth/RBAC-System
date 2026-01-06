import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Login from "../pages/Login/Login";
import ProtectedRoute from "../components/ProtectedRoute/ProtectedRoute";
import AdminDashboard from "../pages/AdminDashboard/AdminDashboard";
import ManagerDashboard from "../pages/ManagerDashboard/ManagerDashboard";
import UserDashboard from "../pages/UserDashboard/UserDashboard";
import AdminLayout from "../layouts/AdminLayout";
import ManagerLayout from "../layouts/ManagerLayout";
import UserLayout from "../layouts/UserLayout";

export default function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>

        {/* FIX: Redirect root "/" => /login */}
        <Route path="/" element={<Navigate to="/login" replace />} />

        {/* Login Page */}
        <Route path="/login" element={<Login />} />

        {/* Admin Route */}
        <Route
          path="/admin"
          element={
            <ProtectedRoute allowedRoles={["admin"]}>
              <AdminLayout>
                <AdminDashboard />
              </AdminLayout>
            </ProtectedRoute>
          }
        />

        {/* Manager Route */}
        <Route
          path="/manager"
          element={
            <ProtectedRoute allowedRoles={["manager"]}>
              <ManagerLayout>
                <ManagerDashboard />
              </ManagerLayout>
            </ProtectedRoute>
          }
        />

        {/* User Route */}
        <Route
          path="/user"
          element={
            <ProtectedRoute allowedRoles={["user"]}>
              <UserLayout>
                <UserDashboard />
              </UserLayout>
            </ProtectedRoute>
          }
        />

        {/* FIX: Catch-all wrong paths */}
        <Route path="*" element={<Navigate to="/login" replace />} />

      </Routes>
    </BrowserRouter>
  );
}
