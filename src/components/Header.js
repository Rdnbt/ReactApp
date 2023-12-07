import React, { memo } from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

const Header = memo(() => {
  return (
    <header className="header">
      <Link to="/" className="header-logo">
        <img src="/brand-icon.png" alt="Brand" />
      </Link>
      <nav className="header-nav">
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/subjects">Subjects</Link></li>
          {/* 他のナビゲーション項目 */}
        </ul>
      </nav>
    </header>
  );
});

export default Header;
