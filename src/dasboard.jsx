import React from "react";

export default function Dashboard() {
  return (
    <div data-testid="dashboard-page" style={{ padding: "24px" }}>
      <h1>Dashboard</h1>

      <section>
        <p>Welcome to the dashboard.</p>
      </section>

      <section style={{ marginTop: "16px" }}>
        <h2>Stats</h2>
        <ul>
          <li>Total Users: 120</li>
          <li>Active Sessions: 34</li>
          <li>Errors Today: 2</li>
        </ul>
      </section>
    </div>
  );
}
