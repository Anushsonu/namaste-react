import React from "react";
import ReactDOM from "react-dom/client";

const RestaurantCard = () => {
  return (
    <div className="res-card">
      <h3>Meghana Foods</h3>
    </div>
  );
};

console.log("first");

const Body = () => {
  return (
    <div className="body">
      <div className="search">Search</div>
      <div className="res-container">
        <RestaurantCard />
      </div>
    </div>
  );
};

const Header = () => {
  return (
    <div className="header">
      <div className="logo-container">
        <img
          className="logo"
          src="https://imgs.search.brave.com/IjF0WLT9fJRugfVBncgHCWGpFq_bwDJhn5UpDOK9sBU/rs:fit:500:0:0/g:ce/aHR0cHM6Ly9pbWFn/ZXMtcGxhdGZvcm0u/OTlzdGF0aWMuY29t/L1liWTM1U1dJUmdj/S3VNQzFKblZrT2FY/OGdUbz0vNDE5eDE0/OToxNjE5eDEzNDkv/NTAweDUwMC90b3Av/c21hcnQvOTlkZXNp/Z25zLWNvbnRlc3Rz/LWF0dGFjaG1lbnRz/LzE0NS8xNDUxNzUv/YXR0YWNobWVudF8x/NDUxNzUzOTQ.jpeg"
        />
      </div>
      <div className="nav-items">
        <ul>
          <li>Home</li>
          <li>About</li>
          <li>Contact</li>
          <li>Cart</li>
        </ul>
      </div>
    </div>
  );
};

const AppLayout = () => (
  <div className="app">
    <Header />
    <Body />
  </div>
);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout />);
