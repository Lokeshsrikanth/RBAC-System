import useAuth from "../hooks/useAuth";

export default function UserLayout({ children }) {
  const { logout } = useAuth();

  return (
    <div>
      <h2>User Dashboard</h2>
      <button onClick={logout}>Logout</button>
      <hr />
      {children}
    </div>
  );
}
