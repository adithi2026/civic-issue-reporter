import React from "react";

function TrackIssues() {

  const issues = [
    {id:1, title:"Broken Street Light", status:"Pending"},
    {id:2, title:"Garbage Not Collected", status:"Resolved"},
    {id:3, title:"Pothole on Road", status:"Pending"}
  ];

  return (
    <div style={{padding:"40px"}}>
      <h2>Track Reported Issues</h2>

      <table border="1" cellPadding="10">
        <thead>
          <tr>
            <th>ID</th>
            <th>Issue</th>
            <th>Status</th>
          </tr>
        </thead>

        <tbody>
          {issues.map(issue => (
            <tr key={issue.id}>
              <td>{issue.id}</td>
              <td>{issue.title}</td>
              <td>{issue.status}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default TrackIssues;