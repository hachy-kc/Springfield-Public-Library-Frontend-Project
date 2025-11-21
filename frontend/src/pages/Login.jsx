import { useState, useContext } from "react";
import { AuthContext } from "../context/AuthContext.jsx";
import "./Login.css";
import "../assets/global.css";


export default function Login() {
  const { login } = useContext(AuthContext);

  const [cardNumber, setCardNumber] = useState("");
  const [pin, setPin] = useState("");

  async function handleSubmit(e) {
    e.preventDefault();
    try {
      await login(cardNumber, pin);
      alert("Logged in!");
    } catch (err) {
      alert("Invalid credentials");
    }
  }

  return (
    <div>
      <h1>Login</h1>

      <form onSubmit={handleSubmit}>
        <input
          placeholder="Library Card Number"
          value={cardNumber}
          onChange={(e) => setCardNumber(e.target.value)}
        />
        <input
          placeholder="PIN"
          type="password"
          value={pin}
          onChange={(e) => setPin(e.target.value)}
        />
        <button type="submit">Login</button>
      </form>
    </div>
  );
}
