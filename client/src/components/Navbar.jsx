import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav style={styles.nav}>
      <h2 style={styles.logo}>Civic Reporter</h2>
      <div>
        <Link to="/" style={styles.link}>Home</Link>
        <Link to="/report" style={styles.link}>Report</Link>
        <Link to="/track" style={styles.link}>Track</Link>
        <Link to="/dashboard" style={styles.link}>Dashboard</Link>
        <Link to="/login" style={styles.link}>Login</Link>
      </div>
    </nav>
  );
};

const styles = {
  nav: {
    display: "flex",
    justifyContent: "space-between",
    padding: "10px 20px",
    background: "#1e293b",
    color: "#fff"
  },
  link: {
    margin: "0 10px",
    color: "#fff",
    textDecoration: "none"
  },
  logo: {
    fontWeight: "bold"
  }
};

export default Navbar;