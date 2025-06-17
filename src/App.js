import React, { useState, useEffect } from "react";
import TaskList from "./components/TaskList";
import Timer from "./components/Timer";
import Progress from "./components/Progress";
import "./App.css";

function App() {
  const [tasks, setTasks] = useState(() => {
    return JSON.parse(localStorage.getItem("tasks")) || [];
  });

  const [focusTime, setFocusTime] = useState(() => {
    return parseInt(localStorage.getItem("focusTime")) || 0;
  });

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  useEffect(() => {
    localStorage.setItem("focusTime", focusTime.toString());
  }, [focusTime]);

  return (
    <div className="App">
      <h1>Task Manager with Pomodoro</h1>
      <Timer setFocusTime={setFocusTime} />
      <TaskList tasks={tasks} setTasks={setTasks} />
      <Progress tasks={tasks} focusTime={focusTime} />
    </div>
  );
}

export default App;
