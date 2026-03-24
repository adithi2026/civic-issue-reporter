import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function Login() {

  const [username,setUsername] = useState("");
  const [password,setPassword] = useState("");

  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();

    if(username==="admin" && password==="admin123"){
      navigate("/dashboard");
    }
    else{
      alert("Invalid login");
    }
  };

  return (
    <div style={{padding:"40px"}}>
      <h2>Authority Login</h2>

      <form onSubmit={handleLogin}>
        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e)=>setUsername(e.target.value)}
        />
        <br /><br />

        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e)=>setPassword(e.target.value)}
        />
        <br /><br />

        <button type="submit">Login</button>
      </form>
    </div>
  );
}

export default Login;