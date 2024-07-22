import React from "react";
import "../styles/Pomodoro.css";
import ModeContainer from "./ModeContainer";

const Pomodoro = () => {
  return (
    <div className="Pomodoro">
      <h1> Pomodoro Timer </h1>
      <ModeContainer />
    </div>
  );
};

export default Pomodoro;
