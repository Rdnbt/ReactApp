import React from 'react';
import { Link } from 'react-router-dom';
import './Card.css';

function Card({ title, to, image }) {
  const cardStyle = {
    backgroundImage: `url(${image})`,
    // 他のスタイル指定
  };

  return (
    <Link to={to} style={cardStyle} className="card">
      <h3>{title}</h3>
    </Link>
  );
}

export default Card;
