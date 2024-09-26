import React from 'react';
import '../styles/navigation_bar.css';

const NavigationBar: React.FC = () => {
  return (
    <nav className="navbar">
      <button onClick={() => window.location.href = '/'} className="nav-button">Frontpage</button>
      <button onClick={() => window.location.href = '/basket'} className="nav-button">Basket</button>
    </nav>
  );
};

export default NavigationBar;
