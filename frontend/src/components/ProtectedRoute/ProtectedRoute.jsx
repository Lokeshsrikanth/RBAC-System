import { Navigate } from "react-router-dom";
import useAuth from "../../hooks/useAuth";

export default function ProtectedRoute({ children, allowedRoles }) {
  const { user } = useAuth();

  // Not logged in
  if (!user) {
    return <Navigate to="/login" replace />;
  }

  // Role not allowed
  const isAllowed = allowedRoles.includes(user.role);
  if (!isAllowed) {
    return (
      <div style={{ 
        padding: "40px",
        textAlign: "center",
        color: "#d9534f",
        fontSize: "20px",
        fontWeight: "600"
      }}>
        ❌ Access Denied — You are not authorized to view this page.
      </div>
    );
  }

  return children;
}
