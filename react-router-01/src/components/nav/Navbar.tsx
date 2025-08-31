import React from "react";
import { Link } from "react-router";

const Navbar: React.FC = () => {
  const navLinks = [
    { to: "/", content: "Home" },
    { to: "/about", content: "About" },
    { to: "/service", content: "Service" },
    { to: "/contact", content: "Contact" },
  ];

  // Object CSS styles
  const styles = {
    nav: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      padding: "10px",
      backgroundColor: "#222",
      color: "#fff",
    },
    title: {
      fontSize: "20px",
      fontWeight: "bold",
    },
    navContainer: {
      display: "flex",
      gap: "20px",
    },
    link: {
      textDecoration: "none",
      color: "white",
      fontSize: "18px",
      transition: "color 0.3s",
    },
    linkHover: {
      color: "#61dafb",
    },
  };

  return (
    <nav style={styles.nav}>
      <div style={styles.title}>
        <h1>Roger Router</h1>
      </div>
      <div style={styles.navContainer}>
        {navLinks.map((nl) => (
          <Link
            key={nl.to}
            to={nl.to}
            style={styles.link}
            onMouseEnter={(e: any) =>
              (e.currentTarget.style.color = styles.linkHover.color)
            }
            onMouseLeave={(e: any) =>
              (e.currentTarget.style.color = styles.link.color)
            }
          >
            {nl.content}
          </Link>
        ))}
      </div>
    </nav>
  );
};

export default Navbar;
