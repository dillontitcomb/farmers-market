import React from 'react';
import { Link } from 'react-router-dom';

function Header(){
  return (
    <div>
      <h1>Welcome to the Portland Farmer's Market</h1>
      <Link to="/">Home</Link> | <Link to="/produce">Monthly Produce</Link> | <Link to="/newday">Create Day</Link>
      <style jsx>{`
          div {
            text-align: center;
            font-weight: bold;
          }
          `}
      </style>
    </div>
  );
}

export default Header;
