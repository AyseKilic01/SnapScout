import React from 'react';
import { NavLink } from 'react-router-dom';

const Navigation = () => {
  return (
    <nav className="main-nav">
      <ul>
        <li><NavLink to="/mountain">Dağlar</NavLink></li>
        <li><NavLink to="/beach">Sahiller</NavLink></li>
        <li><NavLink to="/bird">Kuşlar</NavLink></li>
        <li><NavLink to="/food">Yemekler</NavLink></li>
      </ul>
    </nav>
  );
}

export default Navigation;