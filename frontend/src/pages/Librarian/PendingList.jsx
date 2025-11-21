import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getPendingApplications } from "../../api/applications.js";

export default function PendingList() {
  const [apps, setApps] = useState([]);

  useEffect(() => {
    async function load() {
      const data = await getPendingApplications();
      setApps(data);
    }
    load();
  }, []);

  return (
    <div>
      <h1>Pending Applications</h1>

      <ul>
        {apps.map((app) => (
          <li key={app.id}>
            <Link to={`/librarian/application/${app.id}`}>
              {app.fullName} — {app.email}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
