import React from "react";
import Profile from "./Profile";
import ProfileClass from "./ProfileClass";

const About = () => {
  return (
    <div className="about">
      <h1>About Page</h1>
      <Profile />
      <ProfileClass name="Mahesh" />
    </div>
  );
};

export default About;
