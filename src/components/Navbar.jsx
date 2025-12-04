import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav style={{ 
      backgroundColor: "#333", 
      padding: "10px", 
      display: "flex", 
      justifyContent: "center" 
    }}>
      <Link to="/" style={{ margin: "0 15px", color: "#fff", textDecoration: "none" }}>Home</Link>
      <Link to="/about" style={{ margin: "0 15px", color: "#fff", textDecoration: "none" }}>About</Link>
      <Link to="/contact" style={{ margin: "0 15px", color: "#fff", textDecoration: "none" }}>Contact</Link>
      <Link to="/project" style={{ margin: "0 15px", color: "#fff", textDecoration: "none" }}>Project</Link>
      <Link to="/service" style={{ margin: "0 15px", color: "#fff", textDecoration: "none" }}>Service</Link>
    </nav>
  );
}
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./Navbar";

function Home() {
  return <h2>Page d'accueil</h2>;
}

function About() {
  return <h2>À propos</h2>;
}

function Contact() {
  return <h2>Contact</h2>;
}

function Project() {
  return <h2>Projets</h2>;
}

function Service() {
  return <h2>Services</h2>;
}

export default Navbar;
