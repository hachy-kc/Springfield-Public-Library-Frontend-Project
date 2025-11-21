export async function submitApplication(payload) {
  const res = await fetch("/api/apply", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(payload),
  });
  return res.json();
}

export async function getPendingApplications() {
  const res = await fetch("/api/applications?status=pending");
  return res.json();
}

export async function getApplication(id) {
  const res = await fetch(`/api/applications/${id}`);
  return res.json();
}

export async function approveApplication(id) {
  const res = await fetch(`/api/applications/${id}/approve`, {
    method: "POST",
  });
  return res.json();
}

export async function rejectApplication(id) {
  const res = await fetch(`/api/applications/${id}/reject`, {
    method: "POST",
  });
  return res.json();
}
