import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import ButtonGroup from "react-bootstrap/ButtonGroup";
import Timer from "./Timer";

const ModeContainer = () => {
  const [mode, setMode] = useState("pomodoro");
  const [minutes, setMinutes] = useState(25);

  const handleClick = (mode) => {
    if (mode === "pomodoro") setMinutes(25);
    if (mode === "shortbreak") setMinutes(5);
    if (mode === "longbreak") setMinutes(10);
    setMode(mode);
  };

  return (
    <div className="mode-container">
      <ButtonGroup aria-label="Mode selection" className="button-group">
        <Button className="mode-button" onClick={() => handleClick("pomodoro")}>
          Pomodoro
        </Button>
        <Button
          className="mode-button"
          onClick={() => handleClick("shortbreak")}
        >
          Short Break
        </Button>
        <Button
          className="mode-button"
          onClick={() => handleClick("longbreak")}
        >
          Long Break
        </Button>
      </ButtonGroup>
      <Timer minutes={minutes} seconds={0} />
    </div>
  );
};

export default ModeContainer;
