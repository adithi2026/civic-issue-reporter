import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// Components
import Navbar from "./components/Navbar";
import Loader from "./components/Loader";

// Pages
import Home from "./pages/Home";
import ReportIssue from "./pages/ReportIssue";
import TrackIssues from "./pages/TrackIssues";
import Dashboard from "./pages/Dashboard";
import Login from "./pages/Login";

// Context
import { AuthProvider } from "./context/AuthContext";

// Styles
import "./App.css";

function App() {
  return (
    <AuthProvider>
      <Router>
        <Navbar />

        <div className="app-container">
          <React.Suspense fallback={<Loader />}>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/report" element={<ReportIssue />} />
              <Route path="/track" element={<TrackIssues />} />
              <Route path="/dashboard" element={<Dashboard />} />
              <Route path="/login" element={<Login />} />
            </Routes>
          </React.Suspense>
        </div>
      </Router>
    </AuthProvider>
  );
}

export default App;