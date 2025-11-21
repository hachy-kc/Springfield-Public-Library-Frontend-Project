import { createContext, useState, useEffect } from "react";

export const AuthContext = createContext(null);

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null); // {role, name, cardNumber}

  async function login(cardNumber, pin) {
    const res = await fetch("/api/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ cardNumber, pin }),
    });

    if (!res.ok) throw new Error("Invalid credentials");
    const data = await res.json();

    setUser(data.user); // { cardNumber, role, name }
    localStorage.setItem("user", JSON.stringify(data.user));
  }

  function logout() {
    setUser(null);
    localStorage.removeItem("user");
  }

  useEffect(() => {
    const saved = localStorage.getItem("user");
    if (saved) setUser(JSON.parse(saved));
  }, []);

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}
