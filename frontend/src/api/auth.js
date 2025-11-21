export async function loginUser(cardNumber, pin) {
  const res = await fetch("/api/login", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ cardNumber, pin }),
  });

  return res.json();
}
