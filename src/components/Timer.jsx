import React, { useState, useEffect, useRef } from "react";

function Timer({ setFocusTime }) {
  const [focusMinutes, setFocusMinutes] = useState(25);
  const [breakMinutes, setBreakMinutes] = useState(5);
  const [secondsLeft, setSecondsLeft] = useState(25 * 60);
  const [isRunning, setIsRunning] = useState(false);
  const [isBreak, setIsBreak] = useState(false);
  const [cycleCount, setCycleCount] = useState(0);

  // ✅ useRef to track last session type to prevent double increment
  const lastSessionWasBreak = useRef(false);

  useEffect(() => {
    if (!isRunning) return;

    const interval = setInterval(() => {
      setSecondsLeft((prev) => {
        if (prev <= 1) {
          const audio = new Audio(
            "https://actions.google.com/sounds/v1/alarms/beep_short.ogg"
          );
          audio.play();

          const goingToBreak = !isBreak;

          // ✅ only increment session count if we're finishing a focus session
          if (!isBreak && !lastSessionWasBreak.current) {
            setCycleCount((count) => count + 1);
            lastSessionWasBreak.current = true; // mark that we're now in break
          } else {
            lastSessionWasBreak.current = false; // reset when going back to focus
          }

          setIsBreak(goingToBreak);
          return goingToBreak ? breakMinutes * 60 : focusMinutes * 60;
        }

        return prev - 1;
      });

      // ✅ increment focus time only during focus session
      if (!isBreak) {
        setFocusTime((time) => time + 1);
      }
    }, 1000);

    return () => clearInterval(interval);
  }, [isRunning, isBreak, focusMinutes, breakMinutes, setFocusTime]);

  const formatTime = (sec) =>
    `${String(Math.floor(sec / 60)).padStart(2, "0")}:${String(
      sec % 60
    ).padStart(2, "0")}`;

  return (
    <div className="timer">
      <h2>{isBreak ? "Break Time" : "Focus Time"}</h2>
      <div className="time">{formatTime(secondsLeft)}</div>

      <div className="button-group">
        <button onClick={() => setIsRunning(!isRunning)}>
          {isRunning ? "Pause" : "Start"}
        </button>

        <button
          onClick={() =>
            setSecondsLeft(isBreak ? breakMinutes * 60 : focusMinutes * 60)
          }
        >
          Reset
        </button>
      </div>

      <div className="timer-settings">
        <label>
          Focus (mins):
          <input
            type="number"
            min="1"
            value={focusMinutes}
            onChange={(e) => {
              const val = Number(e.target.value);
              setFocusMinutes(val);
              if (!isBreak) setSecondsLeft(val * 60);
            }}
          />
        </label>

        <label>
          Break (mins):
          <input
            type="number"
            min="1"
            value={breakMinutes}
            onChange={(e) => {
              const val = Number(e.target.value);
              setBreakMinutes(val);
              if (isBreak) setSecondsLeft(val * 60);
            }}
          />
        </label>
      </div>

      <div className="cycle-info">
        ✅ Completed Focus Sessions: <strong>{cycleCount}</strong>
      </div>
    </div>
  );
}

export default Timer;
