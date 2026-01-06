import useAuth from "../hooks/useAuth";

export default function ManagerLayout({ children }) {
  const { logout } = useAuth();

  return (
    <div>
      <h2>Manager Dashboard</h2>
      <button onClick={logout}>Logout</button>
      <hr />
      {children}
    </div>
  );
}
