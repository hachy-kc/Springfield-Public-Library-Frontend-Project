import { Link } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../context/AuthContext.jsx";

export default function Navbar() {
  const { user, logout } = useContext(AuthContext);

  return (
    <nav style={{ padding: "10px", borderBottom: "1px solid #ccc" }}>
      <Link to="/apply">Apply</Link> | <Link to="/login">Login</Link>

      {user && (
        <>
          {" | "}
          <span>Welcome, {user.name}</span>
          {" | "}
          <button onClick={logout}>Logout</button>
          {" | "}
          {user.role === "member" && <Link to="/member">Dashboard</Link>}
          {user.role === "librarian" && (
            <Link to="/librarian/pending">Pending Apps</Link>
          )}
        </>
      )}
    </nav>
  );
}
