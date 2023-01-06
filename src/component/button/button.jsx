import React from "react";
import "./button.css";

const Button = ({ size, color, text }) => {
  return <button className={`btn ${size} ${color}`}>{text}</button>;
};

export default Button;
