import React from "react";

function Progress({ tasks, focusTime }) {
  const completed = tasks.filter((t) => t.done).length;
  const uncompleted = tasks.filter((t) => !t.done).length;
  const minutes = Math.floor(focusTime / 60);
  const seconds = focusTime % 60;

  return (
    <div className="progress">
      <p>✅ Tasks completed: {completed}</p>
      <p>📋 Tasks uncompleted: {uncompleted}</p>
      <p>
        🕒 Focus time: {minutes} minute{minutes !== 1 ? "s" : ""} {seconds}{" "}
        second{seconds !== 1 ? "s" : ""}
      </p>
    </div>
  );
}

export default Progress;
