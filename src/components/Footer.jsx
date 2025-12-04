import React from 'react'

function Footer() {
  return (
    <footer style={{ 
      backgroundColor: "#222", 
      color: "#fff", 
      textAlign: "center", 
      padding: "20px" 
    }}>
      <p>© 2025 MonSite. Tous droits réservés.</p>
      <nav>
        <link to ="#about" style={{ margin: "0 10px", color: "#fff" }}>À propos</link>
        <link to ="#contact" style={{ margin: "0 10px", color: "#fff" }}>Contact</link>
        <link to ="#privacy" style={{ margin: "0 10px", color: "#fff" }}>Politique de confidentialité</link>
      </nav>
    </footer>
  );
}

export default Footer;
