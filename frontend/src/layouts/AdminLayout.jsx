import useAuth from "../hooks/useAuth";

export default function AdminLayout({ children }) {
  const { logout } = useAuth();

  return (
    <div>
      <h2>Admin Dashboard</h2>
      <button onClick={logout}>Logout</button>
      <hr />
      {children}
    </div>
  );
}
