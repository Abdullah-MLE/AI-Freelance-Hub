import React from "react";
import { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import styles from "../styles/Navbar.module.css";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  const handleViewProfile = () => {
    navigate("/profile");
    setMenuOpen(false);
  };

  const isActive = (path) => {
    return location.pathname === path || 
           (path === "/dashboard" && location.pathname === "/");
  };

  return (
    <nav className={styles.navbar}>
      <Link to="/dashboard" className={styles.logo}>
        <div>
          <svg
            width="30"
            height="40"
            viewBox="0 0 30 40"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M15 0L20.4545 5.33333L0 25.3333V14.6667L15 0Z"
              fill="#06D1D4"
            ></path>
            <path
              d="M2.90827 28.177L15 40L30 25.3334V14.6667L20.4545 5.33337L0 25.3334L0.0041688 25.3375L20.4545 5.33337V20.6667L11.25 29.6667V20.1324L2.90827 28.177Z"
              fill="#3628A0"
            ></path>
          </svg>
        </div>
      </Link>

      <div
        className={`${styles.hamburger} ${menuOpen ? styles.active : ""}`}
        onClick={() => setMenuOpen(!menuOpen)}
      >
        <span></span>
        <span></span>
        <span></span>
      </div>

      <ul className={`${styles.navLinks} ${menuOpen ? styles.showMenu : ""}`}>
        <li>
          <Link
            to="/dashboard"
            className={isActive("/dashboard") ? styles.active : ""}
            onClick={() => setMenuOpen(false)}
          >
            Dashboard
          </Link>
        </li>
        <li>
          <Link
            to="/about"
            className={isActive("/about") ? styles.active : ""}
            onClick={() => setMenuOpen(false)}
          >
            ABOUT US
          </Link>
        </li>
        <li>
          <Link
            to="/contact"
            className={isActive("/contact") ? styles.active : ""}
            onClick={() => setMenuOpen(false)}
          >
            Contact us
          </Link>
        </li>
        <li>
          <button className={styles.profileBtn} onClick={handleViewProfile}>
            <span className={styles.profileIcon}>👤</span>
            Profile name
          </button>
        </li>
        <li>
          <button className={styles.signUp}>Sign Up</button>
        </li>
        <li>
          <button className={styles.login}>Login</button>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
