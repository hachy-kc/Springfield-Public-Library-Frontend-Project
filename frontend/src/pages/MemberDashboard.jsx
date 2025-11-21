import { useContext } from "react";
import { AuthContext } from "../context/AuthContext.jsx";

export default function MemberDashboard() {
  const { user } = useContext(AuthContext);

  return (
    <div>
      <h1>Member Dashboard</h1>
      <p>Welcome, {user.name}.</p>
      <p>Card Number: {user.cardNumber}</p>
      <p>Status: {user.status || "Active"}</p>
    </div>
  );
}
