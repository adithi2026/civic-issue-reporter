import React, { useState } from "react";

function Dashboard() {

  const [issues, setIssues] = useState([
    {id:1, title:"Broken Street Light", status:"Pending"},
    {id:2, title:"Garbage Not Collected", status:"Pending"}
  ]);

  const markResolved = (id) => {
    const updated = issues.map(issue =>
      issue.id === id ? {...issue, status:"Resolved"} : issue
    );

    setIssues(updated);
  };

  return (
    <div style={{padding:"40px"}}>
      <h2>Authority Dashboard</h2>

      {issues.map(issue => (
        <div key={issue.id} style={{marginBottom:"20px"}}>
          <h4>{issue.title}</h4>
          <p>Status: {issue.status}</p>

          {issue.status === "Pending" && (
            <button onClick={() => markResolved(issue.id)}>
              Mark as Resolved
            </button>
          )}
        </div>
      ))}
    </div>
  );
}

export default Dashboard;