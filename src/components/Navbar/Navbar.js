import React, { useState, useEffect } from "react";
import "./Navbar.css";
import { Menu, X } from "lucide-react";

function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      setScrolled(window.scrollY > 50);
    });
  }, []);

  return (
    <nav className={`navbar ${scrolled ? "scrolled" : ""}`}>
      <div className="nav-container">
        <div className="logo gradient-text">AP Studios</div>

        <div className={`nav-links ${open ? "active" : ""}`}>
          {["home","about","services","contact"].map((item) => (
            <a key={item} href={`#${item}`} onClick={()=>setOpen(false)}>
              {item}
            </a>
          ))}
        </div>

        <div className="menu-icon" onClick={()=>setOpen(!open)}>
          {open ? <X size={24}/> : <Menu size={24}/>}
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
