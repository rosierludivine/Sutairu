import React, { useState, useEffect, useRef } from "react";
import burger from "../icons/burger.svg";
import logo from "../icons/logo.svg";

function Navbar({ name }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuRef = useRef(); // Ref for the menu

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  const handleClickOutside = (event) => {
    if (menuRef.current && !menuRef.current.contains(event.target)) {
      setIsMenuOpen(false);
    }
  };

  useEffect(() => {
    // Add when mounted
    document.addEventListener("mousedown", handleClickOutside);
    // Return function to be called when unmounted
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []); // Empty array ensures that effect is only run on mount and unmount

  const style = {
    parent: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      height: "90px",
    },
    h1: {
      color: "#7D4F50",
      fontWeight: 400,
      fontSize: "64px",
    },
    rightElements: {
      display: "flex",
      gap: "0px 10px",
    },
    menu: {
      zIndex: 9999,
      position: "fixed",
      top: 0,
      right: 0,
      width: "300px",
      height: "100%",
      backgroundColor: "#fff",
      boxShadow: "-2px 0px 5px rgba(0,0,0,0.5)",
      transform: isMenuOpen ? "translateX(0)" : "translateX(100%)",
      transition: "transform 0.3s ease",
      padding: "20px",
    },
    menuItem: {
      color: "#7D4F50", // Example styling, adjust as needed
      textDecoration: "none", // Removes underline from links
      display: "block", // Makes the link behave like a block element
      margin: "10px 0", // Example spacing, adjust as needed
      fontSize: "16px", // Adjust as needed
    },
  };

  return (
    <div style={style.parent}>
      <a href="/">
        <img src={logo} alt="logo" />
      </a>
      <h2 style={style.h1}>{name}</h2>
      <div style={style.rightElements}>
        <img src={burger} alt="burger" onClick={toggleMenu} />
      </div>
      <div ref={menuRef} style={style.menu}>
        {isMenuOpen && (
          <div>
            {/* Menu items go here */}
            <a href="/myprofile" style={style.menuItem}>
              Profile
            </a>
            <a href="/mesdesigns" style={style.menuItem}>
              Design
            </a>
            <a href="/monpanier" style={style.menuItem}>
              Panier
            </a>
            <a href="/mescommandes" style={style.menuItem}>
              Commande
            </a>
            <a href="/" style={style.menuItem}>
              Se déconnecter
            </a>
          </div>
        )}
      </div>
    </div>
  );
}

export default Navbar;
