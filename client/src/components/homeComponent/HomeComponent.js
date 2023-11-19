import React from "react";
import "./HomeComponent.css";
import logoImage from "../../image/Icon.png";

const HomeComponent = () => {
  return (
    <div className="title">
      <h1>
        Welcome to <span style={{ color: " #96ace3" }}>Journaling </span>{" "}
        <span style={{ color: "#ffb6c1" }}>Buddy</span>
        <span style={{ color: " #96ace3" }}>!</span>
      </h1>
      <img src={logoImage} />
      <h2>
        Welcome to Journaling Buddy, where we empower you to prioritize your
        mental well-being. Start your journey towards a healthier mind by
        effortlessly journaling your thoughts and emotions daily, making
        self-reflection an integral part of your routine.
      </h2>
    </div>
  );
};
export default HomeComponent;
