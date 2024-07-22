import React, { useState, useEffect } from "react";
import Button from "react-bootstrap/Button";
import ButtonGroup from "react-bootstrap/ButtonGroup";

const Timer = ({ minutes: initialMinutes, seconds: initialSeconds }) => {
  const [minutes, setMinutes] = useState(initialMinutes);
  const [seconds, setSeconds] = useState(initialSeconds);
  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    let interval = null;
    if (isActive) {
      interval = setInterval(() => {
        if (seconds === 0) {
          if (minutes === 0) {
            clearInterval(interval);
            playAlarm();
          } else {
            setMinutes((minutes) => minutes - 1);
            setSeconds(59);
          }
        } else {
          setSeconds((seconds) => seconds - 1);
        }
      }, 1000);
    } else if (!isActive && seconds !== 0) {
      clearInterval(interval);
    }
    return () => clearInterval(interval);
  }, [isActive, minutes, seconds]);

  useEffect(() => {
    setMinutes(initialMinutes);
    setSeconds(initialSeconds);
  }, [initialMinutes, initialSeconds]);

  const playAlarm = () => {
    const audio = new Audio(process.env.PUBLIC_URL + "/rooster-morning.wav");
    audio.play();
  };

  const handlePlayPause = () => {
    setIsActive(!isActive);
  };

  const handleReset = () => {
    setIsActive(false);
    setMinutes(initialMinutes);
    setSeconds(initialSeconds);
  };

  return (
    <div className="timer">
      <h1>
        {String(minutes).padStart(2, "0")}:{String(seconds).padStart(2, "0")}
      </h1>
      <ButtonGroup aria-label="Timer controls" size="lg">
        <Button
          className="button"
          variant={isActive ? "warning" : "success"}
          onClick={handlePlayPause}
        >
          {isActive ? "Pause" : "Play"}
        </Button>
        <Button className="button" variant="danger" onClick={handleReset}>
          Reset
        </Button>
      </ButtonGroup>
    </div>
  );
};

export default Timer;
