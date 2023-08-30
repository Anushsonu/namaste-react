import React from "react";
import User from "./User";
import UserClass from "./UserClass";

const About = () => {
  return (
    <div>
      <h2>About</h2>
      <User name={"Anush from fun"} />
      <UserClass name={"Anush from class"} location={"Port Blair"} />
    </div>
  );
};

export default About;
