import React from "react";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div style={{textAlign:"center", padding:"40px"}}>
      <h1>Community Issue Reporting System</h1>
      <p>Report local problems and track their resolution.</p>

      <div style={{marginTop:"30px"}}>
        <Link to="/report">
          <button>Report an Issue</button>
        </Link>

        <Link to="/track" style={{marginLeft:"20px"}}>
          <button>Track Issues</button>
        </Link>

        <Link to="/login" style={{marginLeft:"20px"}}>
          <button>Authority Login</button>
        </Link>
      </div>
    </div>
  );
}

export default Home;