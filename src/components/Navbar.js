import React from 'react';
import homeIcon from '../images/home-icon.png';
import profileIcon from '../images/profile-icon.png';

const Navbar = () => {
  return (
    <div className="container">
      <nav className="navbar">
      <div className="logo" style={{ fontSize: '2.5rem' }}>Connectify</div>
      <ul className="nav-links">
        <li><img src={homeIcon} alt="Home" style={{ width: '3rem' }} /></li>
        <li><img src={profileIcon} alt="Profile" style={{ width: '3rem' }} /></li>
      </ul>
    </nav>
    </div>
  );
}

export default Navbar;

