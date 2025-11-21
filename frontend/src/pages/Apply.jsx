import { useState } from "react";
import { submitApplication } from "../api/applications.js";
import "./Apply.css";
import "../assets/global.css";

export default function Apply() {
  const [form, setForm] = useState({
    fullName: "",
    dob: "",
    email: "",
    phone: "",
    address: "",
  });

  function handleChange(e) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  async function handleSubmit(e) {
    e.preventDefault();
    const data = await submitApplication(form);
    alert("Application submitted! ID: " + data.applicationId);
  }

  return (
    <div>
      <h1>Library Card Application</h1>

      <form onSubmit={handleSubmit}>
        <input name="fullName" placeholder="Full Name" onChange={handleChange} />
        <input name="dob" type="date" onChange={handleChange} />
        <input name="email" type="email" placeholder="Email" onChange={handleChange} />
        <input name="phone" placeholder="Phone" onChange={handleChange} />
        <textarea name="address" placeholder="Address" onChange={handleChange} />

        <button type="submit">Submit Application</button>
      </form>
    </div>
  );
}
