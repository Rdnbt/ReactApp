import React, { memo } from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

const Header = memo(() => {
  return (
    <header className="header">
      <Link to="/subjects" className="header-logo">
        <img src="/brand-icon.png" alt="Brand" />
      </Link>
      <nav className="header-nav">
        <ul>
          <li><Link to="/profile">Profile</Link></li>
          <li><Link to="/dictionary">Words</Link></li>
          {/* Other navigation items */}
        </ul>
      </nav>
    </header>
  );
});

export default Header;
