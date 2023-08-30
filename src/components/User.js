import React from "react";

const User = ({ name }) => {
  return (
    <div className="user-card">
      <h2>Name:{name}</h2>
      <h3>Location: Bangalore</h3>
      <h4>Contact: anushanilpb@gmail.com</h4>
    </div>
  );
};

export default User;
