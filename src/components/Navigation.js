import React from "react";
import { Link } from "react-router-dom";
import "./Navigation.css";

// export const Navigation = () => {
//   return (
//     <div className="nav">
//       <Link to="/">Home</Link>
//       <Link to={{ pathname: "/about", state: { test: true } }}>About</Link>
//     </div>
//   );
// };

export const HomeNavi = () => {
  return (
    <div className="home-btn">
      <Link to="/">Home</Link>
    </div>
  );
};

// export default Navigation;
