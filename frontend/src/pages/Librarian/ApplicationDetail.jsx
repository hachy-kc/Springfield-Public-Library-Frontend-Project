import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import {
  getApplication,
  approveApplication,
  rejectApplication,
} from "../../api/applications.js";

export default function ApplicationDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [app, setApp] = useState(null);

  useEffect(() => {
    async function load() {
      const data = await getApplication(id);
      setApp(data);
    }
    load();
  }, [id]);

  if (!app) return <div>Loading...</div>;

  async function handleApprove() {
    await approveApplication(id);
    alert("Application Approved");
    navigate("/librarian/pending");
  }

  async function handleReject() {
    await rejectApplication(id);
    alert("Application Rejected");
    navigate("/librarian/pending");
  }

  return (
    <div>
      <h1>Application Details</h1>

      <p><strong>Name:</strong> {app.fullName}</p>
      <p><strong>Email:</strong> {app.email}</p>
      <p><strong>Phone:</strong> {app.phone}</p>
      <p><strong>DOB:</strong> {app.dob}</p>
      <p><strong>Address:</strong> {app.address}</p>

      <button onClick={handleApprove}>Approve</button>
      <button onClick={handleReject}>Reject</button>
    </div>
  );
}
