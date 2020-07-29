import React from "react";
import "./About.css";

function About(props) {
  console.log(props);
  return (
    <div className="test">
      <div className="forDesk">desk</div>
      <div className="forTab">tab</div>
      <div className="forMob">mobile</div>
    </div>
  );
}

export default About;
