// src/pages/Home.jsx

import React from 'react';
import {Outlet} from "react-router-dom";
function Home() {
  return (
    <div>
      <h2>Welcome to the Home Page</h2>
      <p>This is the main content of the home page.</p>
      <Outlet/>
    </div>
  );
}

export default Home;