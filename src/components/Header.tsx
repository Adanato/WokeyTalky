
import React from 'react';
import {Link } from 'react-router-dom';
function Header() {
  return (
    <div>
        <h1>WokeyTalky</h1>
        <nav>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/arena-battle">Arena Battle</Link></li>
            <li><Link to="/leaderboard">Leadererboard</Link></li>
          </ul>
        </nav>
      </div>
  );
}

export default Header;