import React from "react";
// import react because might use hooks
import "./index.css";

const Header = () => {
  let title = "React-Tac-Toe";
  return <h1 className="header-title">{title}</h1>;
};

export default Header;
