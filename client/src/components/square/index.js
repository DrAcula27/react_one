import React from "react";
import "./index.css";

const Square = (props) => {
  return (
    <button className="square" onClick={props.onClick}>
      {props.value}
    </button>
  );
};

export default Square;
