// Navbar.tsx
import React from 'react';
import { NavLink } from 'react-router-dom';

const Navbar: React.FC = () => {
  return (
    <nav>
      <NavLink to="/" className={({ isActive }) => (isActive ? "active" : "")}>Home</NavLink>
      <NavLink to="/properties" className={({ isActive }) => (isActive ? "active" : "")}>Properties</NavLink>
      <NavLink to="/contact" className={({ isActive }) => (isActive ? "active" : "")}>Contact</NavLink>
      <NavLink to="/admin" className={({ isActive }) => (isActive ? "active" : "")}>AdminPanel</NavLink>
    </nav>
  );
};

export default Navbar;
