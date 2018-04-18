import React from 'react';

function Header(){
  return (
    <div>
      <h1>Welcome to the Portland Farmer's Market</h1>
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
